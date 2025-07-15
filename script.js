window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector("nav");
  const backToTopButton = document.querySelector("#backToTopButton");

  const home = document.getElementById("home");
  const services = document.getElementById("services");
  const about = document.getElementById("about");
  const agendamento = document.getElementById("agendamento");

  const sections = [home, services, about, agendamento];

  window.addEventListener("scroll", onScroll);
  onScroll();

  function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    sections.forEach((section) => {
      if (section) activateMenuAtCurrentSection(section);
    });
  }

  function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
    const sectionEndPassedTargetline = sectionTop + sectionHeight <= targetLine;

    const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    if (menuElement) {
      menuElement.classList.remove("active");
      if (sectionBoundaries) {
        menuElement.classList.add("active");
      }
    }
  }

   function fecharMenuERedirecionar() {
    closeMenu();
    setTimeout(() => {
      window.location.href = "agendamento.html";
    }, 300); // tempo para o menu fechar com transição, se quiser
  }

  const form = document.getElementById("formAgendamento");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Consulta agendada com sucesso!");
      form.reset();
    });
  }

  function showNavOnScroll() {
    if (scrollY > 0 && navigation) {
      navigation.classList.add("scroll");
    } else if (navigation) {
      navigation.classList.remove("scroll");
    }
  }

  function showBackToTopButtonOnScroll() {
    if (scrollY > 550 && backToTopButton) {
      backToTopButton.classList.add("show");
    } else if (backToTopButton) {
      backToTopButton.classList.remove("show");
    }
  }

  window.openMenu = function () {
    document.body.classList.add("menu-expanded");
  };

  window.closeMenu = function () {
    document.body.classList.remove("menu-expanded");
  };

  ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about, 
    #about header, 
    #about .content,
    #agendamento
  `);
});
