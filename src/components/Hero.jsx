import Pot from "./Pot";
import { SearchIcon } from "./Icons";

export default function Hero({ query, onQuery }) {
  return (
    <header className="tile-pattern text-papel">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 sm:pb-16">
        <a
          href="#/"
          className="font-display text-2xl font-extrabold tracking-tight text-calamansi"
        >
          Kusina
        </a>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h1 className="max-w-2xl font-display text-5xl font-extrabold sm:text-7xl">
              Ano'ng lulutuin natin ngayon?
            </h1>
            <p className="mt-5 max-w-xl text-lg text-papel/85">
              Mga ulam, sabaw, at merienda na kaya mong gawin sa bahay. Hakbang
              por hakbang, may sukat ng sangkap.
            </p>

            <label className="relative mt-8 block max-w-xl">
              <span className="sr-only">Maghanap ng recipe o sangkap</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-toyo/60" />
              <input
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Hanapin: manok, kangkong, adobo"
                className="w-full rounded-2xl border-0 bg-papel py-4 pl-12 pr-4 text-lg text-toyo placeholder:text-toyo/55 focus:outline-4 focus:outline-calamansi"
              />
            </label>
          </div>

          <Pot className="hidden w-56 md:block lg:w-72" />
        </div>
      </div>
    </header>
  );
}
