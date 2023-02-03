import {} from "@/base-components";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import CameraPhoto from "@/assets/images/camera.png";
import SelectArrow from "@/assets/images/select-arrow.svg";
import checkIcon from "@/assets/images/check-icon.svg";

function SignUpBusiness() {
   
return (
<>
    <div id="business" className="sign-up-business">
        <div className="box-type-default p-10">
            <div className="text-2xl font-bold text-center mb-5">
                기업 회원가입
            </div>
            <div className="resume-regist-cont">
                <div className="form-flex-box flex space-between items-start">
                    <div className="box-item flex flex-col">

                        <div className="form-tit">기업명 <span>*</span></div>
                        <input id="regular-form-1" type="text" className="form-control" placeholder="기업명 입력" />

                        <div className="form-tit">기업명 (카타카나) <span>*</span></div>
                        <input id="regular-form-1" type="text" className="form-control" placeholder="기업명 입력" />
                        <div className="flex flex-col gap-2">
                            <Dropdown className="">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    업종
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                    <Dropdown.Item href="#/action-1" active>
                                        업종
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Dropdown className="">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                    본사 소재지
                                    <img src={SelectArrow} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                    <Dropdown.Item href="#/action-1" active>
                                        본사 소재지
                                        <img src={checkIcon} alt="" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <div className="form-tit">담당자 이메일 <span>*</span></div>
                            <div className="flex items-center gap-2">
                                <input id="regular-form-1" type="text" className="form-control" placeholder="이메일 입력" />
                                <div className="form-check form-switch flex gap-2">
                                    <button className="btn btn-sm btn-business w-28 font-16">인증코드 발급</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="regular-form-1" type="text" className="form-control" placeholder="인증코드 확인" />
                                <div className="form-check form-switch flex gap-2">
                                    <button className="btn btn-sm btn-business-white w-28 font-16">확인</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="form-tit">담당자 연락처 <span>*</span></div>
                            <input id="regular-form-1" type="text" className="form-control" placeholder="-없이 숫자만 입력해주세요. (예: 12345678)" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="form-tit">회사 홈페이지 <span>*</span></div>
                            <input id="regular-form-1" type="text" className="form-control" placeholder="회사 홈페이지 입력" />
                        </div>
                        <div className="form-tit">지불방법 <span>*</span></div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" className="dropdown-basic-button flex items-center space-between">
                                지불방법
                                <img src={SelectArrow} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark" className="dropdown-basic-menu drop-type1">
                                <Dropdown.Item href="#/action-1" active>
                                    지불방법
                                    <img src={checkIcon} alt="" />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">국적01</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">국적02</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">국적03</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="flex items-center gap-2">
                            <div className="box-item flex flex-col">
                                <div className="form-tit">사원수 <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="사원수 입력" />
                            </div>
                            <div className="box-item flex flex-col">
                                <div className="form-tit">매출 <span>*</span></div>
                                <input id="regular-form-1" type="text" className="form-control" placeholder="매출" />
                            </div>
                        </div>
                    </div>

                    <div className="box-item">
                        <div className="flex flex-col">
                            <div className="form-tit">회사 구인공고 <span>*</span></div>
                            <textarea
                                className="form-control mt-2 w-full h-32 resize-none"
                                rows="1"
                                placeholder="구인공고 입력"
                            ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="form-tit">회사 이미지 등록 <span>*</span></div>
                            <div className="camera-subtit2">
                                * 최대 5장 JPG, PNG,GIF 형식으로 등록 가능합니다.
                            </div>
                            <img src={CameraPhoto} alt="" className="w-40"/>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="form-tit">회사 이미지 등록 <span>*</span></div>
                            <div className="camera-subtit2">
                                * 최대 5장 JPG, PNG,GIF 형식으로 등록 가능합니다.
                            </div>
                            <img src={CameraPhoto} alt="" className="w-40"/>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="form-tit pb-3 border-b">이용규약</div>
                            <div className="agree-text text-slate-300 p-2 border-b text-sm">
                                HITOBITO 관리자에서 등록한 내용 출력<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                            </div>
                            <div className="mt-1">
                                <input id="disagree" className="form-check-input" type="checkbox" name="agree_button"/>
                                <label className="form-check-label text-sm" htmlFor="disagree">상기 이용규약에 동의합니다.</label>
                            </div>

                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="form-tit pb-3 border-b">개인정보보호정책</div>
                            <div className="agree-text text-slate-300 p-2 border-b text-sm">
                                HITOBITO 관리자에서 등록한 내용 출력<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                                내용<br/>
                            </div>
                            <div className="mt-1">
                                <input id="disagree" className="form-check-input" type="checkbox" name="agree_button"/>
                                <label className="form-check-label text-sm" htmlFor="disagree">상기 이용규약에 동의합니다.</label>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-center mt-5">
                    <button className="btn btn-pending w-80 h-48 mr-5">
                        <Link to="/user-guide-business">가입하기</Link>
                    </button>
                    <button className="btn btn-outline-pending w-80 h-48"> 취소</button>
                </div>
            </div>
        </div>

    </div>
</>
);
}

export default SignUpBusiness;