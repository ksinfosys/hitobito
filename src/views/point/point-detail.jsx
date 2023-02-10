import {Lucide, Modal, ModalBody,} from "@/base-components";
import {useState} from "react";

function PointDetail() {

return (
<>
    <div id="point-detail">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-lg font-bold lg:text-sm lg:font-normal">
                포인트 확인/교환
            </div>
            <div className="cont-wrap p-5">
                <div className="mt-5">
                    <div className="">
                        <ul className="relative flex flex-col lg:flex-row space-between items-center gap-2 p-3 bg-lb">
                            <li className="absolute -top-6 right-0 lg:relative lg:top-0 text-sm lg:text-normal text-slate-400">2023-01-02 현재</li>
                            <li className="text-dark font-bold lg:text-lg lg:w-3/5 text-left lg:text-right">다나카님의 현재 사용가능한 포인트는</li>
                            <li className="text-primary font-bold lg:text-2xl">35,000P</li>
                        </ul>
                        <div className="flex flex-end flex-col lg:flex-row gap-5 mt-5">
                            <p>교환할 포인트를 입력하여 주세요.</p>
                            <div className="flex gap-5 space-between">
                                <div className="point-input border-b-2">
                                    <input type="text" placeholder="0000" className="w-24"/><span className="font-bold ml-2">P</span>
                                </div>
                                <button className="btn btn-sm btn-primary w-24 mr-2">교환하기</button>
                            </div>
                        </div>
                    </div>
                    {/* 테이블 10줄 */}
                    <div className="mt-8">
                        <p className="font-bold lg:font-normal">적립예정</p>
                        <table className="table mt-5 pc">
                            <thead className="table-light text-center">
                                <tr>
                                    <th className="whitespace-nowrap text-sm">날짜</th>
                                    <th className="whitespace-nowrap text-sm">적립 예정일</th>
                                    <th className="whitespace-nowrap text-sm">적립 포인트</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr className="bordere-b">
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* 모바일 테이블 */}
                        <table className="table mt-5 mo">
                            <tbody className="text-center">
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-400">23-01-02</td>
                                    <td>2월 1일 적립예정 포인트는</td>
                                    <td className="text-primary font-bold">1,500p</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination-wrap flex items-center flex-center lg:space-between mt-5">
            <div className="left-btn hidden lg:block">
                <button className="btn btn-sm btn-outline-primary">
                    <Lucide icon="ArrowLeft" />
                    Previous
                </button>
            </div>
            <button type="button" className="lg:hidden"><Lucide icon="ChevronLeft" /></button>
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
            <div className="right-btn hidden lg:block">
                <button className="btn btn-sm btn-outline-primary active">
                    Next
                    <Lucide icon="ArrowRight" />
                </button>
            </div>
            <button type="button" className="lg:hidden"><Lucide icon="ChevronRight" /></button>
        </div>
    </div>

</>
);
}

export default PointDetail;