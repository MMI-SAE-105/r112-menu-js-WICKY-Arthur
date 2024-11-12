// On cible les éléments à modifier
const toggle = document.querySelector("button");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
    body.classList.add("noscroll");
    if (isOpen == true) {
        nav.ariaHidden = true;
        toggle.ariaExpanded = false;
        body.classList.remove("noscroll");
    }
});

