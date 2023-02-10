import {Modal, ModalBody,} from "@/base-components";
import {useState} from "react";

function Withdraw() {
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }
    const [withdrawConfirmModal, withdrawConfirm] = useState(false);
return (
<>
    <div id="withdraw" className="membership">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-lg font-bold lg:text-sm lg:font-normal">
                회원탈퇴
            </div>
            <div className="cont-wrap py-10 px-5 text-center flex flex-col items-center justify-center">
                <p className="font-bold">회원탈퇴를 진행할 경우 HITOBITO 서비스를<br className="hidden sm:block"/>이용할 수 없게 됩니다.</p>
                <button type="button" className="btn btn-primary w-80 mt-10" onClick={() => {withdrawConfirm(true);}}>확인</button>
            </div>
        </div>
    </div>
    {/* 회원탈퇴 확인 */}
    <Modal
        show={withdrawConfirmModal}
        onHidden={() => {
            withdrawConfirm(false);
        }}
    >
        <ModalBody className="p-10 text-center">
            <div className="modal-tit">회원탈퇴를 진행합니다.</div>
            <div className="modal-subtit">
                탈퇴 시 보유중인 포인트는 소멸됩니다.<br/>
                진행 하시겠습니까?
            </div>
            <div className="flex flex-end gap-3">
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                        withdrawConfirm(false);
                        handleClick2(true);
                    }}
                >
                    확인
                </a>
                <a
                    href="#"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        withdrawConfirm(!withdrawConfirmModal);
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

export default Withdraw;