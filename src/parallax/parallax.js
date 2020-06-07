import React, { useEffect, useRef } from 'react';
import './parallax.css';

const Parallax = (props) => {
    const cont = useRef(null);
    const para = useRef(null);
    useEffect(() => {
        const media = [ window.matchMedia("only screen and (orientation: portrait)"), window.matchMedia("screen and (max-width: 800px)")];
        document.addEventListener('scroll', () => {
            if(!media[0].matches || !media[1].matches) {
                let yoffset = (window.pageYOffset - cont.current.offsetTop) + window.innerHeight;
                if(yoffset > 0) {
                    para.current.style.transform = `translate(0%, ${-yoffset/5 - window.innerHeight/8 }px)`;
                }
            }
        });
    })
    return (
        <div className="Parallax" ref={cont}>
            <div ref={para}></div>
        </div>
    );
}

export default Parallax;