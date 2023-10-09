import {FC, memo, ReactElement} from "react";
import styles from './Text.module.scss';
import classNames from "classnames";


export type TextStyle = 'primary' | 'error';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1'
};

const mapSizeToClass: Record<TextSize, string> = {
    s: styles.size_s,
    m: styles.size_m,
    l: styles.size_l
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    textStyle?: TextStyle;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    icon?: ReactElement;
}
export const Text: FC<TextProps> = memo((props) => {

    const {
        icon,
        className,
        text,
        title,
        textStyle = 'primary',
        align= 'left',
        size= 'm',
        bold
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, styles[textStyle], styles[align], sizeClass];

    return (
        <div className={classNames(additionalClasses, {[styles.bold]: bold})}>
            {
                title && <HeaderTag className={styles.title}>
                        {title}
                    </HeaderTag>

            }
            {
                text && !icon && <p className={styles.text}>
                        {text}
                    </p>

            }
            {
                icon && text && <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                    {icon}
                    <p className={styles.text}>
                        {text}
                    </p>
                </div>
            }
        </div>
    );

});
