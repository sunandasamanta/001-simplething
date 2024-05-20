import Navbar from "@/components/Navbar";
import Image from "next/image";
import cherryBlossom from "@/public/cherry-blossom.jpg";
import colorBust from "@/public/color-bust.jpg";
// import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center">
      <h1 className="font-bold text-3xl my-4">Hello, Bakshi. Welcome Back!</h1>
      {/* <Card src={cherryBlossom} alt="cherry blossom" /> */}
      <Image src={cherryBlossom} alt="cherry blossom" />
      <div className="h-1"></div>
      <Image src={colorBust} alt="color bust" />
    </main>
  );
}
