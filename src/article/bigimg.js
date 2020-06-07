import React, { useEffect, useRef, useState } from 'react';
import './article.css';
import bath1 from './bath1.jpg';
import bath2 from './bath2.jpg';
import bath3 from './bath3.jpg';
import triggerOnScroll from '../scrolltrigger';
import gsap from 'gsap';

const BigImg = (props) => {
    const cont = useRef(null);
    const picture = useRef(null);
    const [img, setImg] = useState(0);
    const changeImage = () => {
        if(window.innerWidth <= 1200) {
            setImg(bath1);
        } else if (window.innerWidth <= 1800) {
            setImg(bath2);
        } else {
            setImg(bath3);
        }
    }
    useEffect(() => {
        changeImage();
        window.addEventListener('resize', () => {
            changeImage();
        })
        triggerOnScroll(cont.current, () => {
            cont.current.style.perspective = '1000px';
            gsap.to(picture.current, {rotateX: '0deg', duration: 1.5,  ease: "power2.out"});
        });
    })
    return (
        <div className="BigImg" ref={cont}>
            <img src={img} ref={picture}/>
        </div>
    );
}

export default BigImg;