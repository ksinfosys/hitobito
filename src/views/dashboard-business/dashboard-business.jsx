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


import DashboardList from "../../components/dashboard-cont-list/dashboard-list";
import DashboardListBusiness from "../../components/dashboard-cont-list-business/dashboard-list";
import PersonIcon from "@/assets/images/person-icon.png";
import MinusGrayBtn from "@/assets/images/minus-gray-btn.svg";
import PlusGrayBtn from "@/assets/images/plus-gray-btn.svg";

const DashboardBusiness = () => {
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
                    <div className="list-top flex space-between items-center mt-10 mb-5 px-5">
                        <div className="list-all-wrap flex items-center gap-4">
                            <div className="minus-plus-wrap flex items-center">
                                <button className="minus-gray-btn">
                                    <img src={MinusGrayBtn} alt="" />
                                </button>
                                <div className="number-div">
                                    1
                                </div>
                                <button className="plus-gray-btn">
                                    <img src={PlusGrayBtn} alt="" />
                                </button>
                            </div>
                            <button className="btn btn-sm btn-business w-20">
                                일괄 의뢰
                            </button>
                            <button className="btn btn-sm btn-cancle-type1 w-20">
                                취소
                            </button>
                        </div>
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
                        <div className="flex items-center dashboard-cont-tit">
                            <div className="form-check w-24">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">일괄 선택</label>
                            </div>
                            <div className="dashboard-tit-list ml-auto flex flex-center w-full">LIST</div>
                        </div>
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />
                        <DashboardListBusiness />


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
export default DashboardBusiness;
