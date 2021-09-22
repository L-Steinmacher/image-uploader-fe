import useLocalStorage from "./useLocalStorage";

const useId = (idValue, tokenValue) => {
    const [id, setId] = localStorage("id", idValue);
    const [token, setToken] = localStorage("token", tokenValue);

    return [id, setId, token, setToken];
}

export default useId;