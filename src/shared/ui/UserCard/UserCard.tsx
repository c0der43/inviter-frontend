import {FC, memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Avatar} from "@/shared/ui/Avatar";
import {Text} from "@/shared/ui/Text";
import styles from './UserCard.module.scss';

interface UserCardProps {
    firstName?: string;
    lastName?: string;
    email?: string;
}
export const UserCard: FC<UserCardProps> = memo((props) => {

    const {
        email,
        firstName,
        lastName
    } = props;

    return <>
        <Card dotted className={styles.UserCard}>
            <Avatar
                size={100}
                src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'}/>

            <div className={styles.info}>
                <Text text={`${firstName} ${lastName}`} bold size={'l'}/>
                <Text text={email} size={'m'}/>
            </div>
        </Card>
    </>

});
