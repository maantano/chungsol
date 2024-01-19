import { Link } from "react-router-dom";
import React from "react";
import IntroduceVisual from "../introduce/IntroduceVisual";
import subVisual from "../../../asset/img/image5.jpg";
const subVisualData = {
  title: "노인돌봄서비스",
  subTitle: "따사로운 햇빛처럼 항상 정성과 행복을 다하는 가족이 되겠습니다.",
  banner: subVisual,
  bannerPositionChk: 3,
};

const Care2 = () => {
  return (
    <div className="visitingcare info_vn">
      <IntroduceVisual data={subVisualData} />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList2">
            <li>
              <Link to="/center">제도안내</Link>
            </li>
            <li>
              <Link to="/center2" className="on">
                방문요양
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 mb-16 px-28 text-gray-500">
        <h2 className="text-gray-700 sub_title">방문요양</h2>
        <div className="">
          <div className="text-5xl leading-snug flex justify-center flex-col text-center">
            <p>
              <span className="font-bold">전문요양보호사</span>의 도움을
              받아보세요.
              <br /> 가족같은 마음으로 보살펴드리겠습니다.
            </p>
          </div>

          <div className="mt-10 pl-28">
            <div className="leading-relaxed">
              <table className="table_form">
                <colgroup>
                  <col width="%;" />
                  <col width="%" />
                </colgroup>
                <thead>
                  <tr
                    className="border-solid border-black  shadow-custom"
                    style={{ textAlign: "center" }}
                  >
                    <th>구분</th>
                    <th>지원 목룍</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>신체활동 지원</td>
                    <td>
                      <p>
                        - 세면도움, 구강관리, 머리감기기, 몸 단장, 미용, 옷
                        갈아입혀드리기, 식사 도움, 이동 도움, 신체기능의
                        유지증진 등{" "}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>일상생활 지원</td>
                    <td>
                      <p>
                        - 침구 준비와 정리, 온도조절, 정리정돈, 취사, 세탁, 청소
                        및 주변정돈 등
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      개인활동 지원 및 정서지원
                    </td>
                    <td>
                      <p>
                        - 산책, 장보기, 관공서 방문 동행 및 책임귀가,
                        일상업무대행, 말벗, 격려 및 위로, 생활상담, 의사소통
                        도움 등
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-14  text-2xl leading-snug flex justify-end text-right ">
                <div className="flex flex-col leading-relaxed mb-20">
                  <p>사소한 것이라도 성심을 다해 답변드리겠습니다.</p>
                  <p>문의 전화 : 전화 010-8722-2262 / 02-816-5200</p>
                  <p>청솔재가노인복지센터 센터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care2;
