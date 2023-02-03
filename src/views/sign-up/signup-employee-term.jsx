
import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Modal, ModalBody,
} from "@/base-components";
import { Link } from 'react-router-dom';
import { useState } from "react";

import BigLogo from "@/assets/images/big-logo.svg";
import Blank from "@/assets/images/blank-img.png";
import Blank2 from "@/assets/images/blank2.png";
import LineIcon from "@/assets/images/line-icon.svg";
import GoogleIcon from "@/assets/images/google-icon.svg";
import KakaoIcon from "@/assets/images/kakao-icon.svg";


const SignupEmployeeTerm = () => {
    const [signupModal, setsignupModal] = useState(false);

    return (
        <>
            <div className="find-wrap flex flex-col items-center">
                <div className="term-tit">
                    구직자 회원가입
                </div>
                <div className="term-subtit">
                    이용규약
                </div>
                <div className="term-wrap">
                    <div className="term-div">
                        HITOBITO 관리자에서 등록한 내용 출력 <br />
                        내용 <br />
                        내용 <br />
                        내용
                    </div>
                </div>
                <div className="term-check">
                    <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="vertical-form-3">상기 이용규약에 동의합니다.</label>
                </div>
                <div className="term-subtit">
                    개인정보보호정책
                </div>
                <div className="term-wrap">
                    <div className="term-div">
                        HITOBITO 관리자에서 등록한 내용 출력 <br />
                        내용 <br />
                        내용 <br />
                        내용
                    </div>
                </div>
                <div className="term-check">
                    <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="vertical-form-3">상기 개인정보보호정책에 동의합니다.</label>
                </div>
                <div className="find-btn flex flex-col gap-2">
                    <button className="btn btn-primary h-48" onClick={() => { setsignupModal(true); }}>
                        가입하기
                    </button>
                    <button className="btn btn-outline-primary h-48">
                        취소
                    </button>
                </div>
            </div>
            {/* 회원가입 팝업*/}
            <Modal
                show={signupModal}
                onHidden={() => {
                    setsignupModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">HITOBITO에 오신것을 환영합니다!</div>
                    <div className="modal-subtit">
                        회원가입을 완료하였습니다. 확인을 누르시면 HITOBITO <br />
                        안내가이드가 표시됩니다.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setsignupModal(false);
                            }}
                        >
                            확인
                        </a>
                    </div>
                </ModalBody>
            </Modal>

        </>
    );
};

export default SignupEmployeeTerm;
