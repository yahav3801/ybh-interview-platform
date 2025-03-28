import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

const monaSans = Mona_Sans({
  variable: "--font-mona_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PerpWise",
  description: "An AI-powered platform focused on preparing for interviews",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/sign-in");
  }
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
