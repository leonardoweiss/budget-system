import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Sitema de Notas",
  description: "Um sistema simples para gerenciar notas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
