import MainPanel from "@/components/calculator/MainPanel";
import Navbar from "@/components/navigation/Navbar";
export default function page() {
    return (
        <main className="min-h-svh w-full pb-10">
            <Navbar />
            <MainPanel />
        </main>
    );
}
