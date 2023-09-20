import React, {useState, useEffect} from 'react'

export default function LayoutEffect() {

    const [num, setNum] = useState(0);

    useEffect(() => {
        for(let i = 0; i < 100000000; i++) {

        }
        setNum((prev) => prev + 1)
    },[num]); //사실은 엄청 오래걸리고 어려운 로직

    return (
        <h1>{num}</h1>
    )
}
