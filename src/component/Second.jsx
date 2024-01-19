import React from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
import icon1 from "../asset/img/icon1.png";
import icon2 from "../asset/img/icon2.png";
import icon3 from "../asset/img/icon3.png";
import icon4 from "../asset/img/icon4.png";
import icon5 from "../asset/img/icon5.png";
import icon6 from "../asset/img/icon6.png";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div>
      <div className="section sc fp-section fp-table active fp-completely bg-gray-300">
        <div className="fp-tableCell flex flex-col justify-center items-center">
          <div className="p-12 mt-11 flex rounded-lg bg-gray-200 w-[90%] items-center justify-evenly shadow-custom">
            <Link to={"/introduce"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11 "
                    src={icon1}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">센터소개</div>
              </div>
            </Link>
            <Link to={"/detail"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11"
                    src={icon2}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">오시는 길</div>
              </div>
            </Link>
            <Link to={"/center"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11"
                    src={icon3}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">노인장기요양보험</div>
              </div>
            </Link>
            <Link to={"/center2"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11"
                    src={icon4}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">방문요양</div>
              </div>
            </Link>
            <Link to={"/process"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11"
                    src={icon5}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">신청절차</div>
              </div>
            </Link>
            <Link to={"/grade"}>
              <div className="clickIcon flex flex-col items-center p-3">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-opacity-30">
                  <img
                    className="w-11 h-11"
                    src={icon6}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                </div>
                <div className="mt-2 text-lg font-[600]">등급판정</div>
              </div>
            </Link>
          </div>

          <div className="flex justify-between gap-20 my-10">
            <div className="h-[350px] w-[350px] bg-indigo-200 items-center flex rounded-xl flex-col">
              <div className="text-xl font-semibold mt-3">검색서비스</div>
              <div className="mt-4 mb-1 w-[96%] h-full bg-white rounded-xl flex flex-col items-start">
                <ul className="p-4">
                  <li className="text-base my-2">
                    <a
                      href="/npbs/r/a/201/selectLtcoSrch.web?menuId=npe0000000650"
                      target="_blank"
                    >
                      - 장기요양기관 찾기
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/r/e/501/openMdcareMcpcEduAdmin.web?menuId=npe0000001100"
                      target="_blank"
                    >
                      - 요양보호사 교육기관 찾기
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/e/b/201/selectDodEduCpetMdcAdminList.web?menuId=npe0000000080"
                      target="_blank"
                    >
                      - 의사소견서 교육이수기관
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="http://www.nhis.or.kr/nhis/healthin/retrieveMdcAdminSknsClinic.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      - 병의원약국 찾기
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/cms/board/board/Board.jsp?searchType=ALL&amp;searchWord=&amp;list_start_date=&amp;list_end_date=&amp;pageSize=&amp;branch_id=&amp;branch_child_id=&amp;pageNum=1&amp;list_show_answer=N&amp;communityKey=B0020&amp;boardId=60024&amp;act=VIEW"
                      target="_blank"
                    >
                      - 인지훈련도구자료집PDF
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/r/e/558/openLtcoBusiGuid.web?menuId=npe0000001080"
                      target="_blank"
                    >
                      - 장기요양기관 업무안내
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[350px] w-[350px] bg-blue-200 items-center flex rounded-xl flex-col">
              <div className="text-xl font-semibold mt-3">기타 서비스</div>
              <div className="mt-4 mb-1 w-[96%] h-full bg-white rounded-xl flex flex-col items-start">
                <ul className="p-4">
                  <li className="text-base my-2">
                    <a
                      href="https://www.longtermcare.or.kr/npbs/e/d/770/openBenefitsGuid.web?menuId=npe0000002587&zoomSize="
                      target="_blank"
                      rel="noreferrer"
                    >
                      - 급여 이용 안내
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="https://www.longtermcare.or.kr/npbs/d/m/000/moveBoardView?menuId=npe0000000440&bKey=B0055"
                      target="_blank"
                      rel="noreferrer"
                    >
                      - 민원상담 사례(FAQ)
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="https://www.longtermcare.or.kr/npbs/r/a/601/npra601m01.web?menuId=npe0000002590"
                      target="_blank"
                      rel="noreferrer"
                    >
                      - 장기요양 지표
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="https://www.longtermcare.or.kr/npbs/r/k/501/selectWimItmPrdctGuid.web?menuId=npe0000000730&zoomSize="
                      target="_blank"
                      rel="noreferrer"
                    >
                      - 복지용구 품목별 제품안내
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[350px] w-[350px] bg-sky-200 items-center flex rounded-xl flex-col">
              <div className="text-xl font-semibold mt-3">개인서비스</div>
              <div className="mt-4 mb-1 w-[96%] h-full bg-white rounded-xl flex flex-col items-start">
                <ul className="p-4">
                  <li className="text-base my-2">
                    <a
                      href="/npbs/u/b/101/openLtcRcgtAplyPttnChoice.web?aplyTypeScr=appltit&amp;menuId=npe0000000500"
                      target="_blank"
                    >
                      - 장기요양 인정신청
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/u/e/201/openGjuRsltRissuePttn.web?menuId=npe0000002572"
                      target="_blank"
                    >
                      - 등급판정결과조회
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/g/h/101/openSelfBrdnHwangubAplyPttn.web?menuId=npe0000000520"
                      target="_blank"
                    >
                      - 본인부담환급금
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/u/g/101/openMitgObjtrAplyPttnChoice.web?menuId=npe0000002573"
                      target="_blank"
                    >
                      - 감경신청서 작성
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/m/c/304/selectDmrList.web?menuId=npe0000002570"
                      target="_blank"
                    >
                      - 심사청구
                    </a>
                  </li>
                  <li className="text-base my-2">
                    <a
                      href="/npbs/i/a/601/openWelToolPaymtCfrDocChoice.web"
                      target="_blank"
                    >
                      - 복지용구 추가급여신청
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
