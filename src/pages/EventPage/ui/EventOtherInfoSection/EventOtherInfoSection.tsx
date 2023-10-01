import {FC} from "react";
import {Card} from "@/shared/ui/Card";
import classNames from "classnames";
import {TagsView} from "@/shared/ui/TagsView";
import styles from './EventOtherInfoSection.module.scss';
import {AvatarGroup} from "@/shared/ui/AvatarGroup";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";

interface EventOtherInfoSectionProps {
    className?: string;
}
export const EventOtherInfoSection: FC<EventOtherInfoSectionProps> = (props) => {

    const {
        className
    } = props;

    return <>
        <div className={classNames(styles.EventOtherInfoSection, className)}>
            <Card>
                <AppGoogleMap choiceLocation={{lat:57.30331, lng: 47.88611}}/>
            </Card>

            <Card title={'Теги'}>
                <TagsView tags={['первый','первый','первый','первый','первый','первый','первый','первый','первый']}/>
            </Card>

            <Card title={'Люди'}>
                <AvatarGroup urls={[
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0slekZ9XFM4E-8HD67qmooXoiryocZW8v4ow6ntCw&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0slekZ9XFM4E-8HD67qmooXoiryocZW8v4ow6ntCw&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0slekZ9XFM4E-8HD67qmooXoiryocZW8v4ow6ntCw&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0slekZ9XFM4E-8HD67qmooXoiryocZW8v4ow6ntCw&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0slekZ9XFM4E-8HD67qmooXoiryocZW8v4ow6ntCw&s',
                ]}/>
            </Card>
        </div>
    </>

}
