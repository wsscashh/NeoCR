import React from "react";
import Button from "./button";

type Props = {
  title: string;
  price: string;
  period?: string;
  features: string[];
  cta?: { label: string; href: string };
  highlight?: boolean;
  /** URL PayPal "action" (ex: https://www.paypal.com/ncp/payment/XXXX) */
  paypalAction?: string;
};

export default function PricingCard({
  title,
  price,
  period,
  features,
  cta,
  highlight,
  paypalAction,
}: Props) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 ${
        highlight
          ? "border-blue-300 shadow-[0_8px_40px_rgba(59,130,246,0.15)]"
          : "border-slate-200"
      }`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 flex items-end gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-sm text-slate-500">{period}</span>}
        </div>
      </div>

      <ul className="mb-6 flex-1 space-y-2 text-sm text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {paypalAction ? (
        <div className="text-center">
          <form
            action={paypalAction}
            method="post"
            target="_blank"
            style={{
              display: "inline-grid",
              justifyItems: "center",
              alignContent: "start",
              gap: "0.5rem",
            }}
          >
            <input
              type="submit"
              value="Acheter"
              style={{
                textAlign: "center",
                border: "none",
                borderRadius: "0.375rem",
                minWidth: "11.625rem",
                padding: "0 2rem",
                height: "2.625rem",
                fontWeight: 700,
                backgroundColor: "#FFD140",
                color: "#000000",
                fontFamily: `"Helvetica Neue", Arial, sans-serif`,
                fontSize: "1rem",
                lineHeight: "1.25rem",
                cursor: "pointer",
              }}
            />
            <img
              src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
              alt="cards"
              style={{ height: "18px" }}
            />
            <section style={{ fontSize: "0.75rem" }}>
              Optimisé par{" "}
              <img
                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                alt="paypal"
                style={{ height: "0.875rem", verticalAlign: "middle" }}
              />
            </section>
          </form>
        </div>
      ) : cta ? (
        <Button href={cta.href}>{cta.label}</Button>
      ) : null}
    </div>
  );
}
