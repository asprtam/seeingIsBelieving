import React, { useEffect, useRef } from 'react';
import './article.css';
import bathSmall from './bathSmall.jpg';
import wineStash from './wineStash.jpg';
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const TwoImg = (props) => {
    const cont = useRef(null);
    const big = useRef(null);
    const small = useRef(null);
    useEffect(() => {
        triggerOnScroll(cont.current, () => {
            cont.current.style.perspective = '1000px';
            gsap.to(big.current, {rotateY: '0deg', duration: 1.5,  ease: "power2.out"});
            gsap.to(small.current, {rotateY: '0deg', duration: 1.5,  ease: "power2.out"});
        });
    })
    return (
        <div className="TwoImg" ref={cont}>
            <img src={wineStash} ref={big}/>
            <img src={bathSmall} ref={small}/>
        </div>
    );
}

export default TwoImg;