import Nav from "@/components/section/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" h-dvh">
       <Nav/>
       {children}
          
  <script src="http://localhost:3000/chatbot.js" chatbot-id="687e2c8200273cd44cab "></script>  
   </main>
  );
}
