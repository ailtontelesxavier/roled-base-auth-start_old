import NavBar from "@/components/nav-bar";
import "./globals.css";
import AuthProvider from "@/components/providers/auth-rpovider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="dark">
        <AuthProvider>
        <NavBar />
        <main className="grid h-screen w-screen place-content-center">
          {children}
        </main>
        </AuthProvider>
      </body>
    </html>
  );
}
