
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

import Blank from "@/assets/images/blank-img.png";
import Blank2 from "@/assets/images/blank2.png";
import LineIcon from "@/assets/images/line-icon.svg";
import GoogleIcon from "@/assets/images/google-icon.svg";
import KakaoIcon from "@/assets/images/kakao-icon.svg";


const Login = () => {
    const [pwdError, setpwdError] = useState(false);

    return (
        <>
            <div className="login-wrap flex">
                <div className="login-left">
                    <img src={Blank} alt="" />
                    <img src={Blank} alt="" />
                    <img src={Blank} alt="" />
                </div>
                <div className="login-right">
                    <TabGroup>
                        <TabList className="nav-link-tabs">
                            <Tab className="w-full py-2" tag="button">구직자 로그인</Tab>
                            <Tab className="w-full py-2" tag="button">기업 로그인</Tab>
                        </TabList>
                        <TabPanels className="mt-5">
                            <TabPanel className="leading-relaxed">
                                <div className="login-tab-wrap">
                                    <div className="login-tab-tit">
                                        HITOBITO에 오신 것을 환영합니다.
                                    </div>
                                    <div className="login-tab-subtit">
                                        서비스를 이용하시려면 로그인 해주세요.
                                    </div>
                                    <div className="btn-wrap">
                                        <button className="btn-line flex flex-center">
                                            <div className="button-wrap flex items-center">
                                                <img src={LineIcon} alt="" />
                                                라인 로그인
                                            </div>
                                        </button>
                                        <button className="btn-google flex flex-center">
                                            <div className="button-wrap flex items-center">
                                                <img src={GoogleIcon} alt="" />
                                                구글 로그인
                                            </div>
                                        </button>
                                        <button className="btn-kakao flex flex-center">
                                            <div className="button-wrap flex items-center">
                                                <img src={KakaoIcon} alt="" />
                                                카카오 로그인
                                            </div>
                                        </button>
                                    </div>
                                    <div className="signup-wrap flex items-center space-between">
                                        <div className="signup-tit">
                                            HITOBITO 고객이 <br />
                                            아니신가요?
                                        </div>
                                        <div className="signup-btn">
                                            <button className="btn btn-primary w-40">
                                                회원가입
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ad-wrap">
                                        <img src={Blank2} alt="" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="leading-relaxed">
                                <div className="login-tab-wrap">
                                    <div className="login-tab-tit">
                                        HITOBITO에 오신 것을 환영합니다.
                                    </div>
                                    <div className="login-tab-subtit">
                                        서비스를 이용하시려면 로그인 해주세요.
                                    </div>
                                    <div className="id-wrap flex flex-col">
                                        <input id="regular-form-1" type="text" className="id-input h-48 form-control" placeholder="아이디" />
                                        <input id="regular-form-1" type="text" className="id-input h-48 form-control" placeholder="비밀번호" />
                                        <button className="btn-black flex flex-center" onClick={() => { setpwdError(true); }}>
                                            로그인
                                        </button>
                                    </div>
                                    <div className="find-wrap-login">
                                        <div className="form-check w-24 save-id">
                                            <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                            <label className="form-check-label" htmlFor="vertical-form-3">아이디 저장</label>
                                        </div>
                                        <div className="find-id-wrap">
                                            <Link to="/find-id">아이디 찾기</Link>
                                            <Link to="/find-pwd">비밀번호 찾기</Link>
                                        </div>
                                    </div>
                                    <div className="signup-wrap flex items-center space-between">
                                        <div className="signup-tit">
                                            HITOBITO 고객이 <br />
                                            아니신가요?
                                        </div>
                                        <div className="signup-btn">
                                            <button className="btn btn-primary w-40">
                                                회원가입
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ad-wrap">
                                        <img src={Blank2} alt="" />
                                    </div>
                                </div>
                                {/* 비밀번호가 맞지 않습니다.*/}
                                <Modal
                                    show={pwdError}
                                    onHidden={() => {
                                        setpwdError(false);
                                    }}
                                >
                                    <ModalBody className="p-10 text-center">
                                        <div className="modal-tit">비밀번호가 맞지 않습니다.</div>
                                        <div className="modal-subtit">
                                            등록하신 아이디와 비밀번호가 일치하지 않습니다. <br />
                                            다시 확인해주세요.
                                        </div>
                                        <div className="flex flex-end gap-3">
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    setpwdError(false);
                                                }}
                                            >
                                                확인
                                            </a>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>


        </>
    );
};

export default Login;
