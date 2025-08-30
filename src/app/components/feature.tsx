export default function Feature({ title, children }:{ title: string; children: React.ReactNode; }) {
    return (
      <div className="rounded-xl border border-slate-200 p-5">
        <h4 className="mb-2 text-base font-semibold">{title}</h4>
        <p className="text-sm text-slate-600">{children}</p>
      </div>
    );
  }
  