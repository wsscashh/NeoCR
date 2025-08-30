import Container from "./components/container";
import Button from "./components/button";
import Feature from "./components/feature";
import PricingCard from "./components/pricingcard";
import Badge from "./components/badge";
import { SITE } from "./config/site";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Page() {
  // Prépare des liens "mailto:" et WhatsApp avec message prérempli
  const emailSubject = encodeURIComponent("Demande de compte-rendu — NeoCR");
  const emailBody = encodeURIComponent(
    "Bonjour,\n\nJe souhaite un compte-rendu (volume estimé, outil: Zoom/Teams/WhatsApp).\nMerci !"
  );
  const mailto = `mailto:${SITE.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappHref = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Bonjour ! Je veux un compte-rendu. Pouvez-vous me recontacter ?"
      )}`
    : undefined;

  return (
    <main className="gradient">
      {/* Hero */}
      <section>
        <Container className="py-20 sm:py-28 text-center">
          <div className="mb-4 flex justify-center">
            <Badge>Service FR · Livraison &lt; 24h</Badge>
          </div>
          <h1 className="text-3xl font-bold sm:text-5xl">
            Ne perdez plus de temps avec vos comptes-rendus.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Envoyez vos enregistrements (Zoom, Teams, WhatsApp). Nous vous livrons un PDF structuré :
            Décisions, Actions par personne, Points ouverts. Prêt à partager.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="#tester">Tester gratuitement</Button>
            <Button href="#packs" variant="ghost">Voir les packs</Button>
          </div>
        </Container>
      </section>

      {/* Pourquoi */}
      <section id="pourquoi" className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Pourquoi {SITE.name} ?</h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              Gagnez du temps, clarifiez qui fait quoi, et faites avancer vos projets plus vite.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Feature title="Gagnez 2–3h / semaine">
              PDF prêt à l'emploi, trié par Décisions, Actions, Points ouverts.
            </Feature>
            <Feature title="FR-first, propre et fiable">
              Transcription + synthèse en français. Mise en page lisible et partageable.
            </Feature>
            <Feature title="Ultra simple">
              Déposez l'audio dans un Drive/Dropbox. Livraison &lt; 24h (souvent plus rapide).
            </Feature>
          </div>
        </Container>
      </section>

      {/* Packs */}
      <section id="packs" className="bg-slate-50">
        <Container className="py-16 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Choisissez votre formule</h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              Commencez à l'unité, passez au pack quand vous voyez la valeur.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <PricingCard
              title="À l'unité"
              price="49 €"
              period="/ mois"
              features={[
                "1 réunion (≤ 60 min)",
                "Livraison < 24h",
                "PDF structuré (Décisions, Actions, Points ouverts)"
              ]}
              paypalAction="https://www.paypal.com/ncp/payment/DS7STWNYEBZTL"
            />

            <PricingCard
              title="Pack 5 / mois"
              price="199 €"
              period="/ mois"
              features={[
                "5 réunions / mois",
                "Économisez 50 €",
                "Suivi continu et cohérent"
              ]}
              highlight
              paypalAction="https://www.paypal.com/ncp/payment/W9WSRDX3H9EK4" 
            />

            <PricingCard
              title="PME — jusqu'à 15 réunions"
              price="399 €"
              period="/ mois"
              features={[
                "Jusqu'à 15 réunions / mois",
                "Priorité de traitement",
                "Support direct"
              ]}
              paypalAction="https://www.paypal.com/ncp/payment/86FQNR93WY7BN"
            />
          </div>
        </Container>
      </section>

      {/* Exemple */}
      <section id="exemple" className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Avant / Après</h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              Ce que vous nous donnez vs ce que vous recevez.
            </p>
          </div>
          <div className="grid items-start gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h4 className="mb-2 font-semibold">Avant — transcription brute</h4>
              <pre className="whitespace-pre-wrap text-sm text-slate-600">
{`"Heu… ok, du coup on voit pour le devis ? Et Paul tu gères le mail…
Attends, on a dit quoi pour la date ?"`}</pre>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h4 className="mb-2 font-semibold">Après — compte-rendu structuré</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Décision :</strong> valider le devis X avant vendredi.</li>
                <li><strong>Actions :</strong> (Paul) envoyer le mail ; (Léa) préparer le doc.</li>
                <li><strong>Points ouverts :</strong> fixer la date de la prochaine réunion.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Test */}
      <section id="tester" className="bg-blue-600">
        <Container className="py-16 sm:py-20 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Test gratuit — on traite une première réunion pour vous
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Envoyez un enregistrement (≤ 30 min). PDF livré. Sans engagement.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href="#contact" variant="ghost">Envoyer un fichier</Button>
            <Button href={mailto}>Nous écrire</Button>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <Container className="py-16 sm:py-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Indiquez vos infos + joignez un fichier si besoin. Le message arrivera directement dans ma boîte mail.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex h-10 items-center rounded bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700"
            >
              {SITE.email}
            </a>

            <a
              href={whatsappHref ?? "#contact"}
              className="inline-flex h-10 items-center rounded border px-4 font-semibold text-slate-700 hover:bg-slate-100"
            >
              {SITE.whatsapp ? "WhatsApp" : "WhatsApp (bientôt)"}
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Si l'email n'est pas cliquable, votre appli e-mail n'est pas configurée, utilisez le formulaire ci-dessus.
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white relative z-10">
        <Container className="flex h-16 items-center justify-between pointer-events-auto">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {SITE.name} — Tous droits réservés — 
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-slate-500 underline cursor-pointer" href="/mentions">Mentions légales</Link>
            <Link className="text-slate-500 underline cursor-pointer" href="/cgv">CGV</Link>
            <Link className="text-slate-500 underline cursor-pointer" href="/confidentialite">Confidentialité</Link>
          </nav>
        </Container>
      </footer>
    </main>
  );
}
