import JarDialog from "@/components/dialogs/JarDialog";
import Navbar from "@/components/navigation/Navbar";
import JarInputs from "@/components/tables/JarInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <JarInputs />
        <JarDialog />
      </section>
    </main>
  );
}
