import "@/styles/scss/globals.scss";
import "@/styles/scss/reset.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => console.log('ServiceWorker registration successful:', reg.scope))
          .catch((err) => console.log('ServiceWorker registration failed:', err));
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
