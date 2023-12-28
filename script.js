// Element Variables
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const productCards = document.getElementsByClassName("product-card")[0];
const scrollContainer = document.getElementById("product-scroll");
const footerDesc = document.getElementById("footer-desc");
const footerBtn = document.getElementById("footer-btn");
const scrollTopBtn = document.getElementById("scroll-top-btn");

// Functions
const copyProductCards = () => {
    for(let i = 0 ; i < 7 ; i ++){
        scrollContainer.append(productCards.cloneNode(true));
    }
}

const checkScrollButton = () => {
    const currentScroll = Math.round(scrollContainer.scrollLeft);
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    prevBtn.style.display = currentScroll == 0 ? "none" : "block";
    nextBtn.style.display = currentScroll == maxScroll ? "none" : "block";
}

const nextScroll = () => {
    scrollContainer.scrollLeft+=30;
    checkScrollButton();
}

const prevScroll = () => {
    scrollContainer.scrollLeft-=30;
    checkScrollButton();
}

const toggleFooterDesc = () => {
    const isShown = footerDesc.style.display == "block";
    footerDesc.style.display = isShown ? "none" : "block";
    footerBtn.innerText = isShown ? "Show all V" : "Collapse all Λ";
}

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Main
const main = () => {
    nextBtn.addEventListener('click', nextScroll);
    prevBtn.addEventListener('click', prevScroll);
    footerBtn.addEventListener('click', toggleFooterDesc);
    scrollTopBtn.addEventListener("click", scrollToTop);
    copyProductCards();
}

main();