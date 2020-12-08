import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    const [inview, setInview] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInview(isInView());
        setIsLoading(false);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [isLoading]);
    
    

    const isInView = () => {
        if(imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const scrollHandler = () => {
        setInview(() => {
            return isInView();
        });
    }

    return isLoading ? null : (
        <img
            src={inview ? secondaryImg : primaryImg}
            ref={imageRef}
            width="200px"
            height="200px"
            alt="" 
        />
    );
}

ImageToggleOnScroll.propTypes = {
    primaryImg: PropTypes.string.isRequired,
    secondaryImg: PropTypes.string.isRequired
}

export default ImageToggleOnScroll;
