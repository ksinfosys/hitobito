import {Lucide, Modal, ModalBody,} from "@/base-components";
import {useState} from "react";
import { Link } from 'react-router-dom';

function MessageSentBusiness() {
    const [messageSaveModal, setMessageSave] = useState(false);
    const [messageDeleteModal, setMessageDelete] = useState(false);
return (
<>
    <div id="business" className="message-sent-business">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                메시지함
            </div>
            <div className="p-5">
                <div className="flex border-b-2">
                    <button type="button" className="p-2 tab-btn">
                        <Link to="/message-receptio-business">수신 메시지함</Link>
                    </button>
                    <button type="button" className="p-2 tab-btn tab-active">
                        <Link to="/message-sent-business">발신 메시지함</Link>
                    </button>
                    <button type="button" className="p-2 tab-btn">
                        <Link to="/message-box-business">메시지 보관함</Link>
                    </button>
                </div>

                <div className="mt-5">
                    <div className="flex space-between">
                        <div className="flex items-center gap-2">
                            <select className="form-select w-32">
                                <option>발신자</option>
                                <option>브랜드1</option>
                                <option>브랜드2</option>
                            </select>
                            <div class="search block">
                                <input className="form-input form-control cu-search w-72" type="text"
                                    placeholder="검색어를 입력하세요" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#E4E7EA" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide search__icon">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65">
                                    </line>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-pending w-24 mr-2" onClick={() => {messageReply(true);}}>답장</button>
                            <button className="btn btn-sm btn-outline-pending w-24 mr-2" onClick={() => {setMessageSave(true);}}>보관</button>
                            <button className="btn btn-sm btn-outline-secondary w-24" onClick={() => {setMessageDelete(true);}}>삭제</button>
                        </div>
                    </div>
                    {/* 테이블 10줄 */}
                    <table className="table mt-5">
                        <thead className="table-light text-center">
                            <tr>
                                <th className="whitespace-nowrap">
                                    <input className="form-check-input" type="checkbox" value="" />
                                </th>
                                <th className="whitespace-nowrap">수신자</th>
                                <th className="whitespace-nowrap">제목</th>
                                <th className="whitespace-nowrap">받은 시간</th>
                                <th className="whitespace-nowrap">답장</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>SONY ENTERTAINMENT</td>
                                <td>안녕하십니까. 구직 제의 드립니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">03</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>YAMAHA</td>
                                <td>당사는 아래와 같이 구직자분을 모집합니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">01</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>NINTENDO</td>
                                <td>닌텐도와 함께 열정적인 분을 모집합니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">03</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>TOYOTA</td>
                                <td>세계로 미래로 열정을 그대에게</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">10</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>MITSUBITSHI</td>
                                <td>안녕하십니까. 구직제의 드립니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">03</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>SNK</td>
                                <td>당사는 아래와 같이 구직자분을 모집합니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">01</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>KONAMI</td>
                                <td>닌텐도와 함께 열정적인 분을 모집합니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">03</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>CAPCOM</td>
                                <td>세계로 미래로 열정을 그대에게</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">10</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>NISSAN</td>
                                <td>안녕하십니까. 구직제의 드립니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">03</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox" value="" /></td>
                                <td>SOFT BACK</td>
                                <td>당사는 아래와 같이 구직자분을 모집합니다.</td>
                                <td className="text-slate-500">2023-09-04 [15:47]</td>
                                <td className="text-warning">01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="pagination-wrap flex space-between">
            <div className="left-btn">
                <button className="btn btn-sm btn-outline-pending">
                    <Lucide icon="ArrowLeft" />
                    Previous
                </button>
            </div>
            <div className="">
                <nav className="w-full sm:w-auto sm:mr-auto">
                    <ul className="pagination">
                        <li className="page-item active">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                ...
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                9
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-btn">
                <button className="btn btn-sm btn-outline-pending active">
                    Next
                    <Lucide icon="ArrowRight" />
                </button>
            </div>
        </div>
    </div>

    {/* 메시지 저장 */}
    <Modal
        show={messageSaveModal}
        onHidden={() => {
            setMessageSave(false);
        }}
    >
        <ModalBody className="p-10 text-center">
            <div className="modal-tit">메시지를 보관합니다.</div>
            <div className="modal-subtit">
                선택하신 메시지를 저장합니다.<br/>
                저장된 메시지는 "메시지 보관함"으로 이동됩니다.
            </div>
            <div className="flex flex-end gap-3">
                <a
                    href="#"
                    className="btn btn-pending"
                    onClick={() => {
                        setMessageSave(false);
                    }}
                >
                    확인
                </a>
                <a
                    href="#"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        setMessageSave(!messageSaveModal);
                    }}
                >
                    취소
                </a>
            </div>
            {/* END: Toggle Modal Toggle */}
        </ModalBody>
    </Modal>

    {/* 메시지 삭제 */}
    <Modal
        show={messageDeleteModal}
        onHidden={() => {
            setMessageDelete(false);
        }}
    >
        <ModalBody className="p-10 text-center">
            <div className="modal-tit">메시지를 삭제 하시겠습니까?</div>
            <div className="modal-subtit">
                삭제된 메시지는 복원할 수 없습니다.<br/>
                삭제 전 신중히 생각해주세요.
            </div>
            <div className="flex flex-end gap-3">
                <a
                    href="#"
                    className="btn btn-pending"
                    onClick={() => {
                        setMessageDelete(false);
                    }}
                >
                    확인
                </a>
                <a
                    href="#"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        setMessageDelete(!messageDeleteModal);
                    }}
                >
                    취소
                </a>
            </div>
            {/* END: Toggle Modal Toggle */}
        </ModalBody>
    </Modal>
</>
);
}

export default MessageSentBusiness;