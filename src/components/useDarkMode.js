// import { useEffect, useState } from 'react';
// export const useDarkMode = () => {
//     const [theme, setTheme] = useState();

//     const setMode = mode => {
//         window.localStorage.setItem('theme', mode)
//         setTheme(mode)
//     };

//     const themeToggler = () => {
//         theme === 'dark' ? setMode('light') : setMode('dark')

//         if(theme === 'dark') {
//             document.body.classList.remove('theme-light');
//             document.body.classList.add('theme-dark');
//           } else {
//             document.body.classList.remove('theme-dark');
//             document.body.classList.add('theme-light');
//           }
//         };
        


//     useEffect(() => {
//         const localTheme = window.localStorage.getItem('theme');
//         localTheme && setTheme(localTheme)
//     }, []);
//     return [theme, themeToggler]
// };
