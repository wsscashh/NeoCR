// src/app/components/ContactForm.tsx
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ⚠️ les 3 variables doivent exister dans .env.local
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      // petit log utile pour vérifier le fichier
      const f = (formRef.current.elements.namedItem("mon_fichier") as HTMLInputElement | null)?.files?.[0];
      console.log("Fichier sélectionné:", f);

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      alert("Message envoyé ✅");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Échec de l’envoi ❌ (voir console)");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      encType="multipart/form-data" // indispensable pour envoyer des fichiers
      className="space-y-3"
    >
      {/* pour {{title}} dans le sujet du template EmailJS */}
      <input type="hidden" name="title" value="Contact" />

      <input
        type="text"
        name="from_name"              // ← {{from_name}}
        placeholder="Votre nom"
        required
        className="w-full rounded border p-2"
      />

      <input
        type="email"
        name="from_email"            // ← {{from_email}}
        placeholder="Votre e-mail"
        required
        className="w-full rounded border p-2"
      />

      <textarea
        name="message"               // ← {{message}}
        placeholder="Votre message"
        required
        rows={5}
        className="w-full rounded border p-2"
      />

      {/* Doit s’appeler exactement comme dans le template → “mon_fichier” */}
      <input
        type="file"
        name="mon_fichier"
        className="w-full rounded border p-2"
        // accept="application/pdf,image/*" // optionnel
      />

      <button
        type="submit"
        disabled={sending}
        className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {sending ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}