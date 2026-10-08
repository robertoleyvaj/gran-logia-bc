"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const R = "var(--font-raleway), sans-serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const navy   = "#0B2447";
const navyDk = "#060F1E";
const gold   = "#B08D57";

function AccesoForm() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const from         = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/acceso", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, from }),
    });

    if (res.ok) {
      router.push(from);
      router.refresh();
    } else {
      setError("Clave incorrecta. Inténtalo de nuevo.");
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: navyDk,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Gradiente de fondo */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(11,36,71,0.6) 0%, transparent 70%)`,
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "56px 48px",
        width: "100%",
        maxWidth: "420px",
        backdropFilter: "blur(12px)",
      }}>

        {/* Logo / escudo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <img src="/escudo-glbc.png" alt="Gran Logia BC" style={{ width: "64px", height: "64px", objectFit: "contain", marginBottom: "16px" }} />
          <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "6px" }}>
            Gran Logia de Estado
          </div>
          <div style={{ fontFamily: R, color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            Baja California
          </div>
        </div>

        <div style={{ width: "36px", height: "1px", backgroundColor: gold, margin: "0 auto 36px" }} />

        <p style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "13px", textAlign: "center", lineHeight: 1.6, marginBottom: "32px" }}>
          El sitio está en construcción. Ingresa la clave de acceso.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Clave de acceso"
            required
            style={{
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: error ? "1px solid rgba(220,80,80,0.6)" : "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "14px 16px",
              fontFamily: D,
              fontSize: "15px",
              color: "#fff",
              outline: "none",
              marginBottom: error ? "10px" : "24px",
              display: "block",
              boxSizing: "border-box",
            }}
          />

          {error && (
            <p style={{ fontFamily: D, color: "rgba(220,80,80,0.85)", fontSize: "12px", marginBottom: "16px", textAlign: "center" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: gold,
              color: navyDk,
              fontFamily: R,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.2s",
            }}
          >
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default function AccesoPage() {
  return (
    <Suspense>
      <AccesoForm />
    </Suspense>
  );
}
