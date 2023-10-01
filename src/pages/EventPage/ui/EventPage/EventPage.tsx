import {FC, memo} from "react";
import {Page} from "@/widgets/Page";
import styles from './EventPage.module.scss';
import classNames from "classnames";
import {EventInfoSection} from "@/pages/EventPage/ui/EventInfoSection/EventInfoSection.tsx";
import {EventOtherInfoSection} from "@/pages/EventPage/ui/EventOtherInfoSection/EventOtherInfoSection.tsx";

interface EventPageProps {
    className?: string;
}
const EventPage: FC<EventPageProps> = memo((props) => {

    const {
        className
    } = props;

    return <>
        <Page>
            <div className={classNames(styles.EventPage, className)}>
                <EventInfoSection/>
                <EventOtherInfoSection className={styles.other_section}/>
            </div>
        </Page>
    </>

});

export default EventPage;
