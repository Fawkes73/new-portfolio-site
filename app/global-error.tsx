"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          background: "#0c0a09",
          color: "#f5efe9",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c2673d" }}>
          Critical error
        </p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>The app failed to load.</h1>
        <p style={{ maxWidth: "28rem", color: "#a89a8f" }}>Something went wrong at the root level. Reloading usually fixes this.</p>
        <button
          onClick={reset}
          style={{
            marginTop: "0.5rem",
            padding: "0.625rem 1.5rem",
            borderRadius: "9999px",
            background: "#c2673d",
            color: "#0c0a09",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
