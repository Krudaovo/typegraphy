import gsap from 'gsap';

export function loadBackground() {

  const neutralBefore = "#7E7E7E";
  const neutralAfter = "#3B3B3B";

  gsap.fromTo('.background', {
    color: neutralBefore
  }, {
    color: neutralAfter
  })
}