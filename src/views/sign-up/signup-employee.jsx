
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


const SignupEmployee = () => {

    return (
        <>
            <div className="find-wrap flex flex-col items-center">
                <img src={BigLogo} alt="" className="big-logo" />
                <div className="find-subtit">
                    HITOBITO에 오신 것을 환영합니다.
                </div>
                <div className="signup-subtit">
                    고객이 아니시면 회원가입 해주세요.
                </div>
                <div className="find-btn ">
                    <div className="btn-wrap flex flex-col gap-4">
                        <button className="btn-line flex flex-center ">
                            <div className="button-wrap flex items-center gap-4">
                                <img src={LineIcon} alt="" />
                                라인 로그인
                            </div>
                        </button>
                        <button className="btn-google flex flex-center">
                            <div className="button-wrap flex items-center gap-4">
                                <img src={GoogleIcon} alt="" />
                                구글 로그인
                            </div>
                        </button>
                        <button className="btn-kakao flex flex-center">
                            <div className="button-wrap flex items-center gap-4">
                                <img src={KakaoIcon} alt="" />
                                카카오 로그인
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignupEmployee;
