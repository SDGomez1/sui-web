import Navbar from "@/components/navigation/Navbar";
import FraganceInputs from "@/components/tables/FraganceInputs";
import NewFraganceEntry from "@/components/newTableEntry/NewFraganceEntry";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <FraganceInputs />
        <NewFraganceEntry />
      </section>
    </main>
  );
}
