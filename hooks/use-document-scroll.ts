import { useEffect, useState } from "react";

export default function useDocumentScroll() {
  const [inScroll, setInScroll] = useState(false);

  useEffect(() => {
    const listener = (e: Event) => {
      if (window.scrollY > 20) {
        setInScroll(true);
      } else {
        setInScroll(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return inScroll;
}
