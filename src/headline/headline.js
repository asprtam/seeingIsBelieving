import React, { useEffect, useRef } from 'react';
import './headline.css';
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const Headline = (props) => {
    const text = useRef(null);
    const cont = useRef(null);
    const underline = useRef(null);
    const vertH = useRef(null);
    const vertL = useRef(null);
    const circle = useRef(null);
    const svg = useRef(null);
    useEffect(() => {
        const media = [ window.matchMedia("only screen and (orientation: portrait)"), window.matchMedia("screen and (max-width: 800px)")];
        const vertHigher = () => {
            if(media[0].matches || media[1].matches) {
                gsap.to(vertH.current, {height: '35px', duration: 0.5,  ease: "power2.out"});
            } else {
                gsap.to(vertH.current, {height: '60%', duration: 0.5,  ease: "power2.out"});
            }
        }
        triggerOnScroll(cont.current, () => {
            if(media[0].matches || media[1].matches) {
                gsap.to(vertL.current, {height: '35px', duration: 0.5,  ease: "power2.out", onComplete: vertHigher});
                gsap.to(underline.current, {width: '100%', duration: 2,  ease: "power2.out"});
            } else {
                gsap.to(vertL.current, {height: '60%', duration: 0.5,  ease: "power2.out", onComplete: vertHigher});
                gsap.to(underline.current, {width: '70%', duration: 2,  ease: "power2.out"});
            }
            gsap.to(text.current, {rotateY: '0deg', duration: 2,  ease: "power2.out"});
            circle.current.style.animation = "drawCircle 2s";
            circle.current.style.strokeDashoffset = "0";
        });
    })
    return (
        <div className="Headline" ref={cont}>
            <h1 ref={text}>{props.children}</h1>
            <span className="underline" ref={underline}></span>
            <span className="vertical hVertical" ref={vertH}></span>
            <span className="vertical lVertical" ref={vertL}></span>
            <svg ref={svg}>
                <circle className="circle" cx="50%" cy="50%" r="49%" stroke="#c50b29" fill="none" ref={circle}/>
            </svg>
        </div>
    );
}

export default Headline;