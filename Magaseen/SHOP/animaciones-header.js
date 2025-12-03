// ========================
// ANIMACIÓN GSAP DEL HEADER
// ========================
const tl = gsap.timeline({
  defaults: {
    duration: 1.8,
    ease: "power4.out",
    opacity: 0
  }
});

tl.from(".title-left", { x: -40 })
  .from(".title-right", { x: 40 }, "-=1.3")
  .from(".title-center", { y: -25 }, "-=1.4");


// ========================
// SMOOTHER GLOBAL
// ========================
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.4,
  effects: true,
});


// ========================
// ANIMACIÓN DE TÍTULOS
// ========================
gsap.utils.toArray(".titulo-scroll").forEach(titulo => {
  gsap.from(titulo, {
    opacity: 0,
    y: 40,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: titulo,
      start: "top 85%",
    }
  });
});


// ========================
// SCROLL INFINITO REAL DE PRODUCTOS
// ========================
gsap.utils.toArray(".galeria").forEach(galeria => {
  
  let productos = galeria.querySelectorAll(".producto");
  if (productos.length === 0) return;

  // duplicamos productos para generar el loop infinito
  productos.forEach(prod => {
    let clone = prod.cloneNode(true);
    clone.classList.add("clone");
    galeria.appendChild(clone);
  });

  // loop vertical suave
  gsap.to(galeria, {
    yPercent: -50,
    ease: "none",
    duration: 40,
    repeat: -1
  });

});
