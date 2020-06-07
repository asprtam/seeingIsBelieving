import React, { useEffect, useRef } from 'react';
import TitleCaption from './titleCaption';
import './hero.css';
import gsap from 'gsap';
import { ScrollTo } from "react-scroll-to";
import triggerOnScroll from '../scrolltrigger';

const Hero = () => {
    const fullImg = useRef(null);
    const box = useRef(null);
    const changeBoxPos = () => {
        const media = [ window.matchMedia("only screen and (orientation: portrait)"), window.matchMedia("screen and (max-width: 800px)")];
        if(media[0].matches || media[1].matches) {
            if(document.querySelector('.TitleCaption').offsetHeight*0.945 < 190) {
                box.current.style.height = `${document.querySelector('.TitleCaption').offsetHeight*0.945}px`;
            } else {
                box.current.style.height = `${document.querySelector('.TitleCaption').offsetHeight*0.945}px`;
            }
            box.current.style.top = `${document.querySelector('.TitleCaption').offsetTop}px`;
            box.current.style.left = `0px`;
            box.current.style.opacity = "1";
        } else {
            box.current.style.left = `${document.querySelector('.TitleCaption').offsetLeft - document.querySelector('.TitleCaption').offsetWidth/2}px`;
            box.current.style.height = `20vw`;
            box.current.style.top = `50%`;
            box.current.style.opacity = "1";
        }
        
    }
    useEffect(() => {
        changeBoxPos();
        window.addEventListener('resize', changeBoxPos);
        triggerOnScroll(fullImg.current, () => {
            gsap.to(box.current, {rotateY: '0deg', filter: "blur(0px)", duration: 1,  ease: "power2.out"});
        }, -window.innerHeight);
        // document.addEventListener('scroll', () => {
        //     const media = [ window.matchMedia("only screen and (orientation: portrait)"), window.matchMedia("screen and (max-width: 800px)")];
        //     let yoff = window.pageYOffset;
        //     box.current.style.transform = `translate(0%, ${-(box.current.offsetHeight/2) - yoff/2}px)`;
        //     if(media[0].matches && media[1].matches) {
        //         box.current.style.transform = `translate(0%, 0px)`;
        //     }
        // });
    })
    return (
        <div className="Hero" ref={fullImg}>
            <TitleCaption title="Seeing is Believing">Visualization tools, like 3-D renderings, are transforming home renovation for both designers and customers</TitleCaption>
            <div className="box" ref={box}></div>
            <ScrollTo>
                {({ scroll }) => (
                <a onClick={() => scroll({ x: 0, y: window.innerHeight*0.9, smooth: true })}>Scroll</a>
                )}
            </ScrollTo>
        </div>
    )
}

export default Hero;