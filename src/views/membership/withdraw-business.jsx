import { Modal, ModalBody, } from "@/base-components";
import { useState } from "react";

function WithdrawBusiness() {
    const [widthdrawConfirm, setwidthdrawConfirm] = useState(false);

    return (
        <>
            <div id="withdraw" className="membership">
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        회원탈퇴
                    </div>
                    <div className="cont-wrap pt-10 text-center flex flex-col items-center justify-center">
                        <p className="font-bold">탈퇴 시 포인트 잔고가 남아있는 경우 환불이 불가능합니다. <br />
                            포인트를 전부 사용하고 탈퇴하시기를 추천 드립니다.</p>
                        <button type="button" className="btn btn-pending w-80 mt-10 h-48" onClick={() => {setwidthdrawConfirm(true);}}>확인</button>
                    </div>
                </div>
            </div>
            {/* 회원탈퇴 확인 */}
            <Modal
                show={widthdrawConfirm}
                onHidden={() => {
                    setwidthdrawConfirm(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">회원탈퇴를 진행합니다.</div>
                    <div className="modal-subtit">
                        탈퇴 시 보유중인 포인트는 소멸됩니다.<br />
                        진행 하시겠습니까?
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-pending"
                            onClick={() => {
                                setwidthdrawConfirm(false);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setwidthdrawConfirm(!widthdrawConfirm);
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

export default WithdrawBusiness;