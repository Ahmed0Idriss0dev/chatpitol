import Navbar from "@/components/section/Navbar";
import SideBar from "@/components/section/SideBar";
import Logo from "@/components/ui/Logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[200px_1fr] w-full h-dvh ">
       <SideBar/>
       <div className="px-6 w-full bg-chatbot-50">
       <Navbar/>
       {children}
       </div>
    </main>
  );
}
