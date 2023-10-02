import {FC, Suspense} from "react";
import {AppImage} from "@/shared/ui/Image";
import styles from "../EventInfoSection/EventInfoSection.module.scss";
import classNames from "classnames";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text";
import {CommentForm} from "@/features/CommentForm";
import {IEvent} from "@/entities/Event";

interface EventInfoSectionProps {
    className?: string;
    currentEvent?: IEvent;
}
export const EventInfoSection: FC<EventInfoSectionProps> = (props) => {

    const {
        currentEvent,
        className
    } = props;

    return <>
        <section className={classNames(styles.EventInfoSection, className)}>
            <AppImage
                className={styles.img}
                src={`http://localhost:5000/uploads_event/${currentEvent?.previewFile.fileName}`}/>

            <Card>
                <Text title={currentEvent?.name}/>
            </Card>

            <Card title={'Описание'}>
                <Text text={currentEvent?.desc}/>
            </Card>

            <Card>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CommentForm avatar={'https://img.championat.com/s/735x490/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg'}/>
                </Suspense>
            </Card>
        </section>
    </>

}
