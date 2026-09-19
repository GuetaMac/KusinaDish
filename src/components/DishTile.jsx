import { useState } from "react";
import { categoryTone } from "../lib/format";

// Kapag walang picture ang recipe, unang letra ng dish ang lalabas.
// `style` ay ginagamit para sa view-transition-name (shared-element
// na paglipat papunta sa detail page) kaya isinasama rin ito sa fallback.
export default function DishTile({ recipe, className = "", style }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (recipe.image && !failed) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={style}
      >
        {!loaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-toyo/10"
          />
        )}
        <img
          src={recipe.image}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`size-full rounded-2xl object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      style={style}
      className={`grid max-h-full max-w-full place-items-center rounded-2xl font-display font-extrabold ${categoryTone(recipe.category)} ${className}`}
    >
      <span className="text-4xl sm:text-5xl">{recipe.title.charAt(0)}</span>
    </div>
  );
}
