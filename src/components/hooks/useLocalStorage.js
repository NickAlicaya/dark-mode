import { useState } from "react";

// BELOW IS DUSTIN'S ORIGINAL CODE FOR REFERENCE.
// export const useLocalStorage = (key, initialValue) => {

//     const [storedValue, setStoredValue] = useState(() => {
//       if (window.localStorage.getItem(key)) {
//         return JSON.parse(window.localStorage.getItem(key));
//       }
//       window.localStorage.setItem(key, JSON.stringify(initialValue));
//       return initialValue;
//     });

//     const setValue = value => {
//       setStoredValue(value);
//       window.localStorage.setItem(key, JSON.stringify(value));
//     };

//     return [storedValue, setValue];
//   };

export const useLocalStorage = (key, initialValue) => {
	const item = window.localStorage.getItem(key);
	const [storedValue, setStoredValue] = useState(() => {
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		window.localStorage.setItem(key, JSON.stringify(value));
		setStoredValue(value);
	};

	return [storedValue, setValue];
};
