import { useEffect, useState } from "react";

// Simpleng routing gamit ang URL hash: "#/" at "#/recipe/sinigang-na-baboy"
// Walang dagdag na library, at gumagana ang share link at back button.
function parseHash() {
  const [page, id] = window.location.hash.replace(/^#\/?/, "").split("/");
  if (page === "recipe" && id) return { page: "recipe", id: decodeURIComponent(id) };
  return { page: "home" };
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode o puno ang storage — okay lang */
    }
  }, [key, value]);
  return [value, setValue];
}
