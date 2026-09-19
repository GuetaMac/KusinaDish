import { ChevronUpIcon } from "./Icons";
import { usePastScroll } from "../hooks";

// Lumulutang na button pabalik sa taas — lumalabas lang kapag medyo
// malayo na ang na-scroll, para hindi puno ang screen ng dagdag button.
export default function ScrollTop() {
  const visible = usePastScroll();
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Balik sa taas"
      className={`fixed bottom-6 right-5 z-20 grid size-12 place-items-center rounded-full bg-toyo text-papel shadow-lg transition-all duration-300 hover:bg-sili active:scale-90 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUpIcon className="size-5" />
    </button>
  );
}
