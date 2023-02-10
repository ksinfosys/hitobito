import { useState } from 'react';
import {
    Modal, ModalBody, ModalFooter
} from "@/base-components";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";
import AddBtn from "@/assets/images/add-btn.svg";
import InchargeAdd from "@/assets/images/incharge-add.svg";
import blueX from "@/assets/images/blue-x.svg";
import setting from "@/assets/images/setting-icon.svg";


const ResumeMobile8 = (props) => {

    const [selectPop, setselectPop] = useState(false);

    return (
        <>
            <div className="mobile-resume-wrap">
                <div className="flex items-center gap-3 space-between">
                    <div className="prog-wrap flex flex-col items-end">
                        <div className="prog-bar-tit flex w-full space-between">
                            <div className="prog-percent">진행률</div>
                            <div className="percent"><span>7</span>%</div>
                        </div>
                        <div className="progress">
                            <div className={props.progress} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-skyblue w-36 flex gap-1 items-center">
                        <img src={Download} alt="" />
                        임시저장
                    </button>
                </div>
                <div className="">
                    <div className="mo-resume-tit flex space-between items-center">
                        주요경력을 입력해주세요.
                        <button className="add-career-btn flex items-center">
                            <img src={AddBtn} alt="" />
                            주요경력 추가
                        </button>
                    </div>
                </div>

                <div className="mobile-drop-wrap long-height">
                    <div className="career-box">
                        <div className="career-box-tit flex space-between items-center">
                            프로젝트명
                            <div className="setting-wrap">
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Header as="h3"></Popover.Header>
                                                <Popover.Body>
                                                    <div className="setting-select-mo">
                                                        <div className="setting-select-item">수정</div>
                                                        <div className="setting-select-item">삭제</div>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button><img src={setting} alt="" /></Button>
                                    </OverlayTrigger>
                                ))}
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
                    <div className="career-box">
                        <div className="career-box-tit flex space-between items-center">
                            프로젝트명
                            <div className="setting-wrap">
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Header as="h3"></Popover.Header>
                                                <Popover.Body>
                                                    <div className="setting-select-mo">
                                                        <div className="setting-select-item">수정</div>
                                                        <div className="setting-select-item">삭제</div>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button><img src={setting} alt="" /></Button>
                                    </OverlayTrigger>
                                ))}
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
                    <div className="career-box">
                        <div className="career-box-tit flex space-between items-center">
                            프로젝트명
                            <div className="setting-wrap">
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Header as="h3"></Popover.Header>
                                                <Popover.Body>
                                                    <div className="setting-select-mo">
                                                        <div className="setting-select-item">수정</div>
                                                        <div className="setting-select-item">삭제</div>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button><img src={setting} alt="" /></Button>
                                    </OverlayTrigger>
                                ))}
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
                </div>
            </div>
        </>
    );
};
export default ResumeMobile8;
