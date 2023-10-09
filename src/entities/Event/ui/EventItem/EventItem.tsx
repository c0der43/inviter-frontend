import {FC, memo} from "react";
import styles from './EventItem.module.scss';
import {AppImage} from "@/shared/ui/Image";
import {Text} from "@/shared/ui/Text";
import { CiLocationArrow1, CiUser} from "react-icons/ci";
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {Button} from "@/shared/ui/Button";
import {AppLink} from "@/shared/ui/AppLink";
import {getRouteEventDetails} from "@/shared/const/router.ts";
import {IEvent} from "@/entities/Event";
import {TagsView} from "@/shared/ui/TagsView";
import {Skeleton} from "@/shared/ui/Skeleton";

interface EventItemProps {
    event: IEvent;
}
export const EventItem: FC<EventItemProps> = memo((props) => {

    const {
        event
    } = props;

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
