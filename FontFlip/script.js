gsap.set(".Text",{perspective:700});
gsap.set(".char", {transformStyle:"preserve-3d", display:"inline-block", transformOrigin:"bottom"});

var txt = document.querySelector(".Text");

var tl = gsap.timeline();
tl.to(".char", {duration:2, rotationX:360, repeat:-1, stagger:0.1 ,ease: "back.out(1.7)"});
// tl.to(".char", {duration:0.75, rotationX:360, repeat:-1, stagger:0.5}).pause();
// txt.addEventListener("mouseover", function start(){
//     tl.play();
// });

// txt.addEventListener("mouseout", function start(){
//     tl.pause();
// });


