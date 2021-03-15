window.BWKStore = (() => {
    const read = (key) => localStorage.getItem(key);
    const write = (key, value) => localStorage.setItem(key, value);

    const THEMES = {
        LIGHT: 'light',
        DARK: 'dark',
    };
    const THEME_KEY = 'BWK-theme';

    const setTheme = theme => {
        document.body.dataset.siteTheme = theme;
        write(THEME_KEY, theme);

        return theme;
    };

    const getTheme = () => read(THEME_KEY);

    const currentTheme = setTheme(getTheme() || THEMES.LIGHT);

    return {
        THEMES, THEME_KEY,
        currentTheme,
        setTheme,
        read, write,
    };
})();
