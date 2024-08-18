// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.to(".title", {
  opacity: 1,
  y: 0, // Move to its final position
  duration: 1.5, // Animation duration in seconds
  ease: "power2.out", // Easing function
  scrollTrigger: {
    trigger: ".title",
    start: "top 80%", // Trigger when the top of the title is 80% down the viewport
    end: "bottom 20%", // End the trigger when the bottom of the title reaches 20% up the viewport
    toggleActions: "play reverse play reverse", // Play animation when entering and reverse when leaving
    markers: false, // Optional: Set to true to see start and end markers during development
    onEnter: () => gsap.to(".title", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }), // When the element enters the viewport
    onLeave: () => gsap.to(".title", { opacity: 0, y: 50, duration: 1.5, ease: "power2.in" }), // When the element leaves the viewport
    onEnterBack: () => gsap.to(".title", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }), // When scrolling back into view
    onLeaveBack: () => gsap.to(".title", { opacity: 0, y: 50, duration: 1.5, ease: "power2.in" }) // When leaving the viewport scrolling back up
  }
});


gsap.to(".rotate360", { 
    rotation: 360,  // Rotate 360 degrees
    duration: 39,    // Duration of 2 seconds per rotation
    repeat: -1,     // Infinite rotation
    repeatDelay: 0, // No delay between repeats
    ease: 'linear'  // Linear easing for constant speed rotation
  });