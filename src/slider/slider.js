import React, { useEffect, useRef } from 'react';
import './slider.css'; 
import gsap from 'gsap';
import triggerOnScroll from '../scrolltrigger';

const Slider = () => {
    const before = useRef(null);
    const after = useRef(null);
    const sliderMarker = useRef(null);
    const cont = useRef(null);
    const slider = useRef(null);
    useEffect(() => {
        let offX;
        sliderMarker.current.addEventListener('mousedown', (event) => {
            offX= event.clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('mousemove', Move);
        });
        before.current.addEventListener('mousedown', (event) => {
            offX= event.clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('mousemove', Move);
        });
        after.current.addEventListener('mousedown', (event) => {
            offX= event.clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('mousemove', Move);
        });
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', Move);
        });
        sliderMarker.current.addEventListener('touchstart', (event) => {
            offX= event.touches[0].clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('touchmove', Move);
        });
        before.current.addEventListener('touchstart', (event) => {
            offX= event.touches[0].clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('touchmove', Move);
        });
        after.current.addEventListener('touchstart', (event) => {
            offX= event.touches[0].clientX-sliderMarker.current.offsetLeft;
            window.addEventListener('touchmove', Move);
        });
        window.addEventListener('touchend', () => {
            window.removeEventListener('touchmove', Move);
        });
        const Move = (event) => {
            if(event.touches) {
                if(event.touches[0].clientX-offX<=slider.current.offsetLeft+sliderMarker.current.offsetWidth/2) {
                    sliderMarker.current.style.left = `${sliderMarker.current.offsetWidth/2}px`;
                    before.current.style.width = `${sliderMarker.current.offsetWidth/2}px`;
                    after.current.style.width = `${slider.current.offsetWidth-sliderMarker.current.offsetWidth/2}px`;
                } else if (event.touches[0].clientX-offX>=slider.current.offsetWidth-sliderMarker.current.offsetWidth/2) {
                    sliderMarker.current.style.left = `${slider.current.offsetWidth-sliderMarker.current.offsetWidth/2}px`;
                    before.current.style.width = `${slider.current.offsetWidth-sliderMarker.current.offsetWidth/2}px`;
                    after.current.style.width = `${sliderMarker.current.offsetWidth/2}px`;
                } else {
                    sliderMarker.current.style.left = `${(event.touches[0].clientX-offX)}px`;
                    before.current.style.width = `${event.touches[0].clientX-offX}px`;
                    after.current.style.width = `${slider.current.offsetWidth-event.touches[0].clientX+offX}px`;
                }
            } else {
                if(event.clientX-offX<=slider.current.offsetLeft) {
                    sliderMarker.current.style.left = `0px`;
                    before.current.style.width = `0px`;
                    after.current.style.width = `${slider.current.offsetWidth}px`;
                } else if (event.clientX-offX>=slider.current.offsetWidth) {
                    sliderMarker.current.style.left = `${slider.current.offsetWidth}px`;
                    before.current.style.width = `${slider.current.offsetWidth}px`;
                    after.current.style.width = `0px`;
                } else {
                    sliderMarker.current.style.left = `${(event.clientX-offX)}px`;
                    before.current.style.width = `${event.clientX-offX}px`;
                    after.current.style.width = `${slider.current.offsetWidth-event.clientX+offX}px`;
                }
            }
        }
        triggerOnScroll(cont.current, () => {
            gsap.to(slider.current, {rotateX: '0deg', filter: "blur(0px)", duration: 1,  ease: "power2.out"});
        });
    })
    return (
        <div ref={cont}>
            <div className="Slider" ref={slider}>
                <div className="sliderMarker" ref={sliderMarker}><p>Slide to compare</p></div>
                <div className="Before" ref={before}></div>
                <div className="After" ref={after}></div>
            </div>
        </div>
    )
}

export default Slider;