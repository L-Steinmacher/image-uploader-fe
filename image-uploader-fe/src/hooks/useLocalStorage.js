import { useState } from "react";

/**
 * Places a key/value pair in local storage for use later
 * @param {*} key The name of the item in local storage
 * @param {*} initialValue the value to be stored in local storage
 */
const useLocalStorage = (key, initialValue) => {
    const [ value, setValue ] = useState(() => {
        if (localStorage.getItem(key)) {
            return localStorage.getItem(key);
        }
        if (initialValue !== false) {
            localStorage.setItem(key, initialValue)
            return initialValue
        }
    });

    const setNewValue = value => {
        if (value !== false) {
            localStorage.setItem(key, value)
        }
    }
    return [value, setNewValue];
}

export default useLocalStorage;