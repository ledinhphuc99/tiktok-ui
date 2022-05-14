import React from 'react';
import { forwardRef, useState } from 'react';
import images from '~/assets/images/images';
import style from './image.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, fallback: customFallback=images.noImage , ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
