import { Link } from "react-router-dom";
import React from "react";
import subVisual from "../../../asset/img/image5.jpg";
import IntroduceVisual from "../introduce/IntroduceVisual";
const subVisualData = {
  title: "노인장기요양보험",
  subTitle: "따사로운 햇빛처럼 항상 정성과 행복을 다하는 가족이 되겠습니다.",
  banner: subVisual,
  bannerPositionChk: 3,
};

const Care1 = () => {
  return (
    <div className="visitingcare info_vn">
      {/* <Header /> */}
      <IntroduceVisual data={subVisualData} />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList2">
            <li>
              <Link to="/center" className="on">
                제도안내
              </Link>
            </li>
            <li>
              <Link to="/center2">방문요양</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 mb-16 px-28 text-gray-500">
        <h2 className="text-gray-700 sub_title">제도안내</h2>
        <div className="">
          <div className="text-5xl leading-snug flex justify-center flex-col text-center">
            <p>
              <span className="font-bold">노인장기요양문</span>제는 개인이나
              가계의 문제만이 아닙니다.
            </p>
            <p>
              <span className="font-bold">사회적,국가적 책임</span>으로
              강조되고있습니다.
            </p>
          </div>
          <div className="mt-10 pl-28">
            <div className="mb-20">
              <div className="mb-7 text-2xl font-medium text-black">
                노인장기요양보험제도의 목적
              </div>
              <div className="text-xl leading-relaxed">
                <p>
                  <span className="font-bold">
                    고령이나 노인성 질병 등의 사유로 일상생활을 혼자서 수행하기
                    어려운 노인
                  </span>
                  등에게 신체활동 또는 가사활동 지원 등의 장기요양급여를
                  제공하여
                  <br /> 노후의 건강증진 및 생활안정을 도모하고 그 가족의 부담을
                  덜어줌으로써 국민의 삶의 질을 향상하도록 함을 목적으로
                  시행하는 사회보험제도 입니다.
                </p>
              </div>
            </div>
            <div className="mb-20">
              <div className="mb-7 text-2xl font-medium text-black">
                노인장기요양보험제도의 주요 특징
              </div>
              <div className="text-xl leading-relaxed">
                <p>
                  우리나라 노인장기요양보험제도는 건강보험제도와는 별개의 제도로
                  도입, 운영되고 있는 한편으로, 제도 운영의 효율성을 도모하기
                  위해 보험자 및 관리 운영기관을{" "}
                  <span className="font-bold">국민건강보험공단</span>
                  으로 일원화하고 있습니다. 또한 국고지원이 가미된
                  사회보험방식을 채택하고 있고 수급대상자에게는{" "}
                  <span className="font-bold">
                    65세 미만의 장애인이 제외되어 노인을 중심으로 운영
                  </span>
                  되고 있습니다.
                </p>
                <div className="pl-9 ">
                  <div className="my-10">
                    <span className="font-bold">건강보험제도와 별도 운영</span>
                    <p>
                      장기요양보험제도를 건강보험제도와 분리 운영하는 경우
                      노인등에 대한 요양필요성 부각이 비교적 용이하여 새로운
                      제도도입에 용이하며, 건강보험 재정에 구속되지 않아
                      장기요양급여 운영, 장기요양제도의 특성을 살릴 수 있도록{" "}
                      <span className="font-bold">건강건강보험법</span> 과는
                      별도로{" "}
                      <span className="font-bold">노인장기요양보험법</span> 을
                      제정하였습니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      사회보험방식을 기본으로 한 국고지원 부가방식
                    </span>
                    <p>
                      우리나라 장기요양제도는 사회보험방식을 근간으로 일부는
                      공적부조방식을 가미한 형태로 설계,운영되고 있습니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      보험자 및 관리운영기관의 일원화
                    </span>
                    <p>
                      우리나라 장기요양보험제도는 이를 관리, 운영할기관을 별도로
                      설치하지 않고 국민건강보험법에 의하여 설립된 기존의
                      국민건강보험공단을 관리운영기관으로 하고있습니다. 이는
                      도입과 정착을 원활히하기 위하여 건강보험과 독립적인 형태로
                      설계하되, 그 운영에 있어서는 효율성 제고를 위하여 별도로
                      관리운영기관을 설치하지 않고 국민건강보험공단이 이를 함꼐
                      수행하도록 한 것입니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">노인중심의 급여</span>
                    <p>
                      우리나라 장기요양보험제도는{" "}
                      <span className="font-bold">
                        65세이상의 노인 또는 65세미만
                      </span>
                      의 자로서 치매, 뇌혈관성 질환 등 노인성질병을 가진자중
                      6개월 이상
                      <span className="font-bold">
                        혼자서 일상생활을 하기 어렵다고 인정된 자
                      </span>
                      를 그 수급대상자로 하고 있습니다. 여기에는
                      <span className="font-bold">
                        65세 미만자의 노인성질병이 없는 일반적인 장애인은 제외
                      </span>
                      되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="mb-7 text-2xl font-medium text-black">
                노인장기요양보험 적용
              </div>
              <div className="text-xl leading-relaxed">
                <div className="pl-9 ">
                  <div className="my-10">
                    <span className="font-bold">적용대상</span>
                    <p>
                      <span className="font-bold">건강보험 가입자</span>는
                      장기요양보험의 가입자가 됩니다.
                      <span className="font-bold">(법 제7조제3항)</span> 이는
                      건강보험의 적용에서와 같이 법률상 가입이 강제되어있습니다.
                      또한{" "}
                      <span className="font-bold">
                        공공부조의 영역에 속하는 의료급여 수급권자
                      </span>
                      의 경우 건강보험과 장기요양보험의 가입자에서는 제외되지만,
                      국가 및 지방자치 단체의 부담으로 장기요양보험의
                      적용대상으로 하고있습니다.(법 제 12조).
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">장기요양인정</span>
                    <p>
                      장기요양보험 가이바 및 그 피부양자나 의료급여수급권자
                      누구나 장기요양급여를 받을 수 있는것은 아닙니다. 일정한
                      절차에 따라 장기요양급여를 받을 수 있는 권리(수급권)가
                      부여되는데 이를{" "}
                      <span className="font-bold">장기요양인정</span>이라고
                      합니다.
                      <br />
                      장기요양인정절차는 먼저 공단에{" "}
                      <span className="font-bold">장기요양인정 신청</span>
                      으로부터 출발하여 공단직원의 방문에 의한{" "}
                      <span className="font-bold">인정조사</span>와
                      등급판정위원회의{" "}
                      <span className="font-bold">등급판정</span> 그리고{" "}
                      <span className="font-bold">
                        장기요양인정서와 표준장기요양이용계획서의 작성 및 송부
                      </span>
                      로 이루어집니다.
                      <br />
                      <div className="pl-3">
                        ※ 장기 요양인정 신청자격 : 장기요양보험 가입자 및 그
                        피부양자 또는 의료수급권자중 65세 이상의 노인 또는 65세
                        미만자로서 치매, 뇌혈관성 질환 등 노인성 질병을 가진 자
                      </div>
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      보험자 및 관리운영기관의 일원화
                    </span>
                    <p>
                      우리나라 장기요양보험제도는 이를 관리, 운영할기관을 별도로
                      설치하지 않고 국민건강보험법에 의하여 설립된 기존의
                      국민건강보험공단을 관리운영기관으로 하고있습니다. 이는
                      도입과 정착을 원활히하기 위하여 건강보험과 독립적인 형태로
                      설계하되, 그 운영에 있어서는 효율성 제고를 위하여 별도로
                      관리운영기관을 설치하지 않고 국민건강보험공단이 이를 함꼐
                      수행하도록 한 것입니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold"></span>
                    <p>
                      우리나라 장기요양보험제도는{" "}
                      <span className="font-bold">
                        65세이상의 노인 또는 65세미만
                      </span>
                      의 자로서 치매, 뇌혈관성 질환 등 노인성질병을 가진자중
                      6개월 이상
                      <span className="font-bold">
                        혼자서 일상생활을 하기 어렵다고 인정된 자
                      </span>
                      를 그 수급대상자로 하고 있습니다. 여기에는
                      <span className="font-bold">
                        65세 미만자의 노인성질병이 없는 일반적인 장애인은 제외
                      </span>
                      되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="mb-7 text-2xl font-medium text-black">
                노인장기요양보험 재원
              </div>
              <div className="text-xl leading-relaxed">
                <p>
                  노인장기요양보험 운영에 소요되는 재원은 가입자가 납부하는
                  장기요양보험료 및 국가 지방자치단체 부담금, 장기요양급여
                  이용자가 부담하는
                  <span className="font-bold">본인일부부담금</span>으로
                  조달됩니다.
                </p>
                <div className="pl-9 ">
                  <div className="my-10">
                    <span className="font-bold">
                      장기요양보험료 징수 및 산정(노인장기요양보호법 제 8조, 제
                      9조)
                    </span>
                    <p>
                      장기요양보험 가입자는 건강보험 가입자와 동일하며,{" "}
                      <span className="font-bold">장기요양보험료</span>는
                      건강보험료액에 장기요양보험료율
                      <span className="font-bold">(2015년 기준: 6.55%)</span>을
                      곱하여 산정합니다. 장기요양보험료율은 매년 재정상황 등을
                      고려하여 보건복지부장관소속 장기요양위원회의 심의를 거쳐
                      대통령령르로 정하고 있습니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      국가의 부담(노인장기요양보호법 제 58조)
                    </span>
                    <p>
                      <span className="font-bold"> - 국고 지원금</span>: 국가는
                      매년 예산의 범위 안에서 당해 연도 장기요양보험료{" "}
                      <span className="font-bold">
                        예상 수입액의 100분의 20
                      </span>
                      에 상당하는 금액을 공단에 지원합니다.
                      <br />
                      <span className="font-bold">
                        {" "}
                        - 국가 및 지방자치단체 부담{" "}
                      </span>{" "}
                      : 국가와 지방자치단체는 의료급여수급권자에 대한
                      장기요양급여비용, 의사소견서 발급비용, 방문간호 지시서
                      발급비용, 중 공단이 부담해야 할 비용 및{" "}
                      <span className="font-bold">
                        관리운영비의 전액을 부담
                      </span>
                      합니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      본인일부부담금(노인장기요양보호법 제 40조)
                    </span>
                    <p>
                      재가 및 시설 급여비용 중 수급자의
                      본인일부부담금(장기요양기관에 직접 납부)은 다음과
                      같습니다.
                      <br />
                      <span className="font-bold"> - 재가급여 </span> : 당해
                      장기요양급여비용의{" "}
                      <span className="font-bold">100분의 15</span>
                      <br />
                      <span className="font-bold"> - 시설급여</span> : 당해
                      장기요양급여비용의{" "}
                      <span className="font-bold">100분의 20</span>
                      <br />- 국민기초생활보장법에 따른 의료급여 수급자는{" "}
                      <span className="font-bold">
                        {" "}
                        본인일부부담금 전액 면제{" "}
                      </span>
                      <br />- 의료급여법의 수급권자(국민기초생활보장법에 따른
                      의료굽여 수급자 제외), 소득, 재산, 등이 보건복지부장관이
                      정하여 고시하는 일정 금액 이하인 자, 천재지변 등
                      보건복지부령으로 정하는 사유로 인하여 생계가 곤란한자 등은{" "}
                      <span className="font-bold">
                        {" "}
                        본인일부부담금 50%를 감경{" "}
                      </span>
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold"></span>
                    <p>
                      우리나라 장기요양보험제도는{" "}
                      <span className="font-bold">
                        65세이상의 노인 또는 65세미만
                      </span>
                      의 자로서 치매, 뇌혈관성 질환 등 노인성질병을 가진자중
                      6개월 이상
                      <span className="font-bold">
                        혼자서 일상생활을 하기 어렵다고 인정된 자
                      </span>
                      를 그 수급대상자로 하고 있습니다. 여기에는
                      <span className="font-bold">
                        65세 미만자의 노인성질병이 없는 일반적인 장애인은 제외
                      </span>
                      되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="mb-7 text-2xl font-medium text-black">
                기존 건강보험제도 및 노인복지서비스 체계와의 차이점
              </div>
              <div className="text-xl leading-relaxed">
                <div className="pl-9 ">
                  <div className="my-10">
                    <span className="font-bold">국민건강보험제도와의 차이</span>
                    <p>
                      국민건강보험은 질환의 진단, 입원 및 왜래 치료, 재활 등을
                      목적으로 주로{" "}
                      <span className="font-bold">병, 의원 및 약국</span>에서
                      제공하는 서비스를 급여 대상으로 하는 반면
                      노인장기요양보험은 고령이나 노인성질병 등으로 인하여
                      혼자의 힘으로 일상생활을 영위하기 어려운 대상자에게{" "}
                      <span className="font-bold">요양시설</span>이나{" "}
                      <span className="font-bold">재가기관</span>을 통해
                      신체활동 또는 가사 지원 등의 서비스를 제공하는 제도입니다.
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="font-bold">
                      기존 노인복지서비스 체계와의 차이
                    </span>
                    <p>
                      기존 <span className="font-bold">노인복지법</span> 상의
                      노인요양은 주로 국민기초생활보장수급자 등 특정{" "}
                      <span className="font-bold">저소득층</span>을 대상으로
                      국가나 지방자치단체가 공적부조방식으로 제공하는 서비스
                      위주로 운영되어 왔으나,{" "}
                      <span className="font-bold">노인장기요양보험법</span>상
                      서비스는 소득에 관계없이 심신 기능 상태를 고려한
                      요양필요도에 따라{" "}
                      <span className="font-bold">장기요양인정을 받은자</span>{" "}
                      에게 서비스가 제공되는 보다 보편적인 체계로 운영되고
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-7 text-2xl font-medium text-black">
            노인장기요양보험제도와 기존 노인복지서비스 체계 비교표
          </div>
          <div className="mt-10">
            <table className="table_form">
              <colgroup>
                <col width="20%;" />
                <col width="40%" />
                <col width="40%" />
              </colgroup>
              <thead>
                <tr
                  className="border-solid border-black  shadow-custom"
                  style={{ textAlign: "center" }}
                >
                  <th>구분</th>
                  <th>노인장기요양보험</th>
                  <th>기존 노인복지서비스 체계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>관련볍</td>
                  <td>
                    <p> - 노인장기요양보호법</p>
                  </td>
                  <td>
                    <p> - 노인복지법</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>서비스 대상</td>
                  <td>
                    <p>- 보편적 제도</p>
                    <p>
                      - 장기요양이 필요한 65세 이상 노인 및 치매등 노인성질병을
                      가진 65세 미만자
                    </p>
                  </td>
                  <td>
                    <p> - 특정대상 한정(선택적)</p>
                    <p>- 국민기초생활보장 수급자를 포함한 저소득층 위주</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>서비스 선택</td>
                  <td>
                    <p>- 수급자 및 부양가족의 선택에 의한 서비스 제공</p>
                  </td>
                  <td>
                    <p>- 지방자치단체장의 판단(공급자 위주)</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>재원</td>
                  <td>
                    <p>
                      - 장기요양보험료 + 국가 및 지방자치단체 부담 + 이용자 본인
                      부담
                    </p>
                  </td>
                  <td>
                    <p>- 정부 및 지방자치단체의 부담</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Care1;
