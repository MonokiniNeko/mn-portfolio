export const checkStorageTheme = () => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    return storedTheme;
}
export const checkStorageLanguage = () => {
    const storedLanguage = localStorage.getItem("language") || navigator.language.substring(0, 2).toLowerCase();
    return storedLanguage
}
