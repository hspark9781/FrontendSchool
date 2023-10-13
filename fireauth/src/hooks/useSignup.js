import {useState} from 'react';
import {appAuth} from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    // 에러정보 관리
    const [error, setError] = useState(null);
    // 통신 상태 관리
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            if(!user) {
                throw new Error("회원정보를 불러올 수 없습니다.");
            }

            // 회원정보 업데이트 함수
            updateProfile(appAuth.currentUser, {displayName})
            .then(() => {
                // 회원 정보를 context에 업데이트 합니다.
                dispatch({type : "login", payload : user});
                setError(null);
                setIsPending(false);
            }).catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(error);
            })
        })
        .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.error(error);
        });
    }

    return {error, isPending, signup};

}