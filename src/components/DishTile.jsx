import { useState } from "react";
import { categoryTone } from "../lib/format";

// Kapag walang picture ang recipe, unang letra ng dish ang lalabas
export default function DishTile({ recipe, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (recipe.image && !failed) {
    return (
      <img
        src={recipe.image}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className={`rounded-2xl object-cover ${className}`}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`grid place-items-center rounded-2xl font-display font-extrabold ${categoryTone(recipe.category)} ${className}`}
    >
      <span className="text-4xl sm:text-5xl">{recipe.title.charAt(0)}</span>
    </div>
  );
}
