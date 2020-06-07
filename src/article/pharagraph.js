import React, { useEffect, useRef } from 'react';
import './article.css';
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const Paragraph = (props) => {
    const text = useRef(null);
    const p = useRef(null);
    useEffect(() => {
        triggerOnScroll(p.current, () => {
                p.current.style.perspective = '1000px';
                gsap.to(text.current, {rotateY: '0deg', duration: 1.5,  ease: "power2.out"});
        });
    })
    return (
        <p ref={p} className="paragraph">
            <span ref={text}>
                {props.children}
            </span>
        </p>
    )
}

export default Paragraph;