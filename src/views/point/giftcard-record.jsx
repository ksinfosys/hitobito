import {Lucide, Modal, ModalBody,} from "@/base-components";
import {useState} from "react";


function GiftcardRecord() {
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }
    const [nicknameChangeModal, nicknameChange] = useState(false);
return (
<>
    <div id="nickname">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                아마존 기프트카드 교환 이력
            </div>
            <div className="cont-wrap p-5">
                <div className="mt-5 mb-5">
                    <div className="flex space-between items-center">
                        <div className="font-bold font-xl">다나카님의 Amazon 기프트카드 교환 이력</div>
                        <button type="button" className="btn btn-primary w-72">Amazon에 등록하기</button>
                    </div>
                
                    {/* 테이블 10줄 */}
                    <div className="mt-8">
                        <table className="table mt-5">
                            <thead className="table-light text-center">
                                <tr>
                                    <th className="whitespace-nowrap text-sm">NO</th>
                                    <th className="whitespace-nowrap text-sm">Amazon 기프트카드 시리얼 번호</th>
                                    <th className="whitespace-nowrap text-sm">교환일</th>
                                    <th className="whitespace-nowrap text-sm">유효기간</th>
                                    <th className="whitespace-nowrap text-sm">기프트카드 금액</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>QS25-3313DE-3DTG7</td>
                                    <td className="text-slate-500">2022-09-05</td>
                                    <td>2023-09-04</td>
                                    <td className="font-bold">¥10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination-wrap flex space-between">
            <div className="left-btn">
                <button className="btn btn-sm btn-outline-primary">
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
                <button className="btn btn-sm btn-outline-primary active">
                    Next
                    <Lucide icon="ArrowRight" />
                </button>
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

export default GiftcardRecord;