import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/components/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="h-[100vh]">
        <Homepage />
      </div>
    </main>
  );
}
