import {Lucide, } from "@/base-components";
import PointUseChart from "@/components/var-line-chart/Main";
import {useState} from "react";

import SonyLogo from "@/assets/images/SONY-logo.svg";

const PointUseRecord = () => {
    return (
        <>
        <div id="point-use-record">
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        포인트 이용이력
                    </div>
                    <div className="cont-wrap p-5">
                        <div className="mt-5 mb-5">
                            <PointUseChart height={200} />
                            
                            {/* 테이블 10줄 */}
                            <div className="mt-10">
                                <div className="flex space-between items-center">
                                    <div>
                                        <img src={SonyLogo} alt="" className="inline-block"/>
                                        <span className="ml-2">SONY ENTERTAINMENT</span>
                                    </div>
                                    <select className="form-select w-32">
                                        <option>날짜</option>
                                        <option>옵션1</option>
                                        <option>옵션2</option>
                                    </select>
                                </div>
                                <table className="table mt-5">
                                    <thead className="table-light text-center">
                                        <tr>
                                            <th className="whitespace-nowrap text-sm">포인트 변동 시간</th>
                                            <th className="whitespace-nowrap text-sm">포인트 변동</th>
                                            <th className="whitespace-nowrap text-sm">변동 후 잔액</th>
                                            <th className="whitespace-nowrap text-sm">변동 내역</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">면접의뢰</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">면접자 포인트 지급</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>+200,000P</td>
                                            <td>+200,000P</td>
                                            <td className="text-pending">포인트 구매</td>
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

export default PointUseRecord;