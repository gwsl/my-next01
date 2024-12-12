"use client"
import { Button } from "@mui/material";
import axios from "axios";

const CampingDataFetch = () => {
  const handleFetchAndSave = async () => {
    try {
      const response = await axios.get("https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=lmnmxomE1qd1AJboHR0EY3%2FxrVuREYP34Tbppaw%2FLkD68Ew7U5jKVsSIJpL%2F9cWVVHMc6h2%2BJjqcW3e0r7423w%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=MobileApp&_type=json");
      console.log(response.data.response.body.items.item[0].contentId);

    } catch (error) {
      console.error(error);
      alert("캠핑 데이터 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1>캠핑 정보 가져오기 및 저장</h1>
      <Button onClick={handleFetchAndSave}>데이터 저장</Button>
    </div>
  );
};

export default CampingDataFetch;