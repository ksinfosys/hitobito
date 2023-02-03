import {Modal, ModalBody,} from "@/base-components";
import {useState} from "react";

function Nickname() {
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }
    const [nicknameChangeModal, nicknameChange] = useState(false);
return (
<>
    <div className="nickname">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                닉네임 변경
            </div>
            <div className="cont-wrap p-10">
                <div className="form p-5 bg-lb">
                    <div>
                        <label htmlFor="vertical-form-1" className="form-label mb-2">현재 닉네임</label>
                        <input id="vertical-form-1" type="text" className="form-control" value="오늘도 열정" disabled/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="vertical-form-2" className="form-label mb-2">변경 닉네임</label>
                        <input id="vertical-form-2" type="text" className="form-control" placeholder="변경할 닉네임을 입력해 주세요."/>
                    </div>
                    <button type="button" className="btn btn-primary w-full mt-10" onClick={() => {nicknameChange(true);}}>변경</button>
                </div>
            </div>
        </div>
    </div>
    {/* 닉네임 변경 확인 */}
    <Modal
        show={nicknameChangeModal}
        onHidden={() => {
            nicknameChange(false);
        }}
    >
        <ModalBody className="p-10 text-center">
            <div className="modal-tit">닉네임 변경</div>
            <div className="modal-subtit">
                닉네임 변경이 완료되었습니다.
            </div>
            <div className="flex flex-end gap-3">
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                        nicknameChange(false);
                        handleClick2(true);
                    }}
                >
                    확인
                </a>
            </div>
        </ModalBody>
    </Modal>
</>
);
}

export default Nickname;