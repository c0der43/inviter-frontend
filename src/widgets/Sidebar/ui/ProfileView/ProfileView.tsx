import {FC, memo} from "react";
import styles from './ProfileView.module.scss';
import {Text} from "@/shared/ui/Text";
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
import {User} from "@/entities/User";

interface ProfileViewProps {
    className?: string;
    user?: User;
}
export const ProfileView: FC<ProfileViewProps> = memo((props) => {

    const {
        user,
        className
    } = props;

    return (
        <div className={classNames(styles.ProfileView, className)}>
            {
                user?.avatar && <Avatar
                    src={`http://localhost:5000/uploads_avatar/${user?.avatar?.fileName}`}
                    size={100}
                />
            }
            <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'5px'}}>
                <Text text={`${user?.firstName} ${user?.lastName}`} bold={true} align={'left'} size={'m'}/>
                <Text text={user?.email} bold={true} size={'s'}/>
            </div>
        </div>
    );

});
