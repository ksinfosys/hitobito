import { Modal, ModalBody, } from "@/base-components";
import { useState } from "react";
import { Link } from 'react-router-dom';

function SuspensionBusiness() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }
    const [suspensionRequestModal, setsuspensionRequestModal] = useState(false);

    return (
        <>
            <div id="suspension" className={isActive?"membership display-none":"membership"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        이용정지
                    </div>
                    <div className="pt-10 text-center cont-wrap flex flex-col items-center justify-center">
                        <p className="font-bold">이용을 정지하는 기간동안 기업으로부터 면접제의<br />및 메시지 수신이 불가능하게 됩니다.</p>
                        <button type="button" className="btn btn-business h-48 w-80 mt-10" onClick={() => { setsuspensionRequestModal(true); }}>확인</button>
                    </div>
                </div>
            </div>
            <div id="suspension" className={isActive?"membership":"membership display-none"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        이용정지
                    </div>
                    <div className="pt-10 text-center cont-wrap flex flex-col items-center justify-center">
                        <p className="font-bold"><span className="text-pending">2023년 1월 3일</span>부터 서비스 이용정지 중입니다.</p>
                    </div>
                </div>
            </div>
            {/* 이용정지 확인 */}
            <Modal
                show={suspensionRequestModal}
                onHidden={() => {
                    setsuspensionRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">이용 정지를 진행합니다.</div>
                    <div className="modal-subtit">
                        이용을 정지하는 기간동안 구직자의 면접 의뢰 회신 및 메시지 <br />
                        수신이 불가능하게 됩니다.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-business"
                            onClick={() => {
                                setsuspensionRequestModal(false);
                                handleClick(true);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-cancle-type1"
                            onClick={() => {
                                setsuspensionRequestModal(!suspensionRequestModal);
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

export default SuspensionBusiness;