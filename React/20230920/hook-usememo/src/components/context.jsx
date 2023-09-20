import { createContext } from "react";

// 분리된 컴포넌트에서 context에 접근하고자 할때 별도의 컨텍스트 전용 파일을 만들어 두시면 편하게 사용할수 있습니다.
export const UserInfo = createContext({name : "Licat", id : "LicatIsNotFree"});

export default UserInfo;