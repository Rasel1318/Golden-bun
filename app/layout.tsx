import Nav from "@/components/Nav";
import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-[#FFF8EE]">
        <Nav />
        {children}
      </body>
    </html>
  );
}
