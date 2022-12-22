import React, { useEffect } from "react";
import classNames from "classnames";

const Fade = ({ className, children, ...rest }) => {
  useEffect(() => {
    const initAnimations = (scope = document) => {
      const duration = 1;
      ScrollTrigger.matchMedia({
        "(min-width: 1280px)": () => {
          gsap.utils.toArray(".fadeInLeft", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                x: -100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInRight", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                x: 100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInTop", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                y: -100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInBottom", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                y: 100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeIn", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                autoAlpha: 1,
                duration,
              }
            );
          });
        },
        "(max-width: 1279px)": () => {
          gsap.utils.toArray(".fadeInLeft", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                x: -100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInRight", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                x: -100, //fade In Right on Mobile causes problems with Mobile header
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInTop", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                y: -100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeInBottom", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                y: 100,
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration,
              }
            );
          });
          gsap.utils.toArray(".fadeIn", scope).forEach((section) => {
            gsap.fromTo(
              section,
              {
                autoAlpha: 0,
              },
              {
                scrollTrigger: section,
                autoAlpha: 1,
                duration,
              }
            );
          });
        },
      });
    };
    initAnimations();
  }, []);

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

export default Fade;
