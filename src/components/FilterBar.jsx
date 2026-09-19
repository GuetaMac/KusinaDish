import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CheckIcon } from "./Icons";

const chip =
  "relative z-10 rounded-full px-4 py-1.5 font-display font-semibold whitespace-nowrap transition-colors";

export default function FilterBar({
  categories,
  category,
  onCategory,
  onlyDone,
  onOnlyDone,
  doneCount,
}) {
  const all = ["Lahat", ...categories];
  const trackRef = useRef(null);
  const btnRefs = useRef({});
  const [indicator, setIndicator] = useState(null);

  const measure = () => {
    const track = trackRef.current;
    const btn = btnRefs.current[category];
    if (!track || !btn) return;
    const trackBox = track.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setIndicator({ left: btnBox.left - trackBox.left, width: btnBox.width });
  };

  useLayoutEffect(measure, [category, categories.length]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [category]);

  return (
    <div className="sticky top-0 z-10 border-b border-toyo/10 bg-papel/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-5 py-3">
        <div ref={trackRef} className="relative flex items-center gap-2">
          {indicator && (
            <span
              aria-hidden="true"
              className="absolute top-0 h-full rounded-full bg-toyo transition-[left,width] duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          )}
          {all.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                ref={(el) => (btnRefs.current[c] = el)}
                type="button"
                onClick={() => onCategory(c)}
                aria-pressed={active}
                className={`${chip} border-2 ${
                  active
                    ? "border-transparent text-papel"
                    : "border-toyo/15 hover:border-toyo/50"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <span
          aria-hidden="true"
          className="mx-1 h-6 w-px shrink-0 bg-toyo/15"
        />

        <button
          type="button"
          onClick={() => onOnlyDone(!onlyDone)}
          aria-pressed={onlyDone}
          className={`${chip} inline-flex items-center gap-1.5 border-2 ${
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
