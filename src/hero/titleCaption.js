import React, { useEffect, useRef } from 'react';
import './hero.css';
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const TitleCaption = (props) => {
    const caption = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        triggerOnScroll(caption.current, () => {
            gsap.to(text.current, {rotateY: '0deg', filter: "blur(0px)", duration: 1.5,  ease: "power2.out"});
        }, -window.innerHeight);
        
        // document.addEventListener('scroll', () => {
        //     let yoff = window.pageYOffset;
        //     caption.current.style.transform = `translate(-50%, -${caption.current.offsetHeight/2 + yoff/2}px)`;
        // });
    })
    return (
        <div className="TitleCaption" ref={caption}>
            <div ref={text}><h1>{props.title}</h1>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default TitleCaption;