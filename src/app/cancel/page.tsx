import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-50 p-6">
      <div className="max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">Paiement annulé ❌</h1>
        <p className="mt-4 text-slate-700">
          Le paiement n’a pas été finalisé. Pas de panique, vous pouvez réessayer.
        </p>
        <p className="mt-2 text-slate-500 text-sm">
          Si vous avez un souci, contactez-nous et on réglera ça rapidement.
        </p>

        <Link
          href="/#packs"
          className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition"
        >
          Revenir aux formules
        </Link>
      </div>
    </main>
  );
}
