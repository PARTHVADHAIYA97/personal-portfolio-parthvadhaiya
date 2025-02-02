function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}

const coords = {x:0,y:0};
const circles = document.querySelectorAll(".circle");
const links = document.querySelectorAll("a");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});


window.addEventListener("mousemove",function(e){
    
    coords.x = e.clientX;
    coords.y = e.clientY;
    
    animateCircles();
    animateLinks();
});

function animateCircles(){

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index){
        circle.style.left = x -12 + "px";
        circle.style.top = y -10 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles [index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

    });

    function animateLinks(){

      links.forEach(a =>{
        a.addEventListener("mouseenter", () =>{
          el.classList.add("hover");
        })
        a.addEventListener("mouseleave", () =>{
          el.classList.remove("hover");
        })
      })
    }

}


