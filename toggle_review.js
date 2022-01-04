

const moreBtn = document.querySelector(".btn_more_yeon");
const text_yeon = document.querySelector(".text_yeon");
const name_yeon = document.querySelector(".name_yeon");
console.log(moreBtn)
moreBtn.addEventListener("click", () => {
    text_yeon.classList.toggle('active')
    name_yeon.classList.toggle('active')
})