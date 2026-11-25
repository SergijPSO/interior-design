import Layout from "@/components/Layout";
import Header from "@/components/Header/Header.jsx";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Custom404() {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout title="Сторінку не знайдено — Interior Design">
      {mounted && (
        <>
          {screenWidth <= 768 ? <HeaderMobile /> : <Header />}
          <main style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "60vh" }}>
            <h1 style={{ fontSize: "5rem", marginBottom: "1rem", color: "#2c3e35" }}>404</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#4a5d54" }}>Сторінку не знайдено</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
              Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "0.8rem 2rem",
                backgroundColor: "#2c3e35",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "background 0.3s",
              }}
            >
              На головну
            </Link>
          </main>
          <Footer />
        </>
      )}
    </Layout>
  );
}
