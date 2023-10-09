import {FC, memo} from "react";
import styles from './EventItem.module.scss';
import {AppImage} from "@/shared/ui/Image";
import {Text} from "@/shared/ui/Text";
import {CiCalendarDate, CiClock2, CiLocationArrow1, CiTimer, CiUser} from "react-icons/ci";
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {Button} from "@/shared/ui/Button";
import {AppLink} from "@/shared/ui/AppLink";
import {getRouteEventDetails} from "@/shared/const/router.ts";
import {IEvent} from "@/entities/Event";
import {TagsView} from "@/shared/ui/TagsView";
import {Skeleton} from "@/shared/ui/Skeleton";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";


export type EventView = 'CARD' | 'STRIPS';

interface EventItemProps {
    event: IEvent;
    view?: EventView;
}
export const EventItem: FC<EventItemProps> = memo((props) => {

    const navigate = useNavigate();

    const {
        view,
        event
    } = props;

    if(view === 'STRIPS'){
        return <>
                <motion.div
                    onClick={() => navigate(getRouteEventDetails(event.id.toString()))}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    className={styles.strips}>
                    <AppImage
                        className={styles.preview}
                        src={`http://localhost:5000/uploads_event/${event?.previewFile?.fileName}`}/>

                    <div className={styles.info_container}>
                        <Text size={'l'} text={event.name} bold/>
                        <Text size={'m'} text={event.desc} className={styles.desc}/>

                        <div className={styles.other_section}>
                            <div className={styles.left_section}>
                                <Text icon={<CiLocationOn/>} text={event.locationName}/>
                                <Text icon={<CiCalendarDate/>} text={event.date}/>
                                <Text icon={<CiClock2/>} text={event.time}/>
                                <Text icon={<CiTimer/>} text={`${event.duration}h`}/>
                            </div>

                            <div className={styles.right_container}>
                                <Text text={'20'} size={'l'} bold/>
                                <Text text={'/50'} size={'m'}/>
                            </div>
                        </div>
                    </div>

                    <AiOutlineHeart size={25} className={styles.heart}/>
                </motion.div>
        </>
    }

    return <>
            <div className={styles.Event}>
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={170}/>}
                        className={styles.img}
                        src={`http://localhost:5000/uploads_event/${event.previewFile.fileName}`}
                        //src={'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-01/Kirkjufell-volcano.jpg'}
                    />

                    <Text
                        className={styles.event_name}
                        text={event.name}
                        size={'l'}
                        bold={true}
                    />

                    <div className={styles.desc}>
                        <Text size={'s'} text={event.desc}/>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.row}>
                            <CiLocationArrow1 size={20}/>
                            <Text text={event.locationName}/>
                        </div>
                        <div className={styles.row}>
                            <CiUser size={20}/>
                            <Text text={`25 / 100`}/>
                        </div>
                    </div>

                    <TagsView tags={event.tags}/>

                    <div className={styles.btnAndAvatars}>
                        <AppLink to={getRouteEventDetails(event.id.toString())}>
                            <Button size={'m'}>Перейти</Button>
                        </AppLink>

                        <AvatarGroup
                            users={event.invitedCurators}
                            className={styles.avatar_group}
                            maxAvatars={1}
                            size={40}/>
                    </div>
            </div>
    </>

});
