import Navbar from "@/components/navigation/Navbar";
import DyeInputs from "@/components/tables/DyeInputs";
import FraganceInputs from "@/components/tables/FraganceInputs";
import JarInputs from "@/components/tables/JarInputs";
import StickerTagInputs from "@/components/tables/StickerTagInputs";
import WaxInputs from "@/components/tables/WaxInputs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="grid grid-cols-2 gap-4 px-10">
        <Card>
          <CardHeader>
            <CardTitle>Cera</CardTitle>
            <CardDescription>Todas las ceras disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <WaxInputs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tintes</CardTitle>
            <CardDescription>Todos las tintes disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <DyeInputs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fragancias</CardTitle>
            <CardDescription>Todas las fragancias disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <FraganceInputs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tarros</CardTitle>
            <CardDescription>Todos los tarros disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <JarInputs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Etiquetas</CardTitle>
            <CardDescription>Todas las etiquetas disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <StickerTagInputs />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
