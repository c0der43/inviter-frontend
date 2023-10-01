import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import {Portal} from "@/shared/ui/Portal";
import styles from './Modal.module.scss';
import classNames from "classnames";

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}
export const Modal: FC<ModalProps> = (props) => {

    const {
        children,
        className,
        isOpen,
        onClose
    } = props;

    const [isMounted, setIsMounted] = useState<boolean>(false);
    //const [isClosing, setIsClosing] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const closeHandler = useCallback(() => {
        if(onClose){
            onClose();
        }
    }, [onClose]);

    if(!isMounted){
        return null;
    }

    return <>
        <Portal element={document.getElementById('app')!}>
            <div className={classNames(styles.Modal, className, {[styles.opened]: isOpen})}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    </>
}
