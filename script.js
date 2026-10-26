const projects = {
  gateway: {
    number: "01 / Civic + Learning",
    title: "Gateway Garden",
    subtitle: "Food learning center · Springdale, Arkansas · 2025",
    question: "How can architecture integrate people, place, and systems?",
    description: "Set beside the central pavilion at Willie George Park, Gateway Garden brings food learning into the everyday life of the neighborhood. Its gable-inspired form draws on nearby homes and agricultural buildings, while openings keep the park visually and physically connected through the project. Mass timber, Arkansas stone, clerestory light, and carefully placed service cores shape the building’s material and structural logic.",
    image: "assets/gateway-garden.jpg",
    alt: "Gateway Garden food learning center in its meadow setting",
    gallery: ["assets/gateway-studies.jpg", "assets/gateway-site-plan.jpg"],
    galleryAlts: ["Context collages and site analysis for Gateway Garden", "Site plan and form studies for Gateway Garden"],
    credits: "Team: Penn Smith + Hagen Beck"
  },
  peakscape: {
    number: "02 / Housing",
    title: "Peakscape",
    subtitle: "Multi-occupancy housing · Mar Vista, Los Angeles · 2024",
    question: "A neighborhood scale response to a citywide need.",
    description: "Peakscape proposes compact homes with access to shared outdoor social and work spaces, alongside ground-floor retail that can offer neighborhood amenities and jobs. The massing steps down toward the surrounding Mar Vista homes, taking cues from the San Gabriel Mountain Range and easing the transition between denser housing and its lower-scale context.",
    image: "assets/peakscape.jpg",
    alt: "Stepped Peakscape housing proposal with the San Gabriel Mountains in the background",
    gallery: ["assets/peakscape-courtyard.jpg", "assets/peakscape-neighborhood.jpg"],
    galleryAlts: ["Courtyard perspective through shared housing", "Neighborhood perspective showing the stepped housing mass"],
    credits: "Team: Penn Smith + Lucia Silva"
  },
  stickbuilt: {
    number: "03 / Design-build",
    title: "Timeless",
    subtitle: "Full-scale glulam installation · Birmingham, Alabama · 2025",
    question: "How do you build what you draw?",
    description: "Created during a summer design-build with the architecture firm Stickbuilt, this team project explored the idea of timelessness through the life cycle of a tree. After testing the concept with a small model, the team developed a full-scale glulam structure whose members connect with dowels rather than metal fasteners, tracing a curve through the forest.",
    image: "assets/stickbuilt.jpg",
    alt: "Glulam design-build installation among trees",
    gallery: ["assets/stickbuilt-process.jpg", "assets/stickbuilt-build.jpg"],
    galleryAlts: ["The glulam installation and its timber details", "Team members assembling the timber structure"],
    credits: "Organization: Stickbuilt · Team: Penn Smith, Asher Miller, Callie McMillen, Carley Chastain + Jeff Jeong"
  },
  lamp: {
    number: "04 / Object + Fabrication",
    title: "Composition Lamp",
    subtitle: "Bedside light · 2025",
    question: "A small object built from a study of color and frame.",
    description: "Inspired by Piet Mondrian’s Composition with Red, Blue, and Yellow, the lamp pairs a beech-wood outer frame with a 3D-printed inner frame made from filament mixed with oak. Sanded acrylic panels soften the light and make the grid legible from every side.",
    image: "assets/composition-lamp.jpg",
    alt: "Composition Lamp glowing warmly in a dark room",
    gallery: ["assets/lamp-studies.jpg", "assets/lamp-in-progress.jpg"],
    galleryAlts: ["Lamp variations and fabrication studies", "Lamp frame under construction in the model lab"],
    credits: "Materials: Beech, oak-mixed filament + sanded acrylic"
  },
  board: {
    number: "05 / Wood + Metal",
    title: "Chessboard Cutting Board",
    subtitle: "Two-sided object · Woodwork + metal",
    question: "One board, two ways to use it.",
    description: "This two-sided piece pairs an end-grain hardwood cutting surface with a metal chessboard epoxied into the reverse. Contrasting inlay lines and a routed perimeter groove give the cutting face its own pattern and working edge. The reverse turns the same object into a board for play.",
    image: "assets/cutting-board-chess.png",
    alt: "End-grain cutting board with a metal chessboard inset and chess pieces",
    gallery: ["assets/cutting-board-wood.png", "assets/cutting-board-metal.png", "assets/cutting-board-engraving.png", "assets/cutting-board-glueup.jpeg"],
    galleryAlts: ["End-grain cutting face with contrasting inlay and a routed groove", "Overhead view of the metal chessboard insert", "Routing work underway on the chessboard pattern", "Wood strips and pale inlays held in clamps during glue-up"],
    credits: "Design + fabrication: Penn Smith"
  },
  shelf: {
    number: "06 / Object + Craft",
    title: "Tiered Shelf",
    subtitle: "Freestanding storage · Woodwork + furniture",
    question: "An open frame with shelves that shift in length.",
    description: "This freestanding shelf uses vertical wood panels and alternating shelf lengths to create an open, asymmetrical profile. Its simple planes make room for books and everyday objects while keeping the piece visually light beside a bed or wall.",
    image: "assets/tiered-shelf-in-use.jpg",
    alt: "Tiered wood shelf in use beside a bed",
    gallery: ["assets/tiered-shelf-front.jpeg", "assets/tiered-shelf-angle.jpeg"],
    galleryAlts: ["Freestanding tiered shelf against a concrete wall", "Angled view showing the shelf's alternating extensions"],
    credits: "Design + fabrication: Penn Smith"
  }
};

