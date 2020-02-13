import {useEffect} from "react";
import useLocalStorage from "./hooks";

function useDarkMode(initialValue) {
  const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

  useEffect(() => {
    document.body.classList.remove('dark-mode');
    if (isDarkMode) document.body.classList.add('dark-mode');
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
}

export default useDarkMode;
