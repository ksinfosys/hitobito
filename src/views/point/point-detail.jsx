import {Lucide, Modal, ModalBody,} from "@/base-components";
import {useState} from "react";

function PointDetail() {

return (
<>
    <div id="point-detail">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                포인트 확인/교환
            </div>
            <div className="cont-wrap p-5">
                <div className="mt-5">
                    <div className="">
                        <ul className="flex space-between items-center gap-2 p-3 bg-lb">
                            <li>2023-01-02 현재</li>
                            <li className="text-dark font-bold text-lg w-3/5 text-right">다나카님의 현재 사용가능한 포인트는</li>
                            <li className="text-primary font-bold text-2xl">35,000P</li>
                        </ul>
                        <div className="flex flex-end items-center gap-5 mt-5">
                            <p>교환할 포인트를 입력하여 주세요.</p>
                            <div className="point-input border-b-2">
                                <input type="text" placeholder="0000" className="w-24"/><span className="font-bold ml-2">P</span>
                            </div>
                            <button className="btn btn-sm btn-primary w-24 mr-2">교환하기</button>
                        </div>
                    </div>
                    {/* 테이블 10줄 */}
                    <div className="mt-8">
                        <p>적립예정</p>
                        <table className="table mt-5">
                            <thead className="table-light text-center">
                                <tr>
                                    <th className="whitespace-nowrap text-sm">날짜</th>
                                    <th className="whitespace-nowrap text-sm">적립 예정일</th>
                                    <th className="whitespace-nowrap text-sm">적립 포인트</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td>2023-01-02</td>
                                    <td>다나카님의 2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
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

</>
);
}

export default PointDetail;