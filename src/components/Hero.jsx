import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const heroTitleSplit = new SplitText(".title", { type: "chars,words" });
    const heroParaSplit = new SplitText(".subtitle", { type: "lines" });

    heroTitleSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroTitleSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(heroParaSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 400 }, 0)
      .to(".left-leaf", { y: -400 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Mojito</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisps. Classic.</p>
              <p className="subtitle">
                Sip the spirit <br /> if Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.{" "}
              </p>
              <a href="#coctails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
