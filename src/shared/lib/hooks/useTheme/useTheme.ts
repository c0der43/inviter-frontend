import {Theme} from "@/shared/const/theme.ts";
import {useContext} from "react";
import {ThemeContext} from "@/shared/lib/context/ThemeContext.ts";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage.ts";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export function useTheme () : UseThemeResult {

    const {
        theme,
        setTheme
    } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }

}
