/* eslint-disable react/prop-types */

const icons = {
  finalizado: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#2d7a4f" strokeWidth="1.5" />
      <path d="M4.5 7l2 2 3-3" stroke="#2d7a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "em-andamento": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#b85c38" strokeWidth="1.5" />
      <path d="M7 4v3.5l2 1.5" stroke="#b85c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pausado: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#c9960a" strokeWidth="1.5" />
      <path d="M5.5 5v4M8.5 5v4" stroke="#c9960a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  manutencao: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#3b7abf" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M7 4.5v3M7 9v.5" stroke="#3b7abf" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const labels = {
  finalizado: "Finalizado",
  "em-andamento": "Em andamento",
  pausado: "Pausado",
  manutencao: "Manutenção",
};

export function StatusIcon({ status }) {
  return icons[status] ?? null;
}

export function StatusLegend() {
  return (
    <div className="projects-legend">
      {Object.keys(icons).map((status) => (
        <span key={status}>
          <StatusIcon status={status} />
          {labels[status]}
        </span>
      ))}
    </div>
  );
}