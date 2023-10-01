import {FC, memo} from "react";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.ts";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {

    const {toggleTheme} = useTheme();

    const {
        className
    } = props;


    return <>
        <button className={className} onClick={toggleTheme}>toggle</button>
    </>
});
