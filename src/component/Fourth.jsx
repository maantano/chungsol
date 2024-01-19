import React, { useEffect, useRef } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
import call from "../asset/img/call2.png";
const { kakao } = window;

const Fourth = () => {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.4992573, 126.9521588),
    level: 1,
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const location = [[37.4992573, 126.9521588]];
    // const location = [[37.49983363813386, 126.95181827518353]];

    location.map((e) => {
      const markerPosition = new kakao.maps.LatLng(e[0], e[1]);
      new kakao.maps.Marker({ map, position: markerPosition });
      return null;
    });
  }, []);

  return (
    <div className="flex justify-center py-10 gap-24 fourthBackground">
      <div className="flex items-center">
        <div className="h-[400px] w-64 bg-gray-100 bg-opacity-70 items-center flex rounded-xl flex-col">
          <div className="mt-7">
            <img
              className="w-20 h-20"
              src={call}
              alt="Icon made by Pixel perfect from www.flaticon.com"
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <div className="text-xl font-semibold">상담 업무 시간</div>
            <div className="text-base mt-3">평일 오전 09:00~ 오후 06:00</div>
            <div className="text-base">토요일 오전 09:00~ 오후 01:00</div>
            <div className="text-base mb-3">
              점심시간 오후 12:00~ 오후 01:00
            </div>

            <div className="text-xl font-semibold">문의상담</div>
            <div className="text-base mt-3">010-8722-2262</div>
            <div className="text-base">02-816-5200</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 my-4 rounded-md bg-opacity-70">
        <div className="text-3xl mb-5">
          찾아오시는 길
          <div className="text-xl">서울시 동작구 상도로 49길 11, 1층 </div>
        </div>
        <div
          id={"map"}
          ref={container}
          style={{
            width: 800,
            borderRadius: 15,
            height: 300,
            // right: "100px",
            // marginBottom: 50,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Fourth;