const dialog = document.querySelector(".project-dialog");
const dialogContent = document.querySelector(".dialog-content");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
let lastTrigger = null;
let activeProject = null;
let projectSlideIndex = 0;

function getProjectSlides(project) {
  return [
    { image: project.image, alt: project.alt },
    ...project.gallery.map((image, index) => ({ image, alt: project.galleryAlts[index] }))
  ];
}

function showProjectSlide(index) {
  if (!activeProject) return;
  const slides = getProjectSlides(activeProject);
  projectSlideIndex = (index + slides.length) % slides.length;
  const slide = slides[projectSlideIndex];
  const image = dialogContent.querySelector(".dialog-slide-image");
  image.src = slide.image;
  image.alt = slide.alt;
  dialogContent.querySelector(".dialog-slide-count").textContent = `${String(projectSlideIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}

const heroSlides = [
  { project: "gateway", image: "assets/gateway-garden.jpg", alt: "Gateway Garden food learning center in its meadow setting", title: "Gateway Garden" },
  { project: "peakscape", image: "assets/peakscape.jpg", alt: "Stepped Peakscape housing proposal with the San Gabriel Mountains in the background", title: "Peakscape" },
  { project: "lamp", image: "assets/composition-lamp.jpg", alt: "Composition Lamp glowing warmly in a dark room", title: "Composition Lamp" },
  { project: "board", image: "assets/cutting-board-chess.png", alt: "End-grain cutting board with a metal chessboard inset and chess pieces", title: "Chessboard Cutting Board" },
  { project: "shelf", image: "assets/tiered-shelf-in-use.jpg", alt: "Tiered wood shelf in use beside a bed", title: "Tiered Shelf" },
  { project: "stickbuilt", image: "assets/stickbuilt.jpg", alt: "Glulam design-build installation among trees", title: "Timeless" }
];
let heroSlideIndex = 0;
const heroImage = document.querySelector(".hero-image img");
const heroCaption = document.querySelector("#hero-caption");
const heroCount = document.querySelector("#hero-count");

function showHeroSlide(index) {
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[heroSlideIndex];
  heroImage.src = slide.image;
  heroImage.alt = slide.alt;
  heroImage.dataset.project = slide.project;
  heroCaption.textContent = slide.title;
  heroCount.textContent = `${String(heroSlideIndex + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
}

document.querySelector(".hero-arrow-prev").addEventListener("click", () => showHeroSlide(heroSlideIndex - 1));
document.querySelector(".hero-arrow-next").addEventListener("click", () => showHeroSlide(heroSlideIndex + 1));
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    lastTrigger = button;
    activeProject = project;
    projectSlideIndex = 0;
    const horizontalProjects = ["gateway", "peakscape", "stickbuilt"];
    dialogContent.classList.toggle("is-horizontal-project", horizontalProjects.includes(button.dataset.project));
    const slides = getProjectSlides(project);
    dialogContent.innerHTML = `
      <div class="dialog-heading">
        <p class="dialog-eyebrow">${project.number}</p>
        <h2 id="dialog-title">${project.title}</h2>
        <p class="dialog-subtitle">${project.subtitle}</p>
      </div>
      <div class="dialog-carousel" aria-label="${project.title} images">
        <button class="dialog-arrow" type="button" data-slide-step="-1" aria-label="Previous project image"><span aria-hidden="true">←</span></button>
        <figure class="dialog-slide"><img class="dialog-slide-image" src="${slides[0].image}" alt="${slides[0].alt}"><figcaption class="dialog-slide-count" aria-live="polite">01 / ${String(slides.length).padStart(2, "0")}</figcaption><button class="dialog-zoom" type="button" aria-label="Enlarge project image">Enlarge image ↗</button></figure>
        <button class="dialog-arrow" type="button" data-slide-step="1" aria-label="Next project image"><span aria-hidden="true">→</span></button>
      </div>
      <div class="dialog-copy"><h3>${project.question}</h3><div><p>${project.description}</p><p class="dialog-subtitle">${project.credits}</p></div></div>`;
    dialog.showModal();
  });
});

