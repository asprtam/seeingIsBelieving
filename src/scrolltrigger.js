const triggerOnScroll = (container, changes, addedValue=window.innerHeight/6) => {
    const show = () => {
        let yOff = window.pageYOffset;
        if(yOff > container.offsetTop+addedValue) {
            container.style.perspective = '1000px';
            changes();
            window.removeEventListener('scroll', show);
        }
    }
    show();
    window.addEventListener('scroll', show);
}

export default triggerOnScroll;