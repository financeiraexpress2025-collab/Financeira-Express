// ===================================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ===================================================

const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .zoom-in"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach(element=>{

    observer.observe(element);

});
