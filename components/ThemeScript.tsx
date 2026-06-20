// Inline, render-blocking script: applies the saved theme before first paint
// so there's no flash of the default theme on load.
export function ThemeScript() {
  const js = `(function(){try{var t=localStorage.getItem('theme');var ok=['dark','paper','ocean','copper','terminal'];if(t&&ok.indexOf(t)>-1){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
