"use client";

import { useEffect } from "react";

// En móvil marca con .is-in-view la puerta que cruza la franja central de la pantalla,
// para que su foto pase a color como lo hace el hover en escritorio.
export default function DoorsInView() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const doors = document.querySelectorAll<HTMLElement>(".doors .door");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );
    doors.forEach((d) => io.observe(d));
    return () => io.disconnect();
  }, []);

  return null;
}
