"use client"
import { useEffect } from 'react';

function Page(props) {
    useEffect(() => {
        // Kakao Maps API 스크립트 동적 로드
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=92fc7272bc08200be416bcdb7ef66d32&autoload=false";
        script.async = true;
        document.head.appendChild(script);
    
        script.onload = () => {
          window.kakao.maps.load(() => {
            const kakao = window.kakao;
            const container = document.getElementById("map");
            const options = {
              center: new kakao.maps.LatLng(33.450701, 126.570667),
              level: 3,
            };
            new kakao.maps.Map(container, options);
          });
        };
          
    
        // cleanup 함수로 스크립트 제거
        return () => {
            document.head.removeChild(script);
          };
        }, []);
    return (
        
        <div
            id="map"
            style={{
            width: "500px",
            height: "400px",
            }}
        ></div>
    );
}

export default Page;