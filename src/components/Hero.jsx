import { useRef } from "react";
import Pot from "./Pot";
import { SearchIcon } from "./Icons";

export default function Hero({ query, onQuery, totalCount, doneCount }) {
  const potRef = useRef(null);

  // Munting parallax: sumusunod nang bahagya ang kaldero sa mouse —
  // isang beses lang na galaw sa buong page bukod sa usok.
  const onMouseMove = (e) => {
    const pot = potRef.current;
    if (!pot || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pot.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
  };
  const onMouseLeave = () => {
    if (potRef.current) potRef.current.style.transform = "";
  };

  return (
    <header
      className="tile-pattern text-papel"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 sm:pb-16">
        <a
          href="#/"
          className="rise-up inline-block font-display text-2xl font-extrabold tracking-tight text-calamansi"
        >
          Kusina ni Macky
        </a>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h1 className="max-w-2xl font-display text-5xl font-extrabold sm:text-7xl">
              <span
                className="rise-up block"
                style={{ animationDelay: "80ms" }}
              >
                Ano'ng lulutuin
              </span>
              <span
                className="rise-up block"
                style={{ animationDelay: "180ms" }}
              >
                mo ngayon bb?
              </span>
            </h1>
            <p
              className="rise-up mt-5 max-w-xl text-lg text-papel/85"
              style={{ animationDelay: "280ms" }}
            >
              Ano gusto mong lutuin, bebe?
            </p>

            <label
              className="rise-up relative mt-8 block max-w-xl"
              style={{ animationDelay: "360ms" }}
            >
              <span className="sr-only">Maghanap ng recipe o sangkap</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-toyo/60" />
              <input
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Hanapin: manok, kangkong, adobo"
                className="w-full rounded-2xl border-0 bg-papel py-4 pl-12 pr-4 text-lg text-toyo shadow-[0_0_0_0_rgba(230,219,74,0)] outline-none transition-shadow duration-300 placeholder:text-toyo/55 focus:shadow-[0_0_0_5px_rgba(230,219,74,0.55)]"
              />
            </label>

            {totalCount != null && (
              <div
                className="rise-up mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-papel/80"
                style={{ animationDelay: "440ms" }}
              >
                <span>
                  <strong className="font-display text-papel">
                    {totalCount}
                  </strong>{" "}
                  na recipe
                </span>
                <span>
                  <strong className="font-display text-papel">
                    {doneCount}
                  </strong>{" "}
                  kaya mo nang lutuin
                </span>
              </div>
            )}
          </div>

          <div
            ref={potRef}
            className="hidden transition-transform duration-300 ease-out md:block"
          >
            <Pot className="w-56 lg:w-72" />
          </div>
        </div>
      </div>
    </header>
  );
}
