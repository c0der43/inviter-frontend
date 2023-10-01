import {FC, memo} from "react";
import classNames from "classnames";
import styles from './TagsView.module.scss';

interface TagsViewProps {
    className?:string
    tags: Array<string>
}

export const TagsView: FC<TagsViewProps> = memo((props) => {

    const {
        tags,
        className
    } = props;

    return <>
        <div className={classNames(styles.TagsView, className)}>
            {
                tags.map((text, index) => <div className={styles.tag} key={index}>{text}</div>)
            }
        </div>
    </>
});
