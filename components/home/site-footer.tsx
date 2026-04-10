export function SiteFooter() {
  return (
    <footer className="section-frame pb-8 pt-2 sm:pb-10">
      <div className="flex flex-col gap-4 rounded-[1.8rem] border border-[var(--line)] bg-white/65 px-5 py-5 text-sm text-[var(--muted)] shadow-[0_14px_36px_rgba(79,63,45,0.06)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Jornal do Pré-2. Feito para guardar rotinas que merecem durar mais.</p>
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#677487]">
          turma 2026 • memórias da semana
        </p>
      </div>
    </footer>
  );
}
