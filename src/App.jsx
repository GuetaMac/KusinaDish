import { useCallback, useEffect, useMemo, useState } from "react";
import { recipes } from "./data/recipes";
import { samples } from "./data/samples"; // burahin kapag kumpleto na ang sarili mong recipes
import { useHashRoute, useLocalStorage } from "./hooks";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import RecipeRow from "./components/RecipeRow";
import RecipeDetail from "./components/RecipeDetail";

const APP_NAME = "Kusina"; // working title — palitan kahit kailan
const allRecipes = [...recipes, ...samples];
const categories = [...new Set(allRecipes.map((r) => r.category))];

export default function App() {
  const route = useHashRoute();
  const [doneIds, setDoneIds] = useLocalStorage("kusina:kaya-ko-na", []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Lahat");
  const [onlyDone, setOnlyDone] = useState(false);

  const toggleDone = useCallback(
    (id) =>
      setDoneIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      ),
    [setDoneIds]
  );

  const current =
    route.page === "recipe" ? allRecipes.find((r) => r.id === route.id) : null;

  useEffect(() => {
    document.title = current
      ? `${current.title} — ${APP_NAME}`
      : `${APP_NAME} — mga lutong Pinoy`;
  }, [current]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allRecipes.filter((r) => {
      if (category !== "Lahat" && r.category !== category) return false;
      if (onlyDone && !doneIds.includes(r.id)) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
      );
    });
  }, [query, category, onlyDone, doneIds]);

  if (route.page === "recipe") {
    if (!current) {
      return (
        <main className="mx-auto grid min-h-screen max-w-xl place-items-center px-5 text-center">
          <div>
            <h1 className="font-display text-4xl font-extrabold">
              Wala kaming nahanap na recipe na iyon
            </h1>
            <p className="mt-3 text-toyo/75">
              Baka nabago ang link. Bumalik sa menu at hanapin ulit.
            </p>
            <a
              href="#/"
              className="mt-6 inline-block rounded-full bg-dahon px-6 py-3 font-display font-bold text-calamansi"
            >
              Balik sa menu
            </a>
          </div>
        </main>
      );
    }
    return (
      // key para mag-reset ang servings at checklist kapag lumipat ng recipe
      <RecipeDetail
        key={current.id}
        recipe={current}
        done={doneIds.includes(current.id)}
        onToggleDone={() => toggleDone(current.id)}
      />
    );
  }

  const filtering = query.trim() || category !== "Lahat" || onlyDone;

  return (
    <>
      <Hero query={query} onQuery={setQuery} />
      <FilterBar
        categories={categories}
        category={category}
        onCategory={setCategory}
        onlyDone={onlyDone}
        onOnlyDone={setOnlyDone}
        doneCount={doneIds.length}
      />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">Menu</h2>
          <p className="text-toyo/70">{visible.length} na luto</p>
        </div>

        {visible.length > 0 ? (
          <ul className="mt-4 grid gap-x-10 md:grid-cols-2">
            {visible.map((r) => (
              <RecipeRow
                key={r.id}
                recipe={r}
                done={doneIds.includes(r.id)}
                onToggleDone={() => toggleDone(r.id)}
              />
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-3xl border-2 border-dashed border-toyo/20 p-10 text-center">
            <p className="font-display text-2xl font-bold">
              Walang tugma sa hinahanap mo
            </p>
            <p className="mt-2 text-toyo/70">
              Subukan ang ibang sangkap, o alisin ang mga filter.
            </p>
            {filtering && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("Lahat");
                  setOnlyDone(false);
                }}
                className="mt-5 rounded-full bg-toyo px-5 py-2.5 font-display font-bold text-papel"
              >
                Alisin ang filter
              </button>
            )}
          </div>
        )}
      </main>
    </>
  );
}
