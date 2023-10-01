import {FC, memo } from "react";
import styles from './AddingUsersView.module.scss';
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
import { RxCross1 } from "react-icons/rx";
import {User} from "@/entities/User";

interface AddingUsersViewProps {
    className?: string;
    users: Array<User>;
    onDelete?: (id: number) => void;
    maxLength?: number;
}
export const AddingUsersView: FC<AddingUsersViewProps> = memo((props) => {

    const {
        onDelete,
        className,
        users
    } = props;

    const onClickDelete = (index: number) => {
        onDelete?.(index);
    };

    return <>
        <div className={classNames(styles.AddingUsersView, className)}>
            {
                users.map((user) =>
                    <div className={styles.item}>
                        <RxCross1 className={styles.delete} onClick={() => onClickDelete(user.id)}/>
                        <Avatar src={'https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg'}/>
                    </div>
                )
            }
        </div>
    </>

});
