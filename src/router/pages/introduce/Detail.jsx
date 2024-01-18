import React, { useEffect, useRef } from "react";
import "./daum.css";
import Header from "../../../Header/Header";
import IntroduceVisual from "./IntroduceVisual";
import { Link } from "react-router-dom";
import Footer from "../../../component/Footer";
import subVisual from "../../../asset/img/image3.jpg";
const { kakao } = window;

const subVisualData = {
  title: "센터 소개",
  subTitle: "따사로운 햇빛처럼 항상 정성과 행복을 다하는 가족이 되겠습니다.",
  banner: subVisual,
};

const Detail = () => {
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

  // Raychan

  return (
    <>
      <IntroduceVisual data={subVisualData} />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li style={{ width: "50%" }}>
              <Link to="/introduce">인사말</Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link to="/detail" className="on">
                센터 소개
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 mb-16">
        <h2 className="text-gray-700 sub_title">찾아오시는 길</h2>
        <div className="mb-10 text-5xl leading-snug flex justify-center flex-col text-center mb-10">
          <p>
            <span className="font-bold">청솔방문요양센터</span>의 의치를
            안내해드리겠습니다.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center ">
            <div
              id={"map"}
              ref={container}
              className="w-5/6"
              style={{
                borderRadius: 10,
                height: 500,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-[85%] ml-28 text-gray-500">
        <hr className="my-6" />
        <div className="flex  text-xl my-3">
          <div className="font-bold">주소</div>
          <div className="ml-16 text-base">서울시 서초구 서초중앙로</div>
        </div>
        <div className="flex  text-xl my-3">
          <div className="font-bold">전화</div>
          <div className="ml-16 text-base">010-1234-5678 / 02-1234-5678</div>
        </div>
        <div className="flex  text-xl my-3">
          <div className="font-bold">FAX</div>
          <div className="ml-16 text-base">080-1234-56789</div>
        </div>
        <hr className="my-6" />
        <div className="flex  text-xl my-3">
          <div className="font-bold">대중교통(지하철)</div>
          <div className="ml-8 text-base flex items-center">
            <div className="mx-3 flex items-center">
              <span class="hide_text ico_subway ico_subway07"></span>
              <span>상도역</span>
            </div>
            <div className="mx-3 flex items-center">
              <span class="hide_text ico_subway ico_subway07"></span>
              <span>숭실대입구역</span>
            </div>
          </div>
        </div>
        <div className="flex  text-xl ">
          <div className="font-bold">대중교통(버스)</div>
          <div className="ml-14 mx-3 flex items-center">
            <span className=" ico_bus1 ">
              <span className="icon_bus">간선</span>
            </span>

            <span className="verticalLine mx-2 text-base">752번</span>
            <span className="verticalLine mx-2 text-base">753번</span>
            <span className="verticalLine mx-2 text-base">360번</span>
          </div>
          <div className="mx-3 flex items-center">
            <span className=" ico_bus2 ">
              <span className="icon_bus">간선</span>
            </span>
            <span className="verticalLine mx-2 text-base">4319번</span>
            <span className="verticalLine mx-2 text-base">1213번</span>
            <span className="verticalLine mx-2 text-base">4872번</span>
            <span className="verticalLine mx-2 text-base">5951번</span>
          </div>
          <div className="mx-3 flex items-center">
            <span className=" ico_bus7 ">
              <span className="icon_bus">간선</span>
            </span>
            <span className="verticalLine mx-2 text-base">동작 01번</span>
            <span className="verticalLine mx-2 text-base">동작 08번</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
