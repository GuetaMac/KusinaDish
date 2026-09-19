import DishTile from "./DishTile";
import { KayaKoNaStamp } from "./KayaKoNa";
import { ClockIcon } from "./Icons";
import { categoryTone } from "../lib/format";

// Isang "tray" sa food display: litrato sa ibabaw, tapos detalye sa ilalim.
// Ang larawan ay may pangalang view-transition para lumipad ito papunta sa
// detail page kapag na-click (kung suportado ng browser).
export default function RecipeRow({ recipe, done, onToggleDone }) {
  return (
    <li className="group relative">
      <a
        href={`#/recipe/${recipe.id}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_0_0_rgba(42,27,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_-8px_rgba(42,27,20,0.25)] focus-visible:-translate-y-1"
      >
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
          <DishTile
            recipe={recipe}
            className="size-full transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ viewTransitionName: `dish-image-${recipe.id}` }}
          />
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 font-display text-sm font-semibold shadow-sm ${categoryTone(recipe.category)}`}
          >
            {recipe.category}
          </span>
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-toyo/80 px-2.5 py-1 font-display text-xs font-bold text-papel backdrop-blur-sm">
            <ClockIcon className="size-3.5 text-calamansi" />
            {recipe.cookTime} min
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-xl font-bold leading-tight">
            {recipe.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-toyo/75">
            {recipe.description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-toyo/70">
            <span>Para sa {recipe.servings}</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.difficulty}</span>
            {recipe.sample && (
              <span className="rounded-full border border-toyo/30 px-2 py-0.5 text-xs text-toyo/70">
                Sample
              </span>
            )}
          </div>
        </div>
      </a>

      <div className="absolute right-3 top-3 rounded-full bg-white/85 shadow-sm backdrop-blur-sm">
        <KayaKoNaStamp
          done={done}
          onToggle={onToggleDone}
          title={recipe.title}
        />
      </div>
    </li>
  );
}
