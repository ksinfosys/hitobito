
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


const Signup = () => {

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
                <div className="find-btn flex flex-col">
                    <Link to="/signup-em" className="btn btn-primary h-48">
                        구직자 회원가입
                    </Link>
                    <Link to="/signup-business" className="btn btn-pending h-48 mt-5">
                        기업 회원가입
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Signup;
