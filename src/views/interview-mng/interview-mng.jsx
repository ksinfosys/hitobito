import {
    Lucide,
    Modal,
    ModalBody,
} from "@/base-components";
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";
import Search from "@/assets/images/search.svg";
import TableArrow from "@/assets/images/table-arrow.svg";


import DashboardList from "../../components/dashboard-cont-list/dashboard-list";
import DashboardListBusiness from "../../components/dashboard-cont-list-business/dashboard-list";
import PersonIcon from "@/assets/images/person-icon.png";
import MinusGrayBtn from "@/assets/images/minus-gray-btn.svg";
import PlusGrayBtn from "@/assets/images/plus-gray-btn.svg";

const InterviewMng = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
        setIsActive3(current => !current);
    }
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }

    const [pointRequestModal, setpointRequestModal] = useState(false);
    const [reportRequestModal, setreportRequestModal] = useState(false);

    return (
        <>
            <div className="dashboard orange">
                <div className="box-type-default">
                    <div className="dashboard-top p-5 border-b border-slate-200/60 text-sm">
                        면접 의뢰 현황
                    </div>
                    <div className="list-top flex flex-end items-center mt-10 mb-5 px-5">
                        <div className="flex gap-4">
                            <Dropdown className="w-24 drop-48">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    연봉
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu">
                                    <Dropdown.Item href="#/action-1" active>
                                        연봉
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="search-box relative text-slate-500 w-80">
                                <input
                                    type="text"
                                    className="form-control pr-10"
                                    placeholder="검색어를 입력 하세요."
                                />
                                <button className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0">
                                    <img src={Search} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-cont pb-12">
                        {/* 테이블 10줄 */}
                        <div className="mt-8">
                            <table className="table mt-5">
                                <thead className="table-light text-center">
                                    <tr>
                                        <th className="whitespace-nowrap text-sm">NO</th>
                                        <th className="whitespace-nowrap text-sm flex flex-center items-center">
                                            <div className="text-sm">
                                                의뢰대상
                                            </div>
                                            <button>
                                                <img src={TableArrow} alt="" />
                                            </button>
                                        </th>
                                        <th className="whitespace-nowrap text-sm">상태</th>
                                        <th className="whitespace-nowrap text-sm">의뢰 시간</th>
                                        <th className="whitespace-nowrap text-sm">확인 시간</th>
                                        <th className="whitespace-nowrap text-sm">포인트 상태</th>
                                        <th className="whitespace-nowrap text-sm"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>1</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="complete">7</td>
                                        <td className="complete">다나카</td>
                                        <td className="complete">보통</td>
                                        <td className="complete">23.09.04 15:47</td>
                                        <td className="complete">23.09.04 15:47</td>
                                        <td className="complete">
                                            지급 완료
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-gray-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>다나카</td>
                                        <td>보통</td>
                                        <td>23.09.04 15:47</td>
                                        <td>23.09.04 15:47</td>
                                        <td>
                                            포인트 미신청
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-business w-20">
                                                면접실시확인
                                            </button>
                                            <button className="btn btn-sm btn-outline-business w-20 ml-2">
                                                메세지 작성
                                            </button>
                                            <button className="btn btn-sm btn-cancle-type1 w-20 ml-2">
                                                신고
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrap orange flex space-between">
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
};
export default InterviewMng;
