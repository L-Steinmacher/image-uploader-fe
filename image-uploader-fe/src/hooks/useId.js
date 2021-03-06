import useLocalStorage from './useLocalStorage';

function useId(idValue, tokenValue) {
    const [id, setId] = useLocalStorage('id', idValue);
    const [token, setToken] = useLocalStorage('token', tokenValue);

    return [id, setId, token, setToken];
}

export default useId;