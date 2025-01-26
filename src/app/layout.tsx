import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css"; // Global Tailwind CSS

export const metadata = {
  title: "3D Portfolio",
  description: "A unique 3D developer portfolio",
};


export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <div className="min-h-screen">{children}</div>

        {/* Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}