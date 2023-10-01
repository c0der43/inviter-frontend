import {FC, memo} from "react";
import styles from './ProfileView.module.scss';
import {Text} from "@/shared/ui/Text";
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";

interface ProfileViewProps {
    className?: string;
}
export const ProfileView: FC<ProfileViewProps> = memo((props) => {

    const {
        className
    } = props;

    return (
        <div className={classNames(styles.ProfileView, className)}>
            <Avatar
                src={'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg'}
                size={100}
            />
            <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'5px'}}>
                <Text text={'DEV43'} bold={true} align={'left'} size={'m'}/>
                <Text text={'dev43@gmail.com'} bold={true} size={'s'}/>
            </div>
        </div>
    );

});
