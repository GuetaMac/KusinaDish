import DishTile from "./DishTile";
import { ClockIcon } from "./Icons";

// Parang "specials board" ng karinderya — iisang ulam na naka-highlight,
// pinipili base sa petsa kaya pareho ito sa lahat sa buong araw.
export default function Spotlight({ recipe }) {
  if (!recipe) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8">
      <div className="relative overflow-hidden rounded-3xl bg-dahon text-papel">
        <div
          className="tile-pattern absolute inset-0 opacity-95"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:gap-8">
          <div className="flex-1">
            <span className="inline-block -rotate-2 rounded-full bg-calamansi px-3 py-1 font-display text-sm font-semibold text-toyo shadow-sm">
              Espesyal ngayon
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              {recipe.title}
            </h2>
            <p className="mt-2 max-w-xl text-papel/85">{recipe.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-papel/85">
              <span className="inline-flex items-center gap-1.5 font-display font-bold">
                <ClockIcon className="size-4 text-calamansi" />
                {recipe.cookTime} min
              </span>
              <span>{recipe.difficulty}</span>
              <span>Para sa {recipe.servings}</span>
            </div>

            <a
              href={`#/recipe/${recipe.id}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-calamansi px-5 py-2.5 font-display font-bold text-toyo transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Lutuin ito ngayon
            </a>
          </div>
          <DishTile
            recipe={recipe}
            className="hidden aspect-square w-56 shrink-0 shadow-[0_6px_0_0_rgba(0,0,0,0.2)] md:block"
          />
        </div>
      </div>
    </section>
  );
}
