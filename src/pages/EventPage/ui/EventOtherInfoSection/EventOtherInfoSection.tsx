import {FC, memo, useCallback, useMemo} from "react";
import {Card} from "@/shared/ui/Card";
import classNames from "classnames";
import {TagsView} from "@/shared/ui/TagsView";
import styles from './EventOtherInfoSection.module.scss';
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {IEvent} from "@/entities/Event";
import {Text} from "@/shared/ui/Text";
import {Button} from "@/shared/ui/Button";
import {fetchJoinEventById} from "@/pages/EventPage/model/services/fetchJoinEvent/fetchJoinEventById.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { AiOutlineClose } from "react-icons/ai";

interface EventOtherInfoSectionProps {
    className?: string;
    currentEvent?: IEvent;
    eventId?: string;
    onCloseWindow?: () => void;
}
export const EventOtherInfoSection: FC<EventOtherInfoSectionProps> = memo((props) => {

    const {
        onCloseWindow,
        eventId,
        currentEvent,
        className
    } = props;

    const dispatch = useAppDispatch();

    const arrCurators = useMemo(() => {
        if(currentEvent){
            return [currentEvent.creator, ...currentEvent.invitedCurators]
        }
        return [];
    }, [currentEvent]);

    const clickJoinToEvent = useCallback(() => {
        eventId && dispatch(fetchJoinEventById(eventId));
    }, [dispatch, eventId]);

    return <>
        <section className={classNames(styles.EventOtherInfoSection, className)}>
            <AiOutlineClose
                onClick={onCloseWindow}
                className={styles.close}/>
                <Card>
                    {currentEvent != undefined && <AppGoogleMap choiceLocation={{lat:Number(currentEvent?.locationLat), lng: Number(currentEvent?.locationLng)}}/>}
                    <Text size={'m'} text={`${currentEvent?.locationName}`}/>
                </Card>

                <Card title={'Теги'}>
                    <TagsView tags={currentEvent?.tags ?? []}/>
                </Card>

                <Card title={'Кураторы'}>
                    <AvatarGroup users={arrCurators}/>
                </Card>

                <Card title={'Посетители'}>
                    <AvatarGroup users={[]}/>
                </Card>

                <Button onClick={clickJoinToEvent}>Присоедениться</Button>
            </section>
    </>

});
