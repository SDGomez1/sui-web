import FileReadingInput from "@/components/calculator/fileReadingInput";
import WaxDialog from "@/components/dialogs/WaxDialog";
import Navbar from "@/components/navigation/Navbar";
import WaxInputs from "@/components/tables/WaxInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <WaxInputs />
        <WaxDialog />
        <FileReadingInput fieldType="wax" />
      </section>
    </main>
  );
}
