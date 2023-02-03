
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


const PwdChange = () => {
    const [findId, setfindId] = useState(false);

    return (
        <>
            <div className="find-wrap flex flex-col items-center">
                <img src={BigLogo} alt="" className="big-logo" />
                <div className="find-tit">
                    임시 아이디 비밀번호 변경하기
                </div>
                <div className="find-subtit">
                    임시 아디디 비밀번호로 로그인하셨습니다. <br />
                    새로운 아이디 비밀번호로 변경하여 주시기 바랍니다.
                </div>
                <div className="pwd-change-wrap">
                    <input id="regular-form-1" type="text" className="h-48 form-control" placeholder="아이디" />
                    <div className="input-det">
                        입력  5~20자의 영문 대소문자,숫자 포함
                    </div>
                    <input id="regular-form-1" type="password" className="h-48 form-control" placeholder="비밀번호_8~16자 영문, 숫자, 특수문자 3가지 포함" />
                    <div className="input-det">
                        8~16자 영문, 숫자, 특수문자 3가지 포함
                    </div>
                    <input id="regular-form-1" type="password" className="h-48 form-control" placeholder="비밀번호 확인" />

                </div>
                <div className="find-btn">
                    <button className="btn btn-pending h-48" onClick={() => { setfindId(true); }}>
                        변경하기
                    </button>
                </div>
            </div>
            {/* 이메일을 확인해 주세요..*/}
            <Modal
                show={findId}
                onHidden={() => {
                    setfindId(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">비밀번호 형식이 맞지 않습니다.</div>
                    <div className="modal-subtit">
                        8~16자 영문, 숫자, 특수문자 3가지를 조합하여  비밀번호를  <br />
                        설정하여 주세요.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-pending"
                            onClick={() => {
                                setfindId(false);
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

export default PwdChange;
