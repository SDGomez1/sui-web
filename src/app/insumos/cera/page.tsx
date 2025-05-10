import Navbar from "@/components/navigation/Navbar";
import NewWaxEntry from "@/components/newTableEntry/NewWaxEntry";
import WaxInputs from "@/components/tables/WaxInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <WaxInputs />
        <NewWaxEntry />
      </section>
    </main>
  );
}
