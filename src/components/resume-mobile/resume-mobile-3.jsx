
import Dropdown from 'react-bootstrap/Dropdown';

import Download from "@/assets/images/download-icon-sky.svg";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";

const ResumeMobile3 = (props) => {


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
                    최종학교명,전공학부,학과명을 입력해주세요.
                </div>
                <div className="mobile-drop-wrap">
                    <input id="regular-form-1" type="text" className="form-control" placeholder="최종학교명 입력" />
                    <input id="regular-form-1" type="text" className="form-control" placeholder="학과명 &#183; 전공학부 입력" />


                </div>
            </div>
        </>
    );
};
export default ResumeMobile3;
