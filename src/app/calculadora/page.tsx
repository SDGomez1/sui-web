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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export default function page() {
  return (
    <main className="min-h-svh w-full">
      <nav className="px-20 py-4">
        <h1>Sui</h1>
      </nav>
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
