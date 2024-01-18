import React, { useEffect, useRef } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
import call from "../asset/img/call2.png";
const { kakao } = window;

const Fourth = () => {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.49983363813386, 126.95181827518353),
    level: 1,
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const location = [[37.49983363813386, 126.95181827518353]];
    location.map((e) => {
      const markerPosition = new kakao.maps.LatLng(e[0], e[1]);
      new kakao.maps.Marker({ map, position: markerPosition });
    });
  }, []);

  return (
    <div className="flex justify-center py-10 gap-24 fourthBackground">
      <div className="flex items-center">
        <div className="h-[400px] w-64 bg-gray-100 bg-opacity-70 items-center flex rounded-xl flex-col">
          {/* <div className="h-[400px] w-64 bg-gray-100 items-center flex rounded-xl flex-col"> */}
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
            <div className="text-base mt-3">010-1234-1234</div>
            <div className="text-base">010-1234-1234</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 my-4 rounded-md bg-opacity-70">
        <div className="text-3xl mb-5">
          찾아오시는 길
          <div className="text-xl">서울시 서초구 서초중앙로200</div>
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

{
  /* <div style={{ height: 400 }}>
      <div className="firstDiv">
        <div className="secondDiv">
          <div className="lf-firstDiv">
            <h1 className="lf-firstH1">부담.</h1>
            <div className="lf-secondDiv">
              덜어낼수 있는 가장 빠른 방법 <br />
              가족처럼 도와드리겠습니다.
            </div>
            <div
              className="lf-secondDiv"
              style={{ display: "block", marginTop: 15 }}
            >
              센터장 : 010-1234-5678
            </div>
          </div>

          <div className="rg-upside-firstDiv">
            <div style={{ marginLeft: "80%", paddingTop: "3.5rem" }}>
              <div
                id={"map"}
                ref={container}
                style={{
                  width: 500,
                  borderRadius: 15,
                  height: 300,
                  right: "-145px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
