import {
    Lucide,
    Modal,
    ModalBody,
} from "@/base-components";
import { useState } from 'react';
import DashboardList from "../../components/dashboard-cont-list/dashboard-list";
import DashboardMobile from "../../components/dashboard-mobile/dashboard-mobile";

const Dashboard = () => {
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
            <div className="dashboard">
                <div className="box-type-default hidden lg:block">
                    <div className="dashboard-top p-5 border-b border-slate-200/60 text-sm">
                        면접 제의 리스트
                    </div>
                    <div className="dashboard-cont">
                        <div className="flex items-center dashboard-cont-tit">
                            <div className="form-check w-24">
                                <input id="vertical-form-3" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="vertical-form-3">일괄 선택</label>
                            </div>
                            <div className="dashboard-tit-list ml-auto flex flex-center w-full">LIST</div>
                        </div>
                        <DashboardList progress="progress-bar  w-5/6 bg-danger" />
                        <DashboardList progress="progress-bar  w-3/6 bg-orange" />
                        <DashboardList progress="progress-bar  w-2/6 bg-green" />
                        <DashboardList progress="progress-bar  w-1/6 bg-green" />
                        <DashboardList progress="progress-bar  w-4/6 bg-green" />
                        <DashboardList progress="progress-bar  w-2/6 bg-green" />
                        <DashboardList progress="progress-bar  w-3/6 bg-green" />
                        <div className="all-btn-wrap flex">
                            <button className="btn btn-sm btn-primary">
                                일괄승낙
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                                일괄거절
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile-dashboard lg:hidden">
                    <div className="mobile-top-btn-box flex items-center space-between">
                        <div className="flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">
                                일괄 승낙
                            </button>
                            <button className="btn btn-sm btn-skyblue">
                                일괄 거절
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                                삭제
                            </button>
                        </div>
                        <div className="check-btn-wrap">
                            <div className="check-all">
                                <input id="all1" className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" htmlFor="all1">allCheck</label>
                            </div>
                        </div>
                    </div>
                    <DashboardMobile progress="progress-bar bg-danger" bg="compo-bg-gray" checkid="cb1" />
                    <DashboardMobile progress="progress-bar bg-orange" bg="compo-bg-white" checkid="cb2" />
                    <DashboardMobile progress="progress-bar bg-green" bg="compo-bg-white" checkid="cb3" />
                    <DashboardMobile progress="progress-bar bg-green" bg="compo-bg-white" checkid="cb4" />
                    <DashboardMobile progress="progress-bar bg-green" bg="compo-bg-gray" checkid="cb5" />

                </div>
                <div className="lg:flex hidden pagination-wrap space-between">
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
            <Modal className="point-request-modal"
                show={pointRequestModal}
                onHidden={() => {
                    setpointRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">포인트 지급 요청</div>
                    <div className="modal-subtit">
                        면접 종료 후에 포인트 지급 신청을 할 수있습니다.
                        지급이 늦어지는 경우는 기업에 메시지를 보내주세요
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setpointRequestModal(false);
                                handleClick2(true);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setpointRequestModal(!pointRequestModal);
                            }}
                        >
                            취소
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
            <Modal className="report-request-modal"
                show={reportRequestModal}
                onHidden={() => {
                    setreportRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">신고를 완료하였습니다.</div>
                    <div className="modal-subtit">
                        정상적으로 신고접수가 완료되었습니다.
                        처리가 될때까지 기다려주세요.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setreportRequestModal(false);
                            }}
                        >
                            확인
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
        </>
    );
};
export default Dashboard;
