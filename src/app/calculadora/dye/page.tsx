import DyeDialog from "@/components/dialogs/DyeDialog";
import Navbar from "@/components/navigation/Navbar";
import DyeInputs from "@/components/tables/DyeInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <DyeInputs />
        <DyeDialog />
      </section>
    </main>
  );
}
