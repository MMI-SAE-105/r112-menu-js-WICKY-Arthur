// On cible les éléments à modifier
const toggle = document.querySelector("button");
const nav = document.querySelector("nav");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    // Mise à jour des attributs ARIA pour accessibilité
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
});