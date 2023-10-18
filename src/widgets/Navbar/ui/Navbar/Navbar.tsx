import {FC, memo} from "react";
import styles from './Navbar.module.scss';
import {Text} from "@/shared/ui/Text";

export const Navbar: FC = memo(() => {

    return (
        <header className={styles.Navbar}>
            <Text title={'Inviter(beta)'} size={'l'} bold={true}/>
        </header>
    );

});
