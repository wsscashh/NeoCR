// src/app/config/site.ts
export const SITE = {
    name: "NeoCR",
    email: "neocr.contact@gmail.com",        // ← ton adresse
    whatsapp: "",                      // ex: "33612345678" sans +
    formspreeId: "",                   // ← ton ID Formspree (ex: "mgebjvdk")
    paypal: {                          // tu peux garder Stripe vide
      unit: "https://www.paypal.com/ncp/payment/HG3W3D7CBWTSN",
      pack5: "https://www.paypal.com/ncp/payment/86FQNR93WY7BN",
      pme:  "https://www.paypal.com/ncp/payment/DS7STWNYEBZTL",
    },
  };
  