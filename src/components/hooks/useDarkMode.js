import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
	const [values, setValues] = useLocalStorage("darkMode");

	useEffect(() => {
		if (values === true) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [values]);

	return [values, setValues];
};

export default useDarkMode;
