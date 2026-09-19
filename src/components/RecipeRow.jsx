import DishTile from "./DishTile";
import { KayaKoNaStamp } from "./KayaKoNa";
import { categoryTone } from "../lib/format";

// Isang linya sa "menu board": pangalan, tuldok-tuldok, tapos oras ng pagluluto
export default function RecipeRow({ recipe, done, onToggleDone }) {
  return (
    <li className="flex items-center gap-2 rounded-2xl p-3 transition-colors hover:bg-white/70">
      <a
        href={`#/recipe/${recipe.id}`}
        className="flex min-w-0 flex-1 items-center gap-4"
      >
        <DishTile recipe={recipe} className="size-20 shrink-0 sm:size-24" />
        <div className="min-w-0 flex-1">
          <div className="flex items-end gap-3">
            <h3 className="min-w-0 font-display text-xl font-bold leading-tight sm:text-2xl">
              {recipe.title}
            </h3>
            <span
              aria-hidden="true"
              className="mb-1.5 hidden min-w-4 flex-1 border-b-2 border-dotted border-toyo/30 sm:block"
            />
            <span className="hidden whitespace-nowrap font-display font-bold tabular-nums sm:inline">
              {recipe.cookTime} min
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-toyo/75">{recipe.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span
              className={`rounded-full px-2.5 py-0.5 font-display font-semibold ${categoryTone(recipe.category)}`}
            >
              {recipe.category}
            </span>
            <span className="font-display font-bold tabular-nums sm:hidden">
              {recipe.cookTime} min
            </span>
            <span className="text-toyo/70">Para sa {recipe.servings}</span>
            <span className="text-toyo/70">{recipe.difficulty}</span>
            {recipe.sample && (
              <span className="rounded-full border border-toyo/30 px-2 py-0.5 text-toyo/70">
                Sample
              </span>
            )}
          </div>
        </div>
      </a>
      <KayaKoNaStamp
        done={done}
        onToggle={onToggleDone}
        title={recipe.title}
      />
    </li>
  );
}
