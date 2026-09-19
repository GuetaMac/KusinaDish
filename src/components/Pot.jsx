// Kaldero na may usok — ang tanging gumagalaw na bahagi ng hero.
export default function Pot({ className = "" }) {
  return (
    <svg
      viewBox="0 -24 220 224"
      className={className}
      role="img"
      aria-label="Kaldero na may umuusok na sabaw"
    >
      <ellipse cx="110" cy="178" rx="84" ry="9" fill="#143f28" opacity="0.55" />
      <g fill="none" stroke="#e6db4a" strokeWidth="5" strokeLinecap="round">
        <path className="steam" d="M86 56c-8-9 8-14 0-24" />
        <path className="steam" d="M110 52c-8-9 8-14 0-24" />
        <path className="steam" d="M134 56c-8-9 8-14 0-24" />
      </g>
      <rect x="20" y="112" width="30" height="13" rx="6.5" fill="#c23524" />
      <rect x="170" y="112" width="30" height="13" rx="6.5" fill="#c23524" />
      <path d="M44 108h132v46a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20z" fill="#f1f5ea" />
      <path d="M44 138h132v16a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20z" fill="#e6db4a" opacity="0.35" />
      <rect x="38" y="98" width="144" height="14" rx="7" fill="#c23524" />
      <path d="M54 98c0-16 25-24 56-24s56 8 56 24z" fill="#e9efdf" />
      <rect x="106" y="62" width="8" height="12" rx="3" fill="#c23524" />
      <circle cx="110" cy="60" r="8" fill="#c23524" />
    </svg>
  );
}
