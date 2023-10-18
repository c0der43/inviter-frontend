import {FC} from "react";
import classNames from "classnames";
import styles from './AboutSection.module.scss';
import silverStone from '@/shared/assets/img/silver_stone.png';
import {motion} from 'framer-motion';
import object2 from '@/shared/assets/img/object_2.png';
import {Text} from "@/shared/ui/Text";
import {Button} from "@/shared/ui/Button";

export const AboutSection: FC = () => {

    return <>
        <section className={classNames(styles.AboutSection)}>
            <motion.img
                animate={{
                    x: [50, -50, 50],
                    y: [100, -50, 100]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease:'easeInOut'
                }}
                src={silverStone}
                className={styles.stone}
                alt='silver stone img'/>

            <motion.img
                animate={{
                    x: ['-10%','15%', '-10%'],
                    y: ['5%', '-5%', '5%']
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                src={object2}
                className={styles.obj2}/>

            <div className={styles.desc_container}>
                <Text
                    className={styles.logo_text}
                    title={'INVITER'}
                    size={'xxl'}
                    textStyle={'stroke'}
                    bold/>

                <div className={styles.desc_and_btn}>
                    <p className={styles.about_inviter_text}>Инвайтер - это знакомства, общение, сбор вокруг себя людей, с схожими интересами!</p>

                    <Button className={styles.btn_join} design={'neon'}>Присоединиться</Button>
                </div>
            </div>
        </section>
    </>

}
