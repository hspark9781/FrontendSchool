import React, {useContext} from 'react';
import { ThemeContext } from '../DarkMode';

export default function ThemeSwitch() {

    // 클릭 이벤트가 발생하면 setTheme함수를 호출해서 theme를 업데이트 합니다.
    const {toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>테마 전환</button>
    )
}
