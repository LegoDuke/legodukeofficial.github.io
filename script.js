// Hamburger menu - always open
var toggleClick = document.querySelector(".toggleBox");
var container = document.querySelector(".container");

// Ensure the menu is always in the "active" state
toggleClick.classList.add('active');
container.classList.add('active');

// Hamburger menu icon change - remove interactivity since it's always active
let changeIcon = function(icon) {
    icon.classList.add('fa-times'); // Ensure the icon reflects the "open" state
}

// Carousel functionality
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
          items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
          );
          buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
          );
    
          items[i].classList.add("carousel__item--selected");
          button.classList.add("carousel__button--selected");
        });
      });
    
      items[0].classList.add("carousel__item--selected");
      buttons[0].classList.add("carousel__button--selected");
});
