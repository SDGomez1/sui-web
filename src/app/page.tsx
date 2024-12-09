import Logo from "@/assets/img/isologo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <Image src={Logo} alt="" />
    </div>
  );
}
