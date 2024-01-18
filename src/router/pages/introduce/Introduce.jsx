import React from "react";
import IntroduceVisual from "./IntroduceVisual";
import { Link } from "react-router-dom";
import intro1 from "../../../asset/img/intro1.jpg";
import li1 from "../../../asset/img/li1.jpeg";
import li2 from "../../../asset/img/li2.jpeg";
import li3 from "../../../asset/img/li3.jpeg";
import subVisual from "../../../asset/img/image2.jpg";
import classes from "./Introduce.module.css";
const subVisualData = {
  title: "인사말",
  subTitle: "따사로운 햇빛처럼 항상 정성과 행복을 다하는 가족이 되겠습니다.",
  banner: subVisual,
};
const Introduce = () => {
  return (
    <>
      <IntroduceVisual data={subVisualData} />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li style={{ width: "50%" }}>
              <Link to="/introduce" className="on">
                인사말
              </Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link to="/detail">센터 소개</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 mb-16">
        <h2 className="text-gray-700 sub_title">인사말</h2>
        <div className="text-5xl leading-snug flex justify-center flex-col text-center mb-10">
          <p>
            처음뵙겠습니다.<span className="font-bold">청솔입니다.</span>
          </p>
          <p>홈페이지에 오신 것을 환영합니다.</p>
        </div>

        <div className="flex justify-center gap-20">
          <div className="flex items-center">
            <div className="ml-20 mt-10">
              <img
                className="w-96 h-96 object-cover rounded-full"
                src={intro1}
                alt=""
              />
            </div>
          </div>
          <div
            className={`bg-gray-100 text-gray-600 rounded-3xl w-[600px] ${classes.shadowCustom}`}
          >
            <div className="p-10 text-xl leading-loose mt-3">
              <p>
                현재 우리 나라는 전세계적으로 유례없이 저출산 . 초고령화 사회로
                빠르게 접어들고 있으며, 핵가족화 현상은 가족 구성원에 대한
                보호기능의 약화를 가져와, 부부 중심의 가족에서 노인의 지위가
                주변적인 것이 되고, 가정으로부터 소외되어 노인 문제가 사회의
                중요한 문제로 대두 되고 았습니다. 이러한 이유로, 각 가정에서는
                고령이시거나 몸이 불편하신 부모님들을 자녀가 직접 가정에서
                보살필수 없는 현실들이 많이 발생하고 있습니다.
              </p>{" "}
              <br />
              <p>
                저희 청솔재가복지센타에서는 노인성질환(치매등)으로 어려움을 겪고
                계신 어르신들 및 가족들을 위한 재가복지시설로써 방문요양서비스를
                제공합니다. 방문요양서비스는{" "}
                <span className="font-bold">
                  국가에서 이용금액의 상당부분을 지원해주므로, 부담없이
                  이용하실수
                </span>{" "}
                있으며, 전문 요양보호사가 직접 가정에 방문하여 다양한 일상
                생활과 식사 및 병원 방문 진료등을 도와 드리고 있습니다. 저희
                청솔재가복지센타는 어르신들에게 편안한 최고의
                노인맞춤돌봄서비스를 제공할것을 약속드리며, 보호자님들께는
                사랑과 신뢰를 받을수 있로록 최선을 다함은 물론, 어르신들의 손과
                발이되어 편안한 노후를 보내실수 있도록 정성을 다 하겠습니다.
                <p>감사합니다.</p>
              </p>
              <p className="text-right text-2xl">청솔 센터장 올림</p>
            </div>
          </div>
          {/* <ul className="">
            <li className="">
              <p>
                안녕하세요. <br />
                <b>
                  저희 청솔 홈페이지에 <br />
                  오신 것을 환영합니다.
                </b>
              </p>
              <p>
                어떻게 하면 건강하게 <b className="fw900">나다운 삶</b>을
                지켜가며
                <br />
                여생을 보낼 수 있을까에 대한 근본적인 고민을 하며, <br />
                시대적 변화와 소구에 대한 대안을 찾기 위해
                <br />
                전문가들이 모인 집단이 바로 웰더스 스마트 케어입니다.
              </p>
            </li>
          </ul> */}
        </div>
        <div className="mx-12 text-gray-600">
          <div
            className="info_table flex justify-center"
            style={{ marginBottom: "20px", height: 900, paddingTop: 100 }}
          >
            <div className={`flex gap-16 ${classes.imageContainer}`}>
              <div className={`flex flex-col justify-center items-center `}>
                <div className="flex flex-col justify-center items-center w-80">
                  <span className="text-3xl font-medium mt-4 mb-1 text-sky-400">
                    고객 중심
                  </span>
                  <p className="text-lg font-medium mb-8 text-center bg-gray-100 bg-opacity-40 p-3 m-1 rounded-xl">
                    청솔방문요양센터의 고객은 우리의 존재 이유이며 고개이 항상
                    신뢰할 수 있는 서비스를 제공한다.
                  </p>
                </div>
                <div className={` ${classes.diagonalLine1}`}>
                  <img
                    className={`w-96 h-96 rounded-full object-cover`}
                    src={li1}
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-center items-center `}>
                <div className="">
                  <img
                    className="w-96 h-96 rounded-full object-cover"
                    src={li2}
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-80">
                  <span className="text-3xl font-medium my-8 text-cyan-400">
                    어르신 존중
                  </span>
                  <p className="text-lg font-medium mb-8 text-center bg-gray-100 bg-opacity-40 p-3 m-1 rounded-xl">
                    청솔방문요양센터는 언제나 어르신을 존중하고 어르신을 위하며
                    어르신들이 존중받을 수 있는 사회를 만들기위해 노력한다.
                  </p>
                </div>
              </div>
              <div className={`flex flex-col justify-center items-center `}>
                <div className="flex flex-col justify-center items-center w-80">
                  <span className="text-3xl font-medium my-4 text-blue-400">
                    봉사와 헌신
                  </span>
                  <p className="text-lg font-medium mb-8 text-center bg-gray-100 bg-opacity-40 p-3 m-1 rounded-xl">
                    청솔방문요양센터는 봉사와 헌신의 마음을 최우선으로 한다.
                  </p>
                </div>
                <div className={`${classes.diagonalLine2}`}>
                  <img
                    className={`w-96 h-96 rounded-full object-cover`}
                    src={li3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-600 leading-7 ml-14 p-5 w-[80%]">
            <p className="text-4xl font-medium">노인장기요양보험제도</p>
            <p className="text-2xl">
              <span className="text-blue-400 ">급격한 인구고령화</span>
              ,개인이나 가계의 부담을 떠나 사회적‧국가적 책임으로 강조되고
              있습니다.
            </p>
            <p className="text-lg my-3">
              현대 국가는 그 내용이나 정도에 차이가 있으나 모두 복지국가를
              표방하고 있습니다. 대부분의 국가에서는 경제발전과 보건의료의
              발달로 인한 평균 수명의 연장, 자녀에 대한 가치관의 변화, 보육 및
              교육문제 등으로 출산율이 급격히 저하되어 인구구조의 급속한 고령화
              문제에 직면하고 있으며, 이러한 사회변화에 따른 새로운 복지수요를
              충족하기 위한 것이 장기요양보험제도입니다.
            </p>
            <p className="text-lg my-3">
              즉, 고령이나 노인성 질병 등에 따라 거동이 불편한 사람에 대하여
              신체활동이나 가사활동을 지속적으로 지원해주는 서비스가 사회적
              이슈로 부각되었기 때문입니다. 특히, 고령화의 진전과 함께 핵가족화,
              가족구성원의 경제활동참여가 증가하면서 종래 가족의 부담으로
              인식되던 장기요양이 이제 더 이상 개인이나 가계의 부담으로 머물지
              않고 이에 대한 사회적ㆍ국가적 책무가 강조되고 있습니다.
            </p>
            <p className="text-lg my-3">
              이와 같은 사회 환경의 변화와 이에 대처하기 위하여 이미
              선진각국에서는 사회보험방식 및 조세방식으로 그 재원을 마련하여
              장기요양보험제도를 도입하여 운영하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
