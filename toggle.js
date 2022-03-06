const toggleBtn = document.querySelector(".navbar__toggleBtn");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

const contentsMenuButton = document.querySelector(".navbar__menu_contents");
const afilMenuButton = document.querySelector(".navbar__menu_afil");

const contentsSubmenu = document.querySelector(".navbar__sub_menu_contents");
const afilSubmenu = document.querySelector(".navbar__sub_menu_afil");

// 모바일에서 햄버거 버튼 눌리면 메뉴 나타나는 토글
toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})

// 모바일에서 인뮤컨텐츠 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
contentsMenuButton.addEventListener("click",() => {
    contentsSubmenu.classList.toggle('active');
})

// 모바일에서 창업 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
afilMenuButton.addEventListener("click",() => {
    afilSubmenu.classList.toggle('active');
})