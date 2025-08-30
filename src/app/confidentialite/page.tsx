import Container from "../components/container";
import { SITE } from "../config/site";

export default function ConfidentialitePage() {
  return (
    <section id="confidentialite" className="bg-slate-50 border-t">
      <Container className="py-16 sm:py-20 text-slate-700">
        <h2 className="text-2xl font-bold mb-4">Politique de confidentialité</h2>

        <p>
          Nous collectons uniquement les données nécessaires au traitement de vos commandes
          (nom, e-mail, fichiers envoyés). Vos données ne sont jamais revendues à des tiers.
        </p>

        <p className="mt-4">
          Conformément au RGPD, vous pouvez demander la suppression ou la modification de vos
          données à tout moment en écrivant à <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <p className="mt-4">
          Les paiements sont sécurisés et traités par PayPal. Nous n’avons jamais accès à vos
          informations bancaires.
        </p>
      </Container>
    </section>
  );
}
