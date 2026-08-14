"use client";

import { useEffect } from "react";

export function NoCopyGuard() {
  useEffect(() => {
    function handleContextMenu(event: MouseEvent) {
      event.preventDefault();
    }
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return null;
}
