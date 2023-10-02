import {FC, memo} from "react";
import {Card} from "@/shared/ui/Card";
import classNames from "classnames";
import {TagsView} from "@/shared/ui/TagsView";
import styles from './EventOtherInfoSection.module.scss';
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {IEvent} from "@/entities/Event";

interface EventOtherInfoSectionProps {
    className?: string;
    currentEvent?: IEvent;
}
export const EventOtherInfoSection: FC<EventOtherInfoSectionProps> = memo((props) => {

    const {
        currentEvent,
        className
    } = props;

    return <>
        <section className={classNames(styles.EventOtherInfoSection, className)}>
            <Card>
                {currentEvent != undefined && <AppGoogleMap choiceLocation={{lat:Number(currentEvent?.locationLat), lng: Number(currentEvent?.locationLng)}}/>}
            </Card>

            <Card title={'Теги'}>
                <TagsView tags={currentEvent?.tags ?? []}/>
            </Card>

            <Card title={'Люди'}>
                <AvatarGroup users={currentEvent?.invitedCurators ?? []}/>
            </Card>
        </section>
    </>

});
