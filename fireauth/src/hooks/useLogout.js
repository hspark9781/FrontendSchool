import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { signOut } from "firebase/auth";





export const useLogout = () => {

    // 에러정보 관리
    const [err, setError] = useState(null);

    // 통신상태 관리
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const logout = () => {
        setIsPending(true);

        signOut(appAuth).then(() => {
            // Sign-out successful
            dispatch({type : "logout"});
            setIsPending(false);
        }).catch((error) => {
            // An error happened
            setError(error);
            setIsPending(false);
            console.error(err)
        });
    }

    return {err, isPending, logout};
}