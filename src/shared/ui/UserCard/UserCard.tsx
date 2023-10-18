import {ChangeEvent, FC, ForwardedRef, forwardRef, memo, useCallback, useRef, useState} from "react";
import {Card} from "@/shared/ui/Card";
import {Avatar} from "@/shared/ui/Avatar";
import {Text} from "@/shared/ui/Text";
import styles from './UserCard.module.scss';
import {motion} from "framer-motion";
import {Button} from "@/shared/ui/Button";
import {useAddUserAvatarMutation} from "@/pages/SettingsPage/api/fetchSettingsApi.ts";

interface UserCardProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    urlAvatar?: string;
}
export const UserCard: FC<UserCardProps> = memo(forwardRef((props, ref) => {

    const {
        urlAvatar,
        email,
        firstName,
        lastName
    } = props;

    const [addAvatar] = useAddUserAvatarMutation();

    const inputRef = useRef<HTMLInputElement>(null);

    const [photo, setPhoto] = useState<File | null>(null);

    const onChangePhotoProfile = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files != null && setPhoto(e.target.files[0]);
    }

    const addAvatarHandler = useCallback(() => {
        photo && addAvatar(photo);
    }, [addAvatar, photo]);

    return <>
        <div ref={ref as ForwardedRef<HTMLDivElement>} className={styles.container}>
            <Card dotted className={styles.card}>
                <div className={styles.photo_profile}>
                    <input ref={inputRef}
                           type={'file'}
                           accept={'image/*'}
                           onChange={onChangePhotoProfile}
                           hidden/>
                    <Avatar
                        pointer
                        className={styles.avatar}
                        size={100}
                        onClick={() => inputRef?.current?.click()}
                        src={
                        photo == null ? urlAvatar : URL.createObjectURL(photo)}/>
                    {
                        photo && <Button
                            onClick={addAvatarHandler}
                            design={'normal'}>
                            Upload
                        </Button>
                    }
                </div>

                <div className={styles.info}>
                    <Text text={`${firstName} ${lastName}`} bold size={'l'}/>
                    <Text text={email} size={'m'}/>
                </div>
            </Card>
        </div>
    </>

}));

export const MotionUserCard = motion(UserCard);
