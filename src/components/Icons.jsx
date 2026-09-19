const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={3} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const ArrowLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M19 12H5m6-6-6 6 6 6" />
  </svg>
);
export const MinusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);
export const PlusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const ChevronUpIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m6 15 6-6 6 6" />
  </svg>
);
export const SparkleIcon = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2c.6 3.6 2 5 5.6 5.6C14 8.2 12.6 9.6 12 13.2c-.6-3.6-2-5-5.6-5.6C10 7 11.4 5.6 12 2ZM19 13c.3 1.9 1 2.6 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.4 2.7-1.1 3-3ZM5 14c.4 2.3 1.3 3.2 3.6 3.6C6.3 18 5.4 18.9 5 21.2c-.4-2.3-1.3-3.2-3.6-3.6C3.7 17.2 4.6 16.3 5 14Z" />
  </svg>
);
