import { CheckIcon } from "./Icons";

// Bilog na "stamp" para markahan ang mga dish na kaya mo nang lutuin
export function KayaKoNaStamp({ done, onToggle, title }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={done}
      aria-label={`Kaya ko na ang ${title}`}
      title={done ? "Kaya mo na ito" : "Markahan na kaya ko na"}
      className={`grid size-11 shrink-0 place-items-center rounded-full border-2 transition-colors ${
        done
          ? "border-dahon bg-dahon text-calamansi"
          : "border-dashed border-toyo/30 text-transparent hover:border-dahon hover:text-dahon/40"
      }`}
    >
      <CheckIcon className="size-5" />
    </button>
  );
}

// Malaking button sa detail page
export function KayaKoNaButton({ done, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={done}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-bold transition-colors ${
        done
          ? "bg-calamansi text-toyo"
          : "border-2 border-calamansi/70 text-calamansi hover:bg-calamansi hover:text-toyo"
      }`}
    >
      <CheckIcon className="size-5" />
      {done ? "Kaya ko na 'to" : "Markahan: kaya ko na 'to"}
    </button>
  );
}
