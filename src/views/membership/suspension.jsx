import { Modal, ModalBody, } from "@/base-components";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Suspension = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }
    const [suspensionRequestModal, suspensionRequest] = useState(false);
    return (
        <>
            <div id="suspension" className={isActive ? "membership display-none" : "membership"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-lg font-bold lg:text-sm lg:font-normal">
                        이용정지
                    </div>
                    <div className="py-10 px-5 text-center cont-wrap flex flex-col items-center justify-center">
                        <p className="font-bold">이용을 정지하는 기간동안 기업으로부터 면접제의 <br className="hidden sm:block"/>및 메시지 수신이 불가능하게 됩니다.</p>
                        <button type="button" className="btn btn-primary w-80 mt-10" onClick={() => { suspensionRequest(true); }}>이용정지</button>
                    </div>
                </div>
            </div>
            <div id="suspension" className={isActive?"membership":"membership display-none"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-lg font-bold lg:text-sm lg:font-normal">
                        이용정지
                    </div>
                    <div className="py-10 px-5 text-center cont-wrap flex flex-col items-center justify-center">
                        <p className="font-bold"><span className="text-primary">2023년 1월 3일</span>부터 서비스 이용정지 중입니다.</p>
                        <button type="button" className="btn btn-primary w-80 mt-10" onClick={() => { suspensionResume(true); }}>이용재개</button>
                    </div>
                </div>
            </div>

            {/* 이용정지 확인 */}
            <Modal
                show={suspensionRequestModal}
                onHidden={() => {
                    suspensionRequest(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">정말 이용 정지하시겠습니까?</div>
                    <div className="modal-subtit">
                        이용 정지중엔 보유중인 포인트이용이 불가능합니다.<br />
                        진행 하시겠습니까?
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                suspensionRequest(false);
                                handleClick(true);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                suspensionRequest(!suspensionRequestModal);
                            }}
                        >
                            취소
                        </a>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Suspension;