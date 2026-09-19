import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "./Icons";

// Naghahawak ng "just stamped" na state para sa slam animation,
// pero isang beses lang — hindi papasok kapag first render na agad "done".
function useSlam(done) {
  const [slam, setSlam] = useState(false);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (done) {
      setSlam(true);
      const t = setTimeout(() => setSlam(false), 500);
      return () => clearTimeout(t);
    }
  }, [done]);
  return slam;
}

// Bilog na "stamp" para markahan ang mga dish na kaya mo nang lutuin
export function KayaKoNaStamp({ done, onToggle, title }) {
  const slam = useSlam(done);
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={done}
      aria-label={`Kaya ko na ang ${title}`}
      title={done ? "Kaya mo na ito" : "Markahan na kaya ko na"}
      className={`grid size-11 shrink-0 place-items-center rounded-full border-2 transition-colors active:scale-90 ${
        done
          ? "border-dahon bg-dahon text-calamansi"
          : "border-dashed border-toyo/30 text-transparent hover:border-dahon hover:text-dahon/40"
      }`}
    >
      <CheckIcon className={`size-5 ${slam ? "stamp-slam" : ""}`} />
    </button>
  );
}

// Malaking button sa detail page
export function KayaKoNaButton({ done, onToggle }) {
  const slam = useSlam(done);
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={done}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-bold transition-all active:scale-95 ${
        done
          ? "bg-calamansi text-toyo shadow-[0_3px_0_0_rgba(42,27,20,0.25)]"
          : "border-2 border-calamansi/70 text-calamansi hover:bg-calamansi hover:text-toyo"
      }`}
    >
      <CheckIcon className={`size-5 ${slam ? "stamp-slam" : ""}`} />
      {done ? "Kaya ko na 'to" : "Markahan: kaya ko na 'to"}
    </button>
  );
}
