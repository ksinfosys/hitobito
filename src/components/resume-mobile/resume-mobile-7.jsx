import { useState } from 'react';
import {
    Modal, ModalBody, ModalFooter
} from "@/base-components";
import Dropdown from 'react-bootstrap/Dropdown';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";
import AddBtn from "@/assets/images/add-btn.svg";
import InchargeAdd from "@/assets/images/incharge-add.svg";
import blueX from "@/assets/images/blue-x.svg";


const ResumeMobile7 = (props) => {

    const [selectPop, setselectPop]= useState(false);

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

                <div className="mobile-drop-wrap">
                    <div className="flex items-center gap-2">
                        <div className="drop-left-tit">
                            프로젝트명
                        </div>
                        <div className="drop-right-cont">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    프로젝트명 입력
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu mo-dropdown-menu">
                                    <Dropdown.Item href="#/action-1" active>
                                        프로젝트명 입력
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="drop-left-tit">
                            기간
                        </div>
                        <div className="drop-right-cont">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    기간
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu mo-dropdown-menu">
                                    <Dropdown.Item href="#/action-1" active>
                                        기간
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="drop-left-tit">
                            역할
                        </div>
                        <div className="drop-right-cont flex items-center gap-2">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    역할
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu mo-dropdown-menu">
                                    <Dropdown.Item href="#/action-1" active>
                                        역할
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <button className="btn btn-rounded btn-outline-primary btn-role-select">복수 선택</button>
                        </div>
                    </div>
                    <div className="incharge-select">
                        <div className="incharge-tit flex items-center gap-2" >담당 공정 <button onClick={() => { setselectPop(true); }} ><img src={InchargeAdd} alt="" /></button></div>
                        <div className="blue-btn-wrap flex items-center">
                            <div className="blue-btn no-after items-center flex">
                                <span>요건분석</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>견적작성</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>기본설계</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>상세설계</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>제조</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>단체 테스트</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn no-after">
                                <span>통합 테스트</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 담당공정 선택 */}
            <Modal
                show={selectPop}
                onHidden={() => {
                    setselectPop(true);
                }}
                className="select-modal mo-select-modal"
            >
                <ModalBody className="p-10 text-center">
                    <div className="select-modal-pop">
                        <div className="select-modal-tit">
                            담당공정 선택
                        </div>
                        <div className="select-input-wrap">
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">요건분석</label>
                            </div>
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">견적작성</label>
                            </div>
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">기본설계</label>
                            </div>
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">상세설계</label>
                            </div>
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">단체테스트</label>
                            </div>
                            <div className="form-check">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">통합테스트</label>
                            </div>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="mo-sel-btn-wrap flex space-between">
                        <button className="btn btn-primary" onClick={() => { setselectPop(true); }}>
                            확인
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
};
export default ResumeMobile7;
