import TableCards from "@/components/calculator/TableCards";
import Navbar from "@/components/navigation/Navbar";
export default function page() {
  return (
    <main className="min-h-svh w-full pb-10">
      <Navbar />
      <TableCards />
    </main>
  );
}
