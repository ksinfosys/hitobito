import { useState } from 'react';
import {
    Modal, ModalBody, ModalFooter
} from "@/base-components";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";
import AddBtn from "@/assets/images/add-btn.svg";
import AttachedX from "@/assets/images/attached-x.svg";


const ResumeMobile10 = (props) => {

    const [selectPop, setselectPop] = useState(false);

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
                <div className="">
                    <div className="mo-resume-tit flex space-between items-center">
                        이력서에 첨부한 파일이 있으면 <br />
                        첨부해주세요.
                        <button className="add-career-btn flex items-center">
                            <img src={AddBtn} alt="" />
                            파일추가
                        </button>
                    </div>
                </div>

                <div className="mobile-drop-wrap">
                    <div className="attached-file-wrap">
                        <div className="attached-file-item flex space-between items-center">
                            <div className="attached-tit">파일명</div>
                            <div className="attached-cont">
                                <button><img src={AttachedX} alt="" /></button>
                            </div>
                        </div>
                        <div className="attached-file-item flex space-between items-center">
                            <div className="attached-tit">파일명</div>
                            <div className="attached-cont">
                                <button><img src={AttachedX} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ResumeMobile10;
