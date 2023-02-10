
import Dropdown from 'react-bootstrap/Dropdown';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";

const ResumeMobile5 = (props) => {


    return (
        <>
            <div className="mobile-resume-wrap">
                <div className="flex items-center gap-3 space-between">
                    <div className="prog-wrap flex flex-col items-end">
                        <div className="prog-bar-tit flex w-full space-between">
                            <div className="prog-percent">진행률</div>
                            <div className="percent"><span>7</span>%</div>
                        </div>
                        <div className="progress">
                            <div className={props.progress} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-skyblue w-36 flex gap-1 items-center">
                        <img src={Download} alt="" />
                        임시저장
                    </button>
                </div>
                <div className="mo-resume-tit">
                    재적회사의 업종 및 직종을 입력해주세요
                </div>
                <div className="mobile-drop-wrap">
                    <Dropdown className="dropdown-type-black">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                            회사 업종
                            <img src={SelectArrow} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu mo-dropdown-menu">
                            <Dropdown.Item href="#/action-1" active>
                                회사 업종
                                <img src={checkIcon} alt="" />
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropdown-type-gray2">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                            회사 직종
                            <img src={SelectArrow} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark" className="dropdown-basic-menu mo-dropdown-menu">
                            <Dropdown.Item href="#/action-1" active>
                                회사 직종
                                <img src={checkIcon} alt="" />
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">option1</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">option2</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">option3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </>
    );
};
export default ResumeMobile5;
