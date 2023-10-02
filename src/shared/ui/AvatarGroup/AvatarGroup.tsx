import {FC, memo, useMemo} from "react";
import styles from './AvatarGroup.module.scss';
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
import {User} from "@/entities/User";
interface AvatarGroupProps {
    users: User[];
    className?: string;
    size?: number;
    maxAvatars?: number;
}

export const AvatarGroup: FC<AvatarGroupProps> = memo((props) => {

    const {
        users,
        maxAvatars = 3,
        size = 50,
        className
    } = props;

    const itemsRemaining = useMemo(() => {
        return users?.length - maxAvatars;
    } , [users, maxAvatars]);

    return <>
        <div className={classNames(styles.AvatarGroup, className)}>
            {
                users.slice(0, maxAvatars).map((user) =>
                    <Avatar
                        src={'https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg'}
                        key={user.id}
                        className={styles.avatar}
                        size={size}/>
                )
            }
            {
                itemsRemaining > 0 && <Avatar
                    className={styles.avatar}
                    size={size}
                    children={<>{itemsRemaining}+</>}/>
            }
        </div>
    </>

});
