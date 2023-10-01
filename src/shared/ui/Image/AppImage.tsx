import {FC, ImgHTMLAttributes, memo, ReactNode, useLayoutEffect, useState} from "react";


interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
}
export const AppImage: FC<AppImageProps> = memo((props) => {

    const {
        className,
        src,
        alt = 'img',
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        }
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        }
    },[src]);

    if(isLoading && fallback){
        return fallback;
    }

    if(hasError && errorFallback){
        return errorFallback;
    }

    return <img className={className} src={src} {...otherProps} alt={alt}/>
});
