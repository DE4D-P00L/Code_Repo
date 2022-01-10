gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    scroller: '.container',
});

var tl = new TimelineMax();


tl.to('.text-content',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center"
    },
    opacity:1,
    delay: 1,
    duration: 2
});


tl.to('.image',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center"
    },
    x: -100,
    delay: -2,
    duration: 1
});


gsap.to('.act',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    x: 0,
    duration: .1
});

gsap.to('.act',{
    scrollTrigger: {
        trigger: '.trigger2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    x: 0,
    duration: .1
});

gsap.to('.act',{
    scrollTrigger: {
        trigger: '.scrollarea2',
        start: "top center",
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
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.l1 a',{
    scrollTrigger: {
        trigger: '.scrollarea2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.l1 a',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.l2 a',{
    scrollTrigger: {
        trigger: '.scrollarea1',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.l1 a',{
    scrollTrigger: {
        trigger: '.trigger2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.l2 a',{
    scrollTrigger: {
        trigger: '.trigger2',
        start: "top center",
        toggleActions: "restart none restart none"
    },
    color: "#7cb9ff",
    duration: .1
});

gsap.to('.image2',{
    scrollTrigger: {
        trigger: '.trigger2',
        start: "top center"
    },
    y:0,
    duration: 1
});
