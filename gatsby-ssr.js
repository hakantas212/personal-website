import React from 'react';
import App from './src/components/App';
import { COLOR_MODE_KEY, theme, INITIAL_COLOR_MODE_CSS_PROP, } from './src/components/themes';

function setColorsByTheme() {
  const colors = 'color';
  const colorModeKey = 'color-key';
  const colorModeCssProp = 'color-mode-css';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'color'", JSON.stringify(theme))
    .replace('color-key', COLOR_MODE_KEY)
    .replace('color-mode-css', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;


  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {

  const cssVariableString = Object.entries(theme).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};