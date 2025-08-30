import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 p-6">
      <div className="max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">Paiement confirmé ✅</h1>
        <p className="mt-4 text-slate-700">
          Merci pour votre confiance. Votre paiement a bien été enregistré.
        </p>
        <p className="mt-2 text-slate-500 text-sm">
          Vous recevrez un email de confirmation sous peu.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-2 text-white font-semibold hover:bg-green-700 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
