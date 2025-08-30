import Container from "../components/container";

export default function CGVPage() {
  return (
    <section id="cgv" className="bg-white border-t">
      <Container className="py-16 sm:py-20 text-slate-700">
        <h2 className="text-2xl font-bold mb-4">Conditions générales de vente</h2>

        <p>
          Les services proposés (comptes-rendus de réunions) sont livrés sous 24h maximum
          après réception des fichiers audio/vidéo, sauf cas exceptionnel communiqué au client.
        </p>

        <p className="mt-4">
          Les prix sont indiqués en euros TTC. Le paiement est exigible immédiatement via PayPal.
        </p>

        <p className="mt-4">
          Aucun remboursement ne sera effectué après livraison du compte-rendu, sauf en cas
          d’erreur manifeste de notre part.
        </p>

        <p className="mt-4">
          En passant commande, vous acceptez pleinement ces conditions générales de vente.
        </p>
      </Container>
    </section>
  );
}
