// Hamburger menu
var toggleClick = document.querySelector(".toggleBox");
var container = document.querySelector(".container");
toggleClick.addEventListener('click', ()=>{
    toggleClick.classList.toggle('active');
    container.classList.toggle('active');
})

// Hamburger menu icon change
let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `)

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


