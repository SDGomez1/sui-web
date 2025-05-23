"use client";
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
import { api } from "../../../convex/_generated/api";

export default function JarDialog() {
  const addNewEntry = useMutation(api.jar.addNewJar);
  const formSchema = z.object({
    type: z.string().min(2),
    quantity: z.preprocess(
      (value) => parseFloat(value as string),
      z.number().min(0, "Price must be a positive number."),
    ),
    price: z.preprocess(
      (value) => parseFloat(value as string),
      z.number().min(0, "Price must be a positive number."),
    ),

    date: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
      price: 0,
      type: "",
      date: "",
    },
    mode: "onChange",
  });

  return (
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
                  quantity: data.quantity,
                  price: data.price,
                  type: data.type,
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
                    <Input placeholder="Tipo de tarro" {...field} />
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
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel># de frascos</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Peso" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

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
  );
}
