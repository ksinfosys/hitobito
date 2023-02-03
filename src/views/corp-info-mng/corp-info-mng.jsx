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


const CorpInfoMng = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [emailPop, setemailPop] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }
    const handleClick2 = () => {
        setIsActive2(current => !current);
    }
    return (
        <>
            <div className="resume-mng">
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        기업 정보 수정
                    </div>
                    <div className="resume-regist-cont">
                        <div className="form-flex-box flex space-between items-start">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">기업명 <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="기업명 입력" />
                                <div className="form-tit">기업명 (카타카나) <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="기업명 입력" />
                                <div className="flex flex-col gap-2 mt-3">
                                    <Dropdown className="">
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            업종
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                            <Dropdown.Item href="#/action-1" active>
                                                업종
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <Dropdown className="">
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            본사 소재지
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                            <Dropdown.Item href="#/action-1" active>
                                                본사 소재지
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item hfref="#/action-2">국적01</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="form-tit">담당자 이메일 <span>*</span></div>
                                    <div className="flex items-center gap-2">
                                        <input id="regular-form-1" type="text" className="form-control" placeholder="이메일 입력" />
                                        <div className="form-check form-switch flex gap-2">
                                            <button className="btn btn-sm btn-business w-28 font-16" onClick={() => { setemailPop(true); }} >인증코드 발급</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="regular-form-1" type="text" className="form-control" placeholder="인증코드 확인" />
                                        <div className="form-check form-switch flex gap-2">
                                            <button className="btn btn-sm btn-business-white w-28 font-16">확인</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="form-tit">담당자 연락처 <span>*</span></div>
                                    <input id="regular-form-1" type="text" className="form-control" placeholder="-없이 숫자만 입력해주세요. (예: 12345678)" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="form-tit">회사 홈페이지 <span>*</span></div>
                                    <input id="regular-form-1" type="text" className="form-control" placeholder="회사 홈페이지 입력" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="form-tit">지불방법 <span>*</span></div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                            지불방법
                                            <img src={SelectArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                            <Dropdown.Item href="#/action-1" active>
                                                지불방법
                                                <img src={checkIcon} alt="" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="box-item flex flex-col">
                                        <div className="form-tit">사원수 <span>*</span></div>
                                        <input id="regular-form-1" type="text" className="form-control" placeholder="사원수 입력" />
                                    </div>
                                    <div className="box-item flex flex-col">
                                        <div className="form-tit">매출 <span>*</span></div>
                                        <input id="regular-form-1" type="text" className="form-control" placeholder="매출" />
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="flex flex-col">
                                    <div className="form-tit">회사 구인공고 <span>*</span></div>
                                    <textarea
                                        className="form-control mt-2 w-full resize-none"
                                        rows="1"
                                        placeholder="구인공고 입력"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <div className="form-tit">회사 이미지 등록 <span>*</span></div>
                                    <div className="camera-subtit2">
                                        * 최대 5장 JPG, PNG,GIF 형식으로 등록 가능합니다.
                                    </div>
                                    <img src={CameraPhoto} alt="" className="" />
                                </div>
                                <div className="flex flex-col mt-28">
                                    <div className="form-tit">회사 로고 등록<span>*</span></div>
                                    <div className="camera-subtit2">
                                        * JPG, PNG,GIF 형식으로 등록 가능합니다.
                                    </div>
                                    <img src={CameraPhoto} alt="" className="" />
                                </div>

                            </div>

                        </div>
                        <div className="flex flex-center mt-5">
                            <button className="btn btn-business w-80 h-48"> 등록</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* 담당공정 선택 */}
            <Modal
                show={emailPop}
                onHidden={() => {
                    setemailPop(false);
                }}
                className="email-modal"
            >
                <ModalBody className="p-10 text-center">
                    <div className="email-modal-pop">
                        <div className="email-modal-tit">
                            변경 예정 담당자 이메일
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input id="regular-form-1" type="text" className="form-control h-48" placeholder="이메일 입력" />
                                <div className="form-check form-switch flex gap-2">
                                    <button className={isActive?"btn btn-sm btn-secondary w-28 font-16":"btn btn-sm btn-business w-28 font-16"} onClick={() => { handleClick() }} >인증코드 발급</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="regular-form-1" type="text" className="form-control h-48" placeholder="인증코드 확인" />
                                <div className="form-check form-switch flex gap-2">
                                    <button className="btn btn-sm btn-business-white w-28 font-16" onClick={() => { handleClick2() }}>확인</button>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrap flex flex-end">
                            <button className={isActive2?"btn btn-secondary":"btn btn-pending"} onClick={() => { setselectPop(false); }}>
                                인증완료
                            </button>
                            <button className="btn btn-outline-secondary" onClick={() => { setselectPop(false); }}>
                                취소
                            </button>
                        </div>
                    </div>
                </ModalBody>

            </Modal>
        </>
    );
};
export default CorpInfoMng;
