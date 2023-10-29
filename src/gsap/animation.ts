import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function textSplit(target: gsap.DOMTarget) {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  const textHeight: number = document.getElementsByClassName('wisdom-0')[0].clientHeight;
  const split = new SplitText(target, { type: 'chars' });
  const textFade = gsap.to(split.chars, {
    opacity: 1,
    stagger: .025,
    ease: 'expo.in',
    paused: true,
  })
  gsap.set(split.chars, { opacity: 0 })
  ScrollTrigger.create({
    trigger: target,
    start: `center center+=${textHeight / 2}`,
    end: `center center-=${textHeight / 2}`,
    onEnter: () => textFade.play(),
    onEnterBack: () => textFade.play(),
    onLeave: () => textFade.reverse(),
    onLeaveBack: () => textFade.reverse(),

  })
}