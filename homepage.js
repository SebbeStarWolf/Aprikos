ScrollReveal({ reset: true });

// Använd ScrollTrigger för att göra .action synlig på scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to(".action", {
    autoAlpha: 1,
    duration: 3,
    scrollTrigger: {
        trigger: ".action",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none none",
        scrub: true
    } 
});

function activateScrollTrigger() {
    if (window.innerWidth < 992) {
        // If the screen width is less than 992px, activate ScrollTrigger for each #var element
        gsap.to("#var1, #var2, #var3, #var4, #var5", {
    x: "-100%",
    ease: "power1.out",
    scrollTrigger: {
        start: "top 90%",
        end: "bottom 60%",
        scrub: true
    }
});

        // If the screen width is less than 992px, kill ScrollTrigger for .valueContainer
        ScrollTrigger.getAll(".valueContainer")[0].kill(); // Kill ScrollTrigger for .valueContainer
    } else {
        // If the screen width is greater than or equal to 992px, activate ScrollTrigger for .valueContainer
        gsap.to(".valueContainer", {
            x: "-106%",
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".valueContainer",
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        });

        // If the screen width is greater than or equal to 992px, kill ScrollTrigger for each #var element
        ScrollTrigger.getAll("#var1, #var2, #var3, #var4, #var5")[0].kill();
    }
}

// Run the function when the document loads
activateScrollTrigger();

// Listen for window resize events and run the function again
window.addEventListener("resize", activateScrollTrigger);
