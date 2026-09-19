import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// Simpleng routing gamit ang URL hash: "#/" at "#/recipe/sinigang-na-baboy"
// Walang dagdag na library, at gumagana ang share link at back button.
function parseHash() {
  const [page, id] = window.location.hash.replace(/^#\/?/, "").split("/");
  if (page === "recipe" && id)
    return { page: "recipe", id: decodeURIComponent(id) };
  return { page: "home" };
}

const reduceMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const onChange = () => {
      const next = parseHash();
      const apply = () => {
        setRoute(next);
        window.scrollTo(0, 0);
      };
      // Kapag suportado, ginagawang "isang piraso" ng litrato ang paglipat
      // mula sa listahan papunta sa detalye (view-transition-name sa DishTile).
      if (document.startViewTransition && !reduceMotion()) {
        document.startViewTransition(() => flushSync(apply));
      } else {
        apply();
      }
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

// Konting progress bar sa itaas ng detail page, ayon sa scroll ng buong page.
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

// Para sa "balik sa taas" na button — lumalabas lang pagkatapos mag-scroll.
export function usePastScroll(threshold = 480) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return past;
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