dialogContent.addEventListener("click", (event) => {
  const arrow = event.target.closest("[data-slide-step]");
  if (arrow) {
    showProjectSlide(projectSlideIndex + Number(arrow.dataset.slideStep));
    return;
  }
  if (event.target.closest(".dialog-zoom")) {
    const image = dialogContent.querySelector(".dialog-slide-image");
    if (image) showEnlargedImage(image, activeProject);
  }
});

dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showProjectSlide(projectSlideIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showProjectSlide(projectSlideIndex + 1);
  }
});

dialog.addEventListener("close", () => lastTrigger?.focus());
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.textContent = isOpen ? "Menu" : "Close";
  nav.classList.toggle("is-open", !isOpen);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "Menu";
  nav.classList.remove("is-open");
}));

document.querySelector("#year").textContent = new Date().getFullYear();


const imageLightbox = document.querySelector(".image-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxProjectTitle = document.querySelector(".lightbox-project-title");
const lightboxProjectSubtitle = document.querySelector(".lightbox-project-subtitle");
const lightboxProjectDescription = document.querySelector(".lightbox-project-description");

function showEnlargedImage(image, project = null) {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "Enlarged portfolio image";
  lightboxCaption.textContent = image.alt || "";
  imageLightbox.classList.toggle("has-project-context", Boolean(project));
  lightboxProjectTitle.textContent = project?.title || "";
  lightboxProjectSubtitle.textContent = project?.subtitle || "";
  lightboxProjectDescription.textContent = project?.description || "";
  imageLightbox.showModal();
}

document.addEventListener("click", (event) => {
  const image = event.target.closest("img");
  if (!image || image === lightboxImage) return;
  if (image.closest(".project-card") || image.closest(".hero-image") || image.closest(".dialog-carousel")) return;
  event.preventDefault();
  event.stopPropagation();
  showEnlargedImage(image);
}, true);

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) imageLightbox.close();
});

document.querySelectorAll("img:not(.lightbox-image)").forEach((image) => {
  if (image.closest("button")) return;
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `View larger image: ${image.alt || "Portfolio image"}`);
});

document.addEventListener("keydown", (event) => {
  const image = event.target.closest?.("img");
  if (!image || image === lightboxImage || image.closest("button")) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (image.closest(".hero-image")) image.click();
    else showEnlargedImage(image);
  }
});




