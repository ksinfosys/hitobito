
import Dropdown from 'react-bootstrap/Dropdown';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";

const ResumeMobile6 = (props) => {


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
                    연락처전화번호 또는 이메일을 입력해서 공개를 <br />
                    희망하는 정보를 선택해주세요.
                </div>
                <div className="mo-resume-subtit">
                    최소 1항목은 공개를 선택해주세요. 면담을 승낙한 상대에게만 공개됩니다.
                </div>
                <div className="mobile-drop-wrap">
                    <div className="flex items-center gap-2">
                        <input id="regular-form-1" type="text" className="form-control" placeholder="이메일 입력" />
                        <div className="toggle-wrap">
                            <div className="form-check form-switch flex flex-col items-end">
                                <label className="form-check-label" htmlFor="checkbox-events">
                                    공개
                                </label>
                                <input
                                    className="show-code form-check-input ml-auto"
                                    type="checkbox"
                                    id="checkbox-events"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input id="regular-form-1" type="text" className="form-control" placeholder="-없이 숫자만 입력해주세요." />
                        <div className="toggle-wrap">
                            <div className="form-check form-switch flex flex-col items-end">
                                <label className="form-check-label" htmlFor="checkbox-events">
                                    비공개
                                </label>
                                <input 
                                    className="show-code form-check-input ml-auto"
                                    type="checkbox"
                                    id="checkbox-events"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ResumeMobile6;
