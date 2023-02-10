import { useState } from 'react';


import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import setting from "@/assets/images/setting-icon.svg";
import blueX from "@/assets/images/blue-x.svg";

const ResumeMobileChange = (props) => {
    const [selectPop, setselectPop] = useState(false);

    return (
        <>
            <div className="mobile-resume-wrap change">
                <div className="mo-change-tit">
                    이력서변경
                </div>
                <div className="change-box">
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            국적
                        </div>
                        <div className="change-box-cont">
                            日本
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            연령
                        </div>
                        <div className="change-box-cont">
                            2002年 <span className="blue-text">20세</span>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            성별
                        </div>
                        <div className="change-box-cont">
                            男性
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            최종 학력
                        </div>
                        <div className="change-box-cont">
                            大学 (学士)
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            최종학교명
                        </div>
                        <div className="change-box-cont">
                            와세다대학
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="change-box-tit">
                            학과명
                        </div>
                        <div className="change-box-cont">
                            전산학
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                </div>
                <div className="change-box">
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                경력
                            </div>
                            <div className="change-box-cont">
                                5年以上
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                재직회사 업종
                            </div>
                            <div className="change-box-cont">
                                SI業界 / Sier（メーカ系）
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                현재 업종
                            </div>
                            <div className="change-box-cont">
                                ITコンサルタント / 情報化戦略
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                희망연봉
                            </div>
                            <div className="change-box-cont">
                                1,100万円以上
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                거주지
                            </div>
                            <div className="change-box-cont">
                                北海道
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="change-box-item flex items-center">
                        <div className="flex justify-start flex-col">
                            <div className="change-box-tit">
                                장래의 목표
                            </div>
                            <div className="change-box-cont">
                                ジェネラリスト / <br />
                                ジェネラルマネージャー
                            </div>
                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>

                </div>
                <div className="change-box">
                    <div className="change-box-item flex items-center">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <div className="change-box-tit">
                                    이메일
                                </div>
                                <div className="change-box-cont">
                                    alkjsdhf87@jp.kr
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="change-box-tit">
                                    연락처
                                </div>
                                <div className="change-box-cont">
                                    123456789
                                </div>
                            </div>

                        </div>
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>

                </div>
                <div className="mo-change-tit mt-10">
                    주요경력
                </div>
                <div className="career-box mt-2">
                    <div className="career-box-tit flex space-between items-center">
                        프로젝트명
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="career-box-subtit">
                        웹 디자이너<br />
                        2022. 07. 11
                    </div>
                    <div className="career-box-incharge">
                        <div className="career-box-incharge-tit">
                            담당 공정
                        </div>
                        <div className="career-box-incharge-cont">
                            <span>요건분석</span>
                            <span>견적작성</span>
                            <span>제조</span>
                            <span>상세설계</span>
                            <span>기본설계</span>
                        </div>
                    </div>
                </div>
                <div className="career-box mt-6">
                    <div className="career-box-tit flex space-between items-center">
                        프로젝트명
                        <div className="change-box-btn">
                            <button className="btn btn-change">변경</button>
                        </div>
                    </div>
                    <div className="career-box-subtit">
                        웹 디자이너<br />
                        2022. 07. 11
                    </div>
                    <div className="career-box-incharge">
                        <div className="career-box-incharge-tit">
                            담당 공정
                        </div>
                        <div className="career-box-incharge-cont">
                            <span>요건분석</span>
                            <span>견적작성</span>
                            <span>제조</span>
                            <span>상세설계</span>
                            <span>기본설계</span>
                        </div>
                    </div>
                </div>
                <div className="mo-change-tit mt-10 flex space-between items-center">
                    스킬
                    <div className="change-box-btn">
                        <button className="btn btn-change">변경</button>
                    </div>
                </div>
                <div className="skill-list-wrap">
                    <div className="skill-list-cont">
                        <div className="blue-btn-wrap flex gap-2 items-center">
                            <div className="blue-btn">
                                <span>Framework</span>
                                <span>JAVA</span>
                                <span>3년 이상</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn">
                                <span>언어</span>
                                <span>JAVA Script</span>
                                <span>3년 이상</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default ResumeMobileChange;
