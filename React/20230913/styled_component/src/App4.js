import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

function MyComponent(props) {
    return(
        // className이 있어야 styled-components기능을 이용해 확장 가능
        <div className={props.className}>이것은 새로운 컴포넌트야!</div>
    )
}
const MyComponentBlue = styled(MyComponent)`
    background-color: royalblue;
`

function App4() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
            <MyComponentBlue/>
        </div>
    );
}

export default App4;