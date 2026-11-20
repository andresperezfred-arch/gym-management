import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Management - iPhone 14",
  description: "Gestión de miembros del gimnasio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
