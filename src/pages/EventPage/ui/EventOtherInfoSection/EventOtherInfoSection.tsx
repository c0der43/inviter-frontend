import {FC, memo} from "react";
import {Card} from "@/shared/ui/Card";
import classNames from "classnames";
import {TagsView} from "@/shared/ui/TagsView";
import styles from './EventOtherInfoSection.module.scss';
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {IEvent} from "@/entities/Event";
import {Text} from "@/shared/ui/Text";
import {Button} from "@/shared/ui/Button";

interface EventOtherInfoSectionProps {
    className?: string;
    currentEvent?: IEvent;
    clickJoinToEvent?: () => void;
}
export const EventOtherInfoSection: FC<EventOtherInfoSectionProps> = memo((props) => {

    const {
        clickJoinToEvent,
        currentEvent,
        className
    } = props;

    return <>
        <section className={classNames(styles.EventOtherInfoSection, className)}>
            <Card>
                {currentEvent != undefined && <AppGoogleMap choiceLocation={{lat:Number(currentEvent?.locationLat), lng: Number(currentEvent?.locationLng)}}/>}
                <Text size={'m'} text={`${currentEvent?.locationName}`}/>
            </Card>

            <Card title={'Теги'}>
                <TagsView tags={currentEvent?.tags ?? []}/>
            </Card>

            <Card title={'Кураторы'}>
                <AvatarGroup users={currentEvent?.invitedCurators ?? []}/>
            </Card>

            <Card title={'Посетители'}>
                <AvatarGroup users={[]}/>
            </Card>

            <Button onClick={clickJoinToEvent}>Присоедениться</Button>
        </section>
    </>

});
