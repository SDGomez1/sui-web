"use client";
import Navbar from "@/components/navigation/Navbar";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import FraganceInputs from "@/components/tables/FraganceInputs";

export default function Page() {
  const addNewEntry = useMutation(api.fragance.addNewFragance);
  const formSchema = z.object({
    type: z.string().min(2),
    price: z.preprocess(
      (value) => parseFloat(value as string),
      z.number().min(0, "Price must be a positive number."),
    ),
    weight: z.preprocess(
      (value) => parseFloat(value as string),
      z.number().min(0.1, "Weight must be at least 0.1."),
    ),
    date: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      price: 0,
      weight: 0,
      date: "",
    },
    mode: "onChange",
  });

  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <FraganceInputs />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Añadir nuevo</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Añade los nuevos campos</AlertDialogTitle>
              <AlertDialogDescription>
                Todos los campos son obligatorios
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Form {...form}>
              <form
                className="gap-5 flex flex-col"
                onSubmit={form.handleSubmit(
                  (data) => {
                    addNewEntry({
                      type: data.type,
                      price: data.price,
                      weight: data.weight,
                      date: data.date,
                    });
                  },
                  (error) => console.log(error),
                )}
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo</FormLabel>
                      <FormControl>
                        <Input placeholder="tipo" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio(cop)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="price" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>peso(g)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Peso" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de compra</FormLabel>
                      <FormControl>
                        <Input placeholder="fecha" type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <AlertDialogAction asChild>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    Enviar
                  </Button>
                </AlertDialogAction>
                <AlertDialogCancel asChild>
                  <Button variant={"outline"}>Cancelar</Button>
                </AlertDialogCancel>
              </form>
            </Form>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </main>
  );
}
