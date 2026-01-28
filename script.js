// ===== NAV TOGGLE =====
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

// ===== SLIDER =====
let slides = document.querySelectorAll(".slides");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
},4000);

// ===== SCROLL ANIMATION =====
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    let pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
