import Container from "../components/container";
import { SITE } from "../config/site";

export default function MentionsPage() {
  return (
    <section id="mentions" className="bg-white border-t">
      <Container className="py-16 sm:py-20 text-slate-700">
        <h2 className="text-2xl font-bold mb-4">Mentions légales</h2>

        <p><strong>Site édité par :</strong> NeoCR</p>
        <p><strong>Statut :</strong> Micro-entrepreneur</p>
        <p><strong>SIREN / SIRET :</strong> En cours d’immatriculation</p>
        <p><strong>Adresse :</strong> 64100 Bayonne</p>
        <p>
          <strong>E-mail :</strong>{" "}
          <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>
          <strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Les informations ci-dessus sont fournies à titre légal et pourront être mises à jour à mesure
          de l’évolution de la situation administrative.
        </p>
      </Container>
    </section>
  );
}
