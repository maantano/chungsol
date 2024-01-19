import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="top">
        <div
          className=" pl-32"
          style={{ borderTop: "1px solid #e4e4e4", paddingTop: 15 }}
        >
          <div
            className="inner clear"
            // style={{ borderBottom: "1px solid #e4e4e4" }}
          >
            <strong className="footerTitle">청솔재가노인복지센터</strong>
            <div className="left" style={{ paddingTop: 20 }}>
              <p className="clear" style={{ height: "25px" }}>
                <b style={{ paddingRight: 10 }}>대표번호</b>
                <span className="num" style={{ paddingRight: 20 }}>
                  02-816-5200
                </span>
                <b style={{ paddingRight: 10 }}>상담가능시간</b>
                <span style={{ paddingRight: 20 }}>
                  월요일 ~ 토요일 &nbsp;&nbsp;09 : 00 ~ 18 : 00 ( 이후 유선 상담
                  )
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 10 }}>
        <div className="pl-32">
          <div className="">
            <p>
              <span style={{ paddingRight: 20 }}>
                서울특별시 동작구 상도로 49길 11(상도동)
              </span>
              <em className="mbr">
                <span style={{ paddingRight: 20 }}>T. 010-8722-2262</span>
              </em>
              <em className="mbr">
                <span style={{ paddingRight: 20 }}>
                  사업자번호 : 251-80-01614
                </span>
                <span style={{ paddingRight: 20 }}>대표자 : 김현정</span>
              </em>
            </p>
            <span className="copy" style={{ paddingBottom: 20 }}>
              Copyright(c) 2024 Chungsol. All Rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
