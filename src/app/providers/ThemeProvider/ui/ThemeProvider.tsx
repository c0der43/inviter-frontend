import {FC, ReactNode, useEffect, useMemo, useState} from "react";
import {Theme} from "@/shared/const/theme.ts";
import {ThemeContext} from "@/shared/lib/context/ThemeContext.ts";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage.ts";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
interface ThemeProvider {
    initTheme?: Theme;
    children: ReactNode;
}
export const ThemeProvider: FC<ThemeProvider> = (props) => {

    const {
        children,
        initTheme
    } = props;

    const [theme, setTheme] = useState<Theme>(
        initTheme || defaultTheme
    );

    useEffect(() => {
        document.body.className = theme;
    },[theme]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }),[theme]);

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
}
