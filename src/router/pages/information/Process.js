import { Link } from "react-router-dom";
import React from "react";

import Header from "../../../Header/Header";
import Footer from "../../../component/Footer";
import IntroduceVisual from "../introduce/IntroduceVisual";
import icon5 from "../../../asset/img/icon5.png";
import icon8 from "../../../asset/img/icon8.png";
import icon7 from "../../../asset/img/icon7.png";

import icon1 from "../../../asset/img/icon1.png";
import icon9 from "../../../asset/img/icon9.png";
import subVisual from "../../../asset/img/banner7.jpg";
import "./Process.css";
const subVisualData = {
  title: "노인장기요양보험",
  subTitle: "따사로운 햇빛처럼 항상 정성과 행복을 다하는 가족이 되겠습니다.",
  banner: subVisual,
};

const Process = () => {
  return (
    <div className="visitingcare info_vn">
      {/* <Header /> */}
      <IntroduceVisual data={subVisualData} />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList2">
            <li>
              <Link to="/process" className="on">
                신청절차
              </Link>
            </li>
            <li>
              <Link to="/grade">등급판정기준</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 mb-16 px-28 text-gray-500">
        <h2 className="text-gray-700 sub_title">신청절차</h2>
        <div className="">
          <div className="text-5xl leading-snug flex justify-center flex-col text-center">
            <p>
              복잡하고 어려운<span className="font-bold">노인장기요양보험</span>
              의 신청
              <br /> 저희가 도와드리겠습니다.
            </p>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src={icon5} className="w-[40px] h-[40px]" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-1 text-2xl">
                      전화 및 방문 상담 신청
                    </h2>
                    <div className="text-lg">
                      <p className="leading-relaxed">
                        방문이 어려우신 분들은 전화 상담으로 친절하고 자세히
                        도와드리겠습니다.
                      </p>
                      <p className="leading-relaxed">
                        <span className="font-bold">
                          전화상담 : 010-1234-5678
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src={icon1} className="w-[40px] h-[40px]" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-1 text-2xl">
                      상담 가정 반문
                    </h2>
                    <p className="leading-relaxed text-lg">
                      문의 주신 내용 및 상담 내용을 검토하여 전문상담가가 직접
                      <span className="font-bold">
                        가정으로 방문하여 가족분들과 <br />
                        상담 및 어르신의 상태를 분석
                      </span>
                      하여 이를 토대로 방문요양의 방법을 선택합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-100 rounded-full inline-flex items-center justify-center">
                    <img src={icon9} className="w-[40px] h-[40px]" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-1 text-2xl">
                      장기요양인정 신청
                    </h2>
                    <p className="leading-relaxed text-lg">
                      장기요양인정 신청, 인정조사, 의사소견서 제출, 장기요양등급
                      판정, 장기요양인정서 송부 <br />
                      순으로 진행되며{" "}
                      <span className="font-bold">
                        모든 단계는 저희 청솔 재가노인복지센터에서 도와드립니다.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src={icon7} className="w-[40px] h-[40px]" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-1 text-2xl">
                      계약서 작성
                    </h2>
                    <p className="leading-relaxed text-lg">
                      방문요양에 관하여 상담 후 청솔 노인재가센터와 계약서를
                      작성합니다.
                      <br />
                      결제 방법을 선택하시고 결제를 완료하시면 계약이 모두
                      완료됩니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                  5
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src={icon8} className="w-[40px] h-[40px]" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-1 text-2xl">
                      방문 요양 시작
                    </h2>
                    <p className="leading-relaxed text-lg">
                      어르신 및 가족분들과 함께 설계한 방법에 맞춰 맞춤형 전문
                      요양보호사를 가정으로
                      <br /> 파견해드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Process;
