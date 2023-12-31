import {FC, MutableRefObject, ReactNode, useRef} from "react";
import styles from './Page.module.scss';
import classNames from "classnames";
import {PageHeader} from "../PageHeader/PageHeader.tsx";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts";


interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}
export const Page: FC<PageProps> = (props) => {

    const {
        onScrollEnd,
        className,
        children
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
       triggerRef,
       wrapperRef,
       callback: onScrollEnd
    });

    return <main ref={wrapperRef}
        className={classNames(styles.Page, className)}>
        <PageHeader/>
        <div className={styles.content_container}>
            {children}
        </div>
        {onScrollEnd && <div ref={triggerRef} className={styles.trigger}/>}
    </main>

}
