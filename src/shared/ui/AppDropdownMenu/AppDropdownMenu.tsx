import {FC, ReactNode} from "react";
import {Listbox} from "@headlessui/react";
import {BsThreeDotsVertical} from "react-icons/bs";
import styles from './AppDropdownMenu.module.scss';
import classNames from "classnames";
import {EventComment} from "@/entities/Comment/model/types/Comment.ts";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
}

interface AppDropdownMenuProps{
    className?: string;
    items?: ListBoxItem[];
    onClickItem: (event: EventComment) => void;
}

export const AppDropdownMenu: FC<AppDropdownMenuProps> = (props) => {

    const {
        onClickItem,
        items,
        className
    } = props;

    return <Listbox
        as={'div'}
        onChange={onClickItem}
        className={classNames(styles.AppDropdownMenu, className)}>
                <Listbox.Button className={styles.btn}>
                    <BsThreeDotsVertical className={styles.three}/>
                </Listbox.Button>

                <Listbox.Options className={styles.items}>
                    {
                        items?.map((item) => <Listbox.Option
                            key={item.value}
                            value={item.value}>
                                {() => (
                                    <li className={styles.item}>{item.value}</li>
                                )}
                            </Listbox.Option>
                        )
                    }
                </Listbox.Options>
            </Listbox>
};
