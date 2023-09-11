import React, {useState} from 'react';
// export default React;
// export useState;

function Resume(props) {

    // let like = 0;
    // console.log(useState(0));
    let [like, setLike] = useState('');

    function clickLike() {
        // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
        // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다.
        // like += 1;
        if(like === '') {
            setLike('Like');
        } else {
            setLike('');
        }
    }

    return (
        <div style={{border:"solid 1px", width:"500px"}}>
            <h2>{props.name} 자기 소개서</h2>
            <h2>{props.hello}</h2>
            <h3>취미 : {props.hobby}</h3>
            <h3>좋아하는 음식 : {props.food}</h3>
            <h3>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h3>
            <button onClick={clickLike}>like</button><span>{like}</span>
        </div>
    );
}

export default Resume;