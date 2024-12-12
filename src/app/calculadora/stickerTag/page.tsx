import StickerTagDialog from "@/components/dialogs/StickerTagDialog";
import Navbar from "@/components/navigation/Navbar";
import StickerTagInputs from "@/components/tables/StickerTagInputs";

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Navbar />
      <section className="flex justify-center items-center px-28 flex-col gap-4">
        <StickerTagInputs />
        <StickerTagDialog />
      </section>
    </main>
  );
}
