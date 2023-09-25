import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import useScroll from './Hook/useScroll';
import Loading from './components/Loading';
export default function App2() {


    const [imageList, setImageList] = useState([]);

    // api에 전달할 페이지 값을 관리합니다.
    const [pageToFetch, setPageToFetch] = useState(1);

    // 로딩 중인 상태를 관리합니다.
    const [isLoading, setIsLoading] = useState(false);

    const isBottom = useScroll();

    // 스크롤이 끝까지 이동했을 경우 데이터의 페이지를 하나 올립니다.
    useEffect(() => {
        if(isBottom) {
            setPageToFetch((prevPage) => {
                return prevPage + 1;
            })
        }
    }, [isBottom]);


    // 이미지 데이터 로딩함수
    async function fetchImagesByPage() {
        setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);
            
            if(!response.ok) {
                throw new Error('네트워크에 문제가 발생했습니다.');
            }

            const data = await response.json();

            // 기존 데이터를 유지하고 추가 데이터를 가져오기
            setImageList((prevDatas)=> {
                return [...prevDatas, ...data]
            });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    // 컴포넌트가 마운트 되면 이미지 데이터 불러오기
    useEffect(() => {
        fetchImagesByPage();
    }, [pageToFetch]);

    return (
        <>
            <ImageList imageList={imageList} />
            {isLoading && <Loading/>}
        </>
    )
}