import { useState } from "react";
import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  MinusIcon,
  PlusIcon,
} from "./Icons";
import { KayaKoNaButton } from "./KayaKoNa";
import { categoryTone, formatAmount } from "../lib/format";

export default function RecipeDetail({ recipe, done, onToggleDone }) {
  const [servings, setServings] = useState(recipe.servings);
  const [checked, setChecked] = useState(() => new Set());
  const [stepsDone, setStepsDone] = useState(() => new Set());
  const [imgFailed, setImgFailed] = useState(false);

  const factor = servings / recipe.servings;
  const progress = Math.round((stepsDone.size / recipe.steps.length) * 100);

  const toggle = (setter, i) =>
    setter((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <>
      <header className="tile-pattern text-papel">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <a
              href="#/"
              className="inline-flex items-center gap-2 font-display font-semibold text-papel/90 hover:text-calamansi"
            >
              <ArrowLeftIcon className="size-5" />
              Balik sa menu
            </a>
            <span className="font-display text-2xl font-extrabold tracking-tight text-calamansi">
              Kusina
            </span>
          </div>

          <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_18rem]">
            <div>
              <span
                className={`inline-block rounded-full px-3 py-1 font-display text-sm font-semibold ${categoryTone(recipe.category)}`}
              >
                {recipe.category}
              </span>
              <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-6xl">
                {recipe.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-papel/85">
                {recipe.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="inline-flex items-center gap-2 font-display font-bold">
                  <ClockIcon className="size-5 text-calamansi" />
                  {recipe.cookTime} minuto
                </span>
                <span className="font-display font-bold">
                  {recipe.difficulty}
                </span>
                <KayaKoNaButton done={done} onToggle={onToggleDone} />
              </div>
            </div>
            {recipe.image && !imgFailed && (
              <img
                src={recipe.image}
                alt={recipe.title}
                onError={() => setImgFailed(true)}
                className="aspect-square w-full max-w-72 rounded-3xl object-cover shadow-[0_6px_0_0_rgba(0,0,0,0.25)] md:justify-self-end"
              />
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[22rem_1fr]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl bg-white p-6 shadow-[0_2px_0_0_rgba(42,27,20,0.08)]">
            <h2 className="font-display text-2xl font-extrabold">
              Mga sangkap
            </h2>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-papel p-2">
              <button
                type="button"
                onClick={() => setServings((s) => Math.max(1, s - 1))}
                aria-label="Bawasan ang servings"
                className="grid size-10 place-items-center rounded-xl bg-white hover:bg-calamansi"
              >
                <MinusIcon className="size-5" />
              </button>
              <p className="font-display font-bold" aria-live="polite">
                Para sa {servings} tao
              </p>
              <button
                type="button"
                onClick={() => setServings((s) => Math.min(20, s + 1))}
                aria-label="Dagdagan ang servings"
                className="grid size-10 place-items-center rounded-xl bg-white hover:bg-calamansi"
              >
                <PlusIcon className="size-5" />
              </button>
            </div>

            <ul className="mt-3 divide-y-2 divide-dotted divide-toyo/15">
              {recipe.ingredients.map((ing, i) => {
                const c = checked.has(i);
                return (
                  <li key={i}>
                    <label className="flex cursor-pointer items-start gap-3 py-2.5">
                      <input
                        type="checkbox"
                        checked={c}
                        onChange={() => toggle(setChecked, i)}
                        className="peer sr-only"
                      />
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded border-2 border-toyo/40 text-transparent peer-checked:border-dahon peer-checked:bg-dahon peer-checked:text-calamansi peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sili">
                        <CheckIcon className="size-3.5" />
                      </span>
                      <span className={c ? "text-toyo/45 line-through" : ""}>
                        {ing.amount != null && (
                          <span className="font-display font-bold tabular-nums">
                            {formatAmount(ing.amount * factor)} {ing.unit}{" "}
                          </span>
                        )}
                        {ing.name}
                        {ing.note && (
                          <span className="italic text-toyo/60">
                            , {ing.note}
                          </span>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <section aria-labelledby="paano">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="paano" className="font-display text-3xl font-extrabold">
              Paano lutuin
            </h2>
            <p className="text-toyo/70">
              {stepsDone.size} sa {recipe.steps.length} hakbang
            </p>
          </div>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-toyo/10"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso ng pagluluto"
          >
            <div
              className="h-full rounded-full bg-dahon transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="mt-6 space-y-3">
            {recipe.steps.map((step, i) => {
              const d = stepsDone.has(i);
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => toggle(setStepsDone, i)}
                    aria-pressed={d}
                    className={`flex w-full gap-4 rounded-2xl border-2 p-4 text-left transition-colors ${
                      d
                        ? "border-dahon/30 bg-dahon/5"
                        : "border-toyo/10 bg-white hover:border-dahon"
                    }`}
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold ${
                        d ? "bg-dahon text-calamansi" : "bg-calamansi text-toyo"
                      }`}
                    >
                      {d ? <CheckIcon className="size-5" /> : i + 1}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-xl font-bold ${d ? "text-toyo/50 line-through" : ""}`}
                      >
                        {step.title}
                      </span>
                      <span
                        className={`mt-1 block ${d ? "text-toyo/50" : "text-toyo/85"}`}
                      >
                        {step.text}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {stepsDone.size > 0 && (
            <button
              type="button"
              onClick={() => setStepsDone(new Set())}
              className="mt-4 font-display font-semibold text-toyo/70 underline underline-offset-4 hover:text-sili"
            >
              I-reset ang mga hakbang
            </button>
          )}
        </section>
      </main>
    </>
  );
}
