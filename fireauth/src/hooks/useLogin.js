import {useState} from 'react';
import {appAuth} from '../firebase/config';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {

    // 에러정보 관리
    const [error, setError] = useState(null);
    // 통신 상태 관리
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    // console.log(appAuth.currentUser);
    // setInterval(() => {
    //     console.log(appAuth.currentUser);
    // }, 1000);

    const login = (email, password) => {
        setIsPending(true);

        signInWithEmailAndPassword(appAuth, email, password)
        .then((userCredential) => {
            // login 
            const user = userCredential.user;
            console.log(user);
            dispatch({type : "login", payload : user});
            setIsPending(false);
            if(!user) {
                throw new Error("회원정보를 불러올 수 없습니다.");
            }
        })
        .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.error(error);
        });
    }

    return {error, isPending, login};

}