const toggleBtn = document.querySelector(".navbar__toggleBtn");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

const storyMenuButton = document.querySelector(".navbar__menu_story");
const contentsMenuButton = document.querySelector(".navbar__menu_contents");
const newsMenuButton = document.querySelector(".navbar__menu_news");
const franchiseMenuButton = document.querySelector(".navbar__menu_franchise");

const storySubmenu = document.querySelector(".navbar__sub_menu_story");
const contentsSubmenu = document.querySelector(".navbar__sub_menu_contents");
const newsSubmenu = document.querySelector(".navbar__sub_menu_news");
const franchiseSubmenu = document.querySelector(".navbar__sub_menu_franchise");

// 모바일에서 햄버거 버튼 눌리면 메뉴 나타나는 토글
toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})

// 모바일에서 story 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
storyMenuButton.addEventListener("click",() => {
    storySubmenu.classList.toggle('active');
    //만약 액티브라면 비활성화로 바꾼다 x3
    
    if(contentsSubmenu.classList.contains('active')){
        contentsSubmenu.classList.toggle('active');
    };
    if(newsSubmenu.classList.contains('active')){
        newsSubmenu.classList.toggle('active');
    }
    if(franchiseSubmenu.classList.contains('active')){
        franchiseSubmenu.classList.toggle('active');
    }
})

// 모바일에서 인뮤컨텐츠 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
contentsMenuButton.addEventListener("click",() => {
    contentsSubmenu.classList.toggle('active');

     //만약 액티브라면 비활성화로 바꾼다 x3
    
    if(storySubmenu.classList.contains('active')){
        storySubmenu.classList.toggle('active');
    };
    if(newsSubmenu.classList.contains('active')){
        newsSubmenu.classList.toggle('active');
    }
    if(franchiseSubmenu.classList.contains('active')){
        franchiseSubmenu.classList.toggle('active');
    }
})

// 모바일에서 뉴스 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
newsMenuButton.addEventListener("click",() => {
    newsSubmenu.classList.toggle('active');

     //만약 액티브라면 비활성화로 바꾼다 x3
    
    if(contentsSubmenu.classList.contains('active')){
        contentsSubmenu.classList.toggle('active');
    };
    if(storySubmenu.classList.contains('active')){
        storySubmenu.classList.toggle('active');
    }
    if(franchiseSubmenu.classList.contains('active')){
        franchiseSubmenu.classList.toggle('active');
    }
})

// 모바일에서 창업 메뉴 버튼 눌리면 하위 메뉴 나타나는 토글
franchiseMenuButton.addEventListener("click",() => {
    franchiseSubmenu.classList.toggle('active');

     //만약 액티브라면 비활성화로 바꾼다 x3
    
    if(contentsSubmenu.classList.contains('active')){
        contentsSubmenu.classList.toggle('active');
    };
    if(newsSubmenu.classList.contains('active')){
        newsSubmenu.classList.toggle('active');
    }
    if(storySubmenu.classList.contains('active')){
        storySubmenu.classList.toggle('active');
    }
})