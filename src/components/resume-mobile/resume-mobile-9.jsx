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
import Search from "@/assets/images/search.svg";


const ResumeMobile9 = (props) => {

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
                    <div className="mo-resume-tit">
                        당신이 가지고 있는 스킬을 검색해서 카트에  넣어주세요
                    </div>
                </div>

                <div className="mobile-drop-wrap long-height">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                            전체
                            <img src={SelectArrow} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
                            <Dropdown.Item href="#/action-1" active>
                                전체
                                <img src={checkIcon} alt="" />
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="lang-search-box">
                        <div className="relative text-slate-500">
                            <input
                                type="text"
                                className="form-control pr-10"
                                placeholder="JAVA Script"
                            />
                            <button className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0">
                                <img src={Search} alt="" />
                            </button>
                        </div>
                        <div className="search-table">
                            <div className="search-table-item">
                                <div className="search-table-tit">언어</div>
                                <div className="search-table-cont">JAVA</div>
                            </div>
                            <div className="search-table-item select">
                                <div className="search-table-tit">Framework</div>
                                <div className="search-table-cont">JAVA Script</div>
                            </div>
                            <div className="search-table-item">
                                <div className="search-table-tit">언어</div>
                                <div className="search-table-cont">JAVA</div>
                            </div>
                            <div className="search-table-item">
                                <div className="search-table-tit">언어</div>
                                <div className="search-table-cont">JAVA</div>
                            </div>
                            <div className="search-table-item">
                                <div className="search-table-tit">언어</div>
                                <div className="search-table-cont">JAVA</div>
                            </div>
                        </div>
                    </div>
                    <div className="period-wrap flex items-center gap-2 w-full">
                        <Dropdown className="w-full">
                            <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                경력기간
                                <img src={SelectArrow} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
                                <Dropdown.Item href="#/action-1" active>
                                    경력기간
                                    <img src={checkIcon} alt="" />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="btn btn-skyblue2 w-24 h-full">등록</button>
                    </div>
                    <div className="skill-list-wrap">
                        <div className="skill-list-tit">
                            등록된 스킬 리스트
                        </div>
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
            </div>
        </>
    );
};
export default ResumeMobile9;
