import {
    Lucide,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem
} from "@/base-components";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import MoArrowDown from "@/assets/images/mo-arrow-down.svg";


const DashboardMobile = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
        setIsActive3(current => !current);
    }
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }
    const handleClick3 = () => {
        setIsActive4(current => !current);
    }

    const borderColor = () => {
        setIsActive5(current => !current);
    }


    const [pointRequestModal, setpointRequestModal] = useState(false);
    const [reportRequestModal1, setreportRequestModal1] = useState(false);
    const [reportRequestModal, setreportRequestModal] = useState(false);
    const names = ['JAVA', 'JAVA', 'JAVA'];
    const buttonList = names.map((name, index) => <button className="btn btn-lang" key={index}>{name} </button>)


    return (
        <>
        <div className={props.bg}>
            <div className={isActive5?"dashboard-cont-cont flex flex-col mobile checkBorder":"dashboard-cont-cont flex flex-col mobile"}>
                <div className="cont-top flex space-between">
                    <div className="dash-cont-cont1 flex items-center">
                        <div className="form-check dash-cont1-tit">
                            <input id={props.checkid} className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label" htmlFor={props.checkid} onClick={()=>{
                                borderColor(true);
                            }}>?????? ???</label>
                        </div>
                        <div className="dash-cont1-tit">
                            <button type="button">
                                ????????????
                            </button>
                        </div>
                    </div>
                    <div className="dash-cont-cont2 flex flex-col items-end">
                        <div className="progress-bar-tit">
                            ?????? 18:00
                        </div>
                        <div className="progress">
                            <div className={props.progress} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>
                <div className="cont-btm">
                    <div className="cont-btm-btn">
                        {buttonList}
                    </div>
                    <div className="cont-btm-arrow">
                        <button type="button">
                            <img src={MoArrowDown} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex-end">
                    <div className="dash-cont-cont3 flex">
                        <button className={isActive ? "btn btn-sm btn-primary display-none" : "btn btn-sm btn-primary"} onClick={handleClick}>
                            ??????
                        </button>
                        <button className={isActive3 ? "btn btn-sm btn-primary btn-auto" : "btn btn-sm btn-primary display-none btn-auto"} onClick={() => {
                            setpointRequestModal(true);
                        }}>
                            ????????? ?????? ??????
                        </button>
                        <button className={isActive3 ? "btn btn-sm btn-gray-type1 " : "btn btn-sm btn-gray-type1 display-none"} onClick={handleClick}>
                            ?????? ??????
                        </button>
                        <button className={isActive2 ? "btn btn-sm btn-gray-type1 " : "btn btn-sm btn-gray-type1 display-none"}>
                            ?????? ??????
                        </button>
                        <button className={isActive ? "btn btn-sm btn-outline-secondary display-none" : "btn btn-sm btn-outline-secondary"}>
                            ??????
                        </button>
                        <button className={isActive ? "btn btn-sm btn-outline-secondary" : "btn btn-sm btn-outline-secondary display-none"} onClick={() => {
                            setreportRequestModal1(true);
                        }}>
                            ??????
                        </button>
                    </div>
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
                    <div className="modal-tit">????????? ?????? ??????</div>
                    <div className="modal-subtit">
                        ?????? ?????? ?????? ????????? ?????? ????????? ??? ???????????????.
                        ????????? ???????????? ????????? ????????? ???????????? ???????????????
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
                            ??????
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setpointRequestModal(!pointRequestModal);
                            }}
                        >
                            ??????
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
            <Modal
                show={reportRequestModal1}
                onHidden={() => {
                    setreportRequestModal1(false);
                }}
            >
                <ModalHeader>
                    <div className="flex space-between items-center w-full">
                        <h2 className="modal-tit">
                            ??????
                        </h2>
                        <button className="">
                            <Lucide icon="X" className="w-4 h-4" />
                        </button>
                    </div>
                </ModalHeader>
                <ModalBody >
                    <div className="flex gap-5">
                        <div className="modal-subtit2">
                            ???????????? : NIKE
                        </div>
                        <div className="modal-subtit2">
                            ????????? : DANAKA
                        </div>
                    </div>
                    <div className="report-radio-wrap mt-4">
                        <div className="form-check mt-2">
                            <input id="radio-switch-1" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-1">?????? ?????? ??? ???????????? ????????? ??????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-1" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-1">????????? ????????? ????????? ????????? ?????? ??????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-3" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-3">?????? ????????? ???????????? ????????? ???????????? ????????? ??????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-4" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-4">????????? ????????? ????????? ??????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-5" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-5">?????? ??? ?????? ?????? ????????? ?????????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-6" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-6">?????????????????? ????????? ????????????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-7" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-7">??????????????? ????????? ??????</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-8" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-8">??????</label>
                        </div>
                    </div>
                    <textarea
                        className="form-control mt-4 h-20 resize-none"
                        rows="1"
                        placeholder="?????? ????????? ??????????????? ??????????????????."
                    ></textarea>
                    <div className="flex flex-end mt-4">
                        <a
                            href="#"
                            className="btn btn-primary btn-report"
                            onClick={() => {
                                setreportRequestModal(true);
                            }}
                        >
                            ??????
                        </a>
                    </div>
                </ModalBody>
            </Modal>
            <Modal className="report-request-modal"
                show={reportRequestModal}
                onHidden={() => {
                    setreportRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">????????? ?????????????????????.</div>
                    <div className="modal-subtit">
                        ??????????????? ??????????????? ?????????????????????.
                        ????????? ???????????? ??????????????????.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setreportRequestModal(false);
                                setreportRequestModal1(false);
                            }}
                        >
                            ??????
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
        </>
    );
};
export default DashboardMobile;
