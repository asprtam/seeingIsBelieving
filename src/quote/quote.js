import React, { useEffect, useRef } from 'react';
import './quote.css';
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const Quote = (props) => {
    const cont = useRef(null);
    const person = useRef(null);
    const text = useRef(null);
    const changePos = () => {
        const media = [ window.matchMedia("only screen and (orientation: portrait)")];
        if(media[0].matches) {
            cont.current.style.marginBottom = `${text.current.offsetHeight-20}px`;
        }
    }
    useEffect(() => {
        triggerOnScroll(cont.current, () => {
            cont.current.style.perspective = '1000px';
            gsap.to(text.current, {rotateY: '0deg', duration: 1.5,  ease: "power2.out"});
            setTimeout(() => {
                person.current.style.display = "block";
                gsap.to(person.current, {rotateY: '0deg', duration: 1,  ease: "power2..out.in"});
            }, 500);
        });
        changePos();
    })
    return (
        <div className="Quote" ref={cont}>
            <img src={props.image} ref={person}/>
            <div ref={text}>
                <p>{props.children}</p>
                <span>{props.name} at <a href="">Case Design</a></span>
             </div>
        </div>
    );
}

export default Quote;