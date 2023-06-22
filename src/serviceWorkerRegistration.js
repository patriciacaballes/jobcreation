// Controlla se il browser supporta i service worker
export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service worker registrato con successo:", registration);
        })
        .catch((error) => {
          console.log("Errore durante la registrazione del service worker:", error);
        });
    });
  }
}

// Cancella il service worker esistente, se presente
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
