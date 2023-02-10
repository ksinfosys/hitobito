import {
    TomSelect,
    Modal, ModalBody, ModalFooter

} from "@/base-components";
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';

import CameraPhoto from "@/assets/images/camera.png";
import AddBtn from "@/assets/images/add-btn.svg";
import MinusBtn from "@/assets/images/minus-icon.svg";
import Search from "@/assets/images/search.svg";
import blueX from "@/assets/images/blue-x.svg";
import attachIcon from "@/assets/images/attach-icon.svg";
import blacksmallX from "@/assets/images/black-small-x.svg";
import Download from "@/assets/images/download-icon.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";
import ResumeMobileChange from "../../components/resume-mobile/resume-mobile-change";

const ResumeChange = () => {
    const [selectPop, setselectPop] = useState(false);

    return (
        <>
            <div className="resume-mng">
                <div className="box-type-default hidden lg:block">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        이력서 변경
                    </div>
                    <div className="resume-regist-cont">
                        <img src={CameraPhoto} alt="" />
                        <div className="camera-subtit">
                            * 최대 5장 JPG, PNG,GIF 형식으로 등록 가능합니다.
                        </div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">국적 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        日本
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                        <Dropdown.Item href="#/action-1" active>
                                            日本
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="box-item flex flex-col">
                                <div className="form-tit">학력 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        최종학력
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                        <Dropdown.Item href="#/action-1" active>
                                            최종학력
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="form-tit">최종학교명 <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="최종학교명 입력" />
                            </div>
                        </div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">출생년도 <span>*</span></div>
                                <div className="flex items-center gap-2">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button dropdown-3 flex items-center space-between">
                                            2002年
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type3">
                                            <Dropdown.Item href="#/action-1" active>
                                                2002年
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="btn btn-sm btn-ouline-secondary w-40 btn-age">20세</div>
                                </div>
                            </div>
                            <div className="box-item flex flex-col">
                                <div className="form-tit">전공명  <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="전공명 입력" />
                            </div>
                        </div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">거주지 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        東京都
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                        <Dropdown.Item href="#/action-1" active>
                                            東京都
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="box-item flex flex-col">
                                <div className="form-tit">희망연봉  <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        희망연봉
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                        <Dropdown.Item href="#/action-1" active>
                                            희망연봉
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">이메일 <span>*</span></div>
                                <div className="flex items-center gap-2">
                                    <input id="regular-form-1" type="text" className="form-control" placeholder="이메일 입력" />
                                    <div className="form-check form-switch flex gap-2">
                                        <div className="switch-tit">공개</div>
                                        <input
                                            id="product-status-active"
                                            className="form-check-input toggle-input"
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-item flex flex-col">
                                <div className="form-tit">연락처  <span>*</span></div>
                                <div className="flex items-center gap-2">
                                    <input id="regular-form-1" type="text" className="form-control" placeholder="-없이 숫자만 입력해주세요." />
                                    <div className="form-check form-switch flex gap-2">
                                        <div className="switch-tit">비공개</div>
                                        <input
                                            id="product-status-active"
                                            className="form-check-input toggle-input"
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">장래의 목표 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        장래의 목표
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type4">
                                        <Dropdown.Item href="#/action-1" active>
                                            장래의 목표
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">경력 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        경력
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type2">
                                        <Dropdown.Item href="#/action-1" active>
                                            경력
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">현재의 직종 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        현재의 직종
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type2">
                                        <Dropdown.Item href="#/action-1" active>
                                            현재의 직종
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">재직회사의 업종 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        재직회사의 업종
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type2">
                                        <Dropdown.Item href="#/action-1" active>
                                            재직회사의 업종
                                            <img src={checkIcon} alt="" />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex-box2-tit flex space-between">
                            <div className="box2-tit">주요경력</div>
                            <button className="add-btn flex items-center">
                                <img src={AddBtn} alt="" />
                                주요경력 추가
                            </button>
                        </div>
                        <div className="flex-box2-cont form-flex-box">
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">프로젝트명 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        프로젝트명 입력
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type4">
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
                            <div className="form-flex-box flex space-between items-start">
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">역할 <span>*</span></div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            역할
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
                                            <Dropdown.Item href="#/action-1" active>
                                                역할
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">기간  <span>*</span></div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            기간
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
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

                        </div>
                        <div className="btn-flex-box flex items-start">
                            <button className="btn btn-primary" onClick={() => { setselectPop(true); }} >담당공정</button>
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
                        <div className="flex-box2-tit flex space-between">
                            <div className="box2-tit">주요경력</div>
                            <button className="minus-btn flex items-center">
                                <img src={MinusBtn} alt="" />
                                주요경력 빼기
                            </button>
                        </div>
                        <div className="flex-box2-cont form-flex-box">
                            <div className="box-item2 flex flex-col">
                                <div className="form-tit">프로젝트명 <span>*</span></div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                        프로젝트명 입력
                                        <img src={SelectArrow} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type4">
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
                            <div className="form-flex-box flex space-between items-start">
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">역할 <span>*</span></div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            역할
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
                                            <Dropdown.Item href="#/action-1" active>
                                                역할
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">기간  <span>*</span></div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            기간
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type5">
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
                        </div>
                        <div className="btn-flex-box flex items-start">
                            <button className="btn btn-primary" onClick={() => { setselectPop(true); }} >담당공정</button>
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
                        <div className="flex-box2-tit flex space-between mt-16">
                            <div className="box2-tit">나의스킬 <span> *</span></div>
                        </div>
                        <div className="flex-box2-cont form-flex-box">
                            <div className="form-flex-box flex space-between items-start">
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">스킬검색<span className="blue">자유롭게 본인을 소개해주세요.</span></div>
                                    <div className="relative text-slate-500">
                                        <input
                                            type="text"
                                            className="form-control pr-10"
                                            placeholder="검색"
                                        />
                                        <button className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0">
                                            <img src={Search} alt="" />
                                        </button>
                                    </div>

                                </div>
                                <div className="box-item flex flex-col">
                                    <div className="form-tit">경력기간</div>
                                    <div className="flex items-center gap-2">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button dropdown-4 flex items-center space-between">
                                                경력기간
                                                <img src={SelectArrow} alt="" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type2">
                                                <Dropdown.Item href="#/action-1" active>
                                                    경력기간
                                                    <img src={checkIcon} alt="" />
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div className="btn btn-sm btn-register w-40 btn-age">등록</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item>JAVA</ListGroup.Item>
                                    <ListGroup.Item active>JAVA Script</ListGroup.Item>
                                    <ListGroup.Item>항목</ListGroup.Item>
                                    <ListGroup.Item>항목</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <div className="blue-tit">
                            등록된 스킬 리스트
                        </div>
                        <div className="blue-btn-wrap flex gap-2 items-center">
                            <div className="blue-btn">
                                <span>JAVA</span>
                                <span>3년 이상</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                            <div className="blue-btn">
                                <span>JAVA Script</span>
                                <span>3년 이상</span>
                                <button className="blue-x-btn">
                                    <img src={blueX} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="attach-wrap flex">
                            <div className="attach-tit-wrap flex items-center">
                                <div className="attach-tit">
                                    파일첨부
                                </div>
                                <button className="attach-icon">
                                    <img src={attachIcon} alt="" />
                                </button>
                            </div>
                            <div className="flex flex-col attach-cont-wrap">
                                <div className="attach-cont-item flex items-center space-between">
                                    <div className="attach-cont-tit">
                                        파일 명
                                    </div>
                                    <button className="attach-cont-btn">
                                        <img src={blacksmallX} alt="" />
                                    </button>
                                </div>
                                <div className="attach-cont-item flex items-center space-between">
                                    <div className="attach-cont-tit">
                                        파일 명
                                    </div>
                                    <button className="attach-cont-btn">
                                        <img src={blacksmallX} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="download-btn flex">
                            <button className="btn btn-outline-primary flex items-center">
                                샘플 양식 다운로드
                                <img src={Download} alt="" />
                            </button>
                            <button className="btn btn-primary flex items-center">
                                등록
                            </button>
                        </div>
                        <div className="blue-tit">
                            작성이 어려우세요? 샘플 양식을 다운로드 받아보세요.
                        </div>
                    </div>
                </div>
                <div className="mo-resume-mng">
                    <ResumeMobileChange />
                </div>
            </div>
            {/* 담당공정 선택 */}
            <Modal
                show={selectPop}
                onHidden={() => {
                    setselectPop(false);
                }}
                className="select-modal"
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
                    <div className="sel-btn-wrap flex space-between">
                        <button className="btn btn-outline-secondary">
                            전체선택
                        </button>
                        <button className="btn btn-primary" onClick={() => { setselectPop(false); }}>
                            확인
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
};
export default ResumeChange;
