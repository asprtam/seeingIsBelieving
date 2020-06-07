import React, { useEffect, useRef } from 'react';
import './footer.css';
import gsap from 'gsap';
import mesh from './mesh.png';
import triggerOnScroll from '../scrolltrigger';

const Footer = (props) => {
    const cont = useRef(null);
    const braces = useRef(null);
    useEffect(() => {
        triggerOnScroll(cont.current, ()=> {
            const media = [ window.matchMedia("only screen and (orientation: portrait)"), window.matchMedia("screen and (max-width: 800px)")];
            if(media[0].matches || media[1].matches) {
                gsap.to(braces.current, {width: '80%', duration: 1.5,  ease: "power2.out"});
            } else {
                gsap.to(braces.current, {width: '36em', duration: 1.5,  ease: "power2.out"});
            }
        }, -1000);
    })
    return (
        <div className="Footer" ref={cont}>
            <div ref={braces}>
                <h3>{props.children}</h3>
            </div>
            <div>
                <a href=''>Learn More</a>
            </div>
            <img src={mesh}/>
        </div>
    );
}

export default Footer;