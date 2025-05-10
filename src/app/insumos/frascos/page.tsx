import Navbar from "@/components/navigation/Navbar";
import NewJarEntry from "@/components/newTableEntry/NewJarEntry";
import JarInputs from "@/components/tables/JarInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <JarInputs />
        <NewJarEntry />
      </section>
    </main>
  );
}
