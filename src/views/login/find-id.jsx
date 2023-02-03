
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


const FindId = () => {
    const [findId, setfindId] = useState(false);

    return (
        <>
            <div className="find-wrap flex flex-col items-center">
                <img src={BigLogo} alt="" className="big-logo" />
                <div className="find-tit">
                    아이디 찾기
                </div>
                <div className="find-subtit">
                    가입시 등록한 이메일 주소를 입력해 주세요.
                </div>
                <div className="find-email">
                    <input id="regular-form-1" type="text" className="h-48 form-control" placeholder="이메일 입력" />
                </div>
                <div className="find-btn">
                    <button className="btn btn-pending h-48" onClick={() => { setfindId(true); }}>
                        아이디 찾기
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
                    <div className="modal-tit">이메일을 확인해 주세요.</div>
                    <div className="modal-subtit">
                        입력하신 이메일 주소로 가입한 아이디정보를 발송하였습니다. <br />이메일을 확인해 주세요.
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

export default FindId;
