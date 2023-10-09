import {FC, memo} from "react";
import classNames from "classnames";
import styles from './TagsView.module.scss';
import {Tag} from "@/entities/Tag";

interface TagsViewProps {
    className?:string
    tags: Array<Tag>
}

export const TagsView: FC<TagsViewProps> = memo((props) => {

    const {
        tags,
        className
    } = props;

    return <>
        <div className={classNames(styles.TagsView, className)}>
            {
                tags.map((tag) => <div className={styles.tag} key={tag.id}>{tag.name}</div>)
            }
        </div>
    </>
});
