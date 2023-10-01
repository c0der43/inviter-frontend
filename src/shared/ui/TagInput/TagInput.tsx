import {ChangeEvent, FC, memo} from "react";
import classNames from "classnames";
import styles from './TagInput.module.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";
import {Tag} from "@/entities/Tag";

interface TagInputProps {
    className?: string;
    tags: Array<Tag>;
    onChange?: (value: string) => void;
    onDelete?: (id: number) => void;
    value?: string;
    maxTag?: number;
    fetchTags?: Array<Tag>;
    onClickListItem?: (tag: Tag) => void;
}
export const TagInput: FC<TagInputProps> = memo((props) => {

    const {
        onClickListItem,
        fetchTags,
        maxTag = 3,
        onDelete,
        value,
        onChange,
        tags,
        className
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const onAddTagClick = (tag: Tag) => {
        if(maxTag > tags.length){
            onClickListItem?.(tag);
            return;
        }
        alert(`Можно использовать только ${maxTag} тега!`);
    }

    // const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if(event.key === 'Enter' && value){
    //         if (maxTag > tags.length){
    //             onAddTag?.(value);
    //             return;
    //         }
    //         alert(`Можно использовать только ${maxTag} тега!`);
    //     }
    // }

    const tagsInput = <div className={classNames(styles.TagInput, className)}>
        <ul className={styles.tags}>
            {
                tags.map((tag) => <li className={styles.tag} key={tag.id}>
                    <span>{tag.name}</span>
                    <IoIosCloseCircleOutline className={styles.close} onClick={() => onDelete?.(tag.id)}/>
                </li>)
            }
        </ul>
        <input
            //onKeyUp={onKeyUpHandler}
            placeholder={'Press enter to add tags'}
            onChange={onChangeHandler}
            value={value}/>
    </div>;

    return <div className={styles.tag_input_container}>
        {tagsInput}
        <ul className={styles.items_container}>
            {
               value && fetchTags?.map((tag) => <li className={styles.item} onClick={() => onAddTagClick(tag)}>{tag.name}</li>)
            }
        </ul>
    </div>;
});
