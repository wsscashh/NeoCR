import type { Metadata } from "next";
import "./globals.css";
import Button from "@/app/components/button";   // <— bouton custom
import { SITE } from "@/app/config/site";       // infos du site (nom, email, etc.)

export const metadata: Metadata = {
  title: "NeoCR — Comptes-rendus de réunions clairs",
  description:
    "Envoyez vos enregistrements. Recevez un compte-rendu structuré : Décisions, Actions, Points ouverts. Service FR, livraison < 24h."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased text-slate-900">
        {/* Header commun */}
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="NeoCR logo" className="h-10 w-auto" />
              {/* <span className="text-base font-semibold">{SITE.name}</span> */}
            </div>

            {/* Nav */}
            <nav className="hidden items-center gap-6 text-sm sm:flex">
              <a href="#pourquoi" className="text-slate-700 hover:text-slate-900">Pourquoi</a>
              <a href="#packs" className="text-slate-700 hover:text-slate-900">Packs</a>
              <a href="#exemple" className="text-slate-700 hover:text-slate-900">Exemple</a>
            </nav>

            {/* CTA */}
            <Button href="#tester" className="hidden sm:inline-flex">
              Tester gratuitement
            </Button>
          </div>
        </header>

        {/* Contenu des pages */}
        {children}
      </body>
    </html>
  );
}
