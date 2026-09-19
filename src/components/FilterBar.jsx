import { CheckIcon } from "./Icons";

const chip =
  "rounded-full border-2 px-4 py-1.5 font-display font-semibold whitespace-nowrap transition-colors";

export default function FilterBar({
  categories,
  category,
  onCategory,
  onlyDone,
  onOnlyDone,
  doneCount,
}) {
  return (
    <div className="sticky top-0 z-10 border-b border-toyo/10 bg-papel/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-5 py-3">
        {["Lahat", ...categories].map((c) => {
          const active = category === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onCategory(c)}
              aria-pressed={active}
              className={`${chip} ${
                active
                  ? "border-toyo bg-toyo text-papel"
                  : "border-toyo/15 hover:border-toyo/50"
              }`}
            >
              {c}
            </button>
          );
        })}

        <span aria-hidden="true" className="mx-1 h-6 w-px shrink-0 bg-toyo/15" />

        <button
          type="button"
          onClick={() => onOnlyDone(!onlyDone)}
          aria-pressed={onlyDone}
          className={`${chip} inline-flex items-center gap-1.5 ${
            onlyDone
              ? "border-dahon bg-dahon text-calamansi"
              : "border-toyo/15 hover:border-dahon"
          }`}
        >
          <CheckIcon className="size-4" />
          Kaya ko na ({doneCount})
        </button>
      </div>
    </div>
  );
}
