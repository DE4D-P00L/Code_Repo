gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    scroller: '.container',
});


gsap.to('.text-content',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center"
    },
    opacity:1,
    duration: 2
});


gsap.to('.image',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center"
    },
    x: -100,
    duration: 1
});


gsap.to('.act',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        markers:true,
        toggleActions: "restart none restart none"
    },
    x: 0,
    duration: .1
});

gsap.to('.act',{
    scrollTrigger: {
        trigger: '.scrollarea2',
        start: "top center",
        markers: true,
        toggleActions: "restart none restart none"
    },
    x: 92,
    duration: .1
});


gsap.to('.l2 a',{
    scrollTrigger: {
        trigger: '.scrollarea2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#000",
    duration: .1
});

gsap.to('.l1 a',{
    scrollTrigger: {
        trigger: '.scrollarea2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#fff",
    duration: .1
});

gsap.to('.l1 a',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#000",
    duration: .1
});

gsap.to('.l2 a',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#fff",
    duration: .1
});