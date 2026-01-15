import Nav from "@/components/Nav";
import "./globals.css";
import TransitionProvider from "@/providers/TransitionProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-[#FFF8EE]">
        <TransitionProvider>
          <Nav />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
