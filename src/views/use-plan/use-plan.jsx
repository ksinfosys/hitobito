import {Lucide, Modal, ModalBody, ModalHeader} from "@/base-components";
import { useState } from "react";


const UsePlan = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }
    const [isActive2, setIsActive2] = useState(false);
    const handleClick2 = () => {
        setIsActive2(current => !current);
    }

    const [PlanPaymentModal, setPlanPaymentModal] = useState(false);
    const [ChangeConfirmModal, setChangeConfirmModal] = useState(false);
    return (
        <>
            {/* 변경 전 기본 플랜 */}
            <div id="business" className={isActive ? "use-plan display-none" : "use-plan"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        플랜 설정
                    </div>
                    <div className="pt-10 pb-10 p-5 cont-wrap flex flex-col items-center justify-center">
                        <ul className="use-plan-box text-center flex gap-5 w-full mb-10">
                            <li className="active">
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">프리플랜</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">무료/월</p>
                                        <p className="text-white text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 20,000P로 의뢰,<br/>
                                        매달 결제 금액 없음
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-outline-pending bg-white mt-5 w-full">사용중</button>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">플랜A</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">15,000엔/월</p>
                                        <p className="text-warning text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 5,000P로 의뢰,<br/>
                                        매달 결제 금액 15,000엔
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-pending mt-5 w-full" onClick={() => {setPlanPaymentModal(true); }}>변경하기</button>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">플랜B</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">30,000엔/월</p>
                                        <p className="text-warning text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 3,000P로 의뢰,<br/>
                                        매달 결제 금액 30,000엔
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-pending mt-5 w-full" onClick={() => {setPlanPaymentModal(true); }}>변경하기</button>
                            </li>
                        </ul>
                        <div className="border-t w-full">
                            <div className="pt-10 pb-3 border-b">결제약관동의 <span className="text-sm text-pending ml-2">아래의 약관을 읽은 뒤 결제가 가능합니다.</span></div>
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
                            <div className="flex space-between pt-3">
                                <p>결제약관에 동의하시겠습니까?</p>
                                <div className="flex gap-2">
                                    <div className="form-check">
                                        <input id="agree" className="form-check-input" type="radio" name="agree_button" value="horizontal-radio-daniel-craig"/>
                                        <label className="form-check-label text-sm" htmlFor="agree">동의</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="disagree" className="form-check-input" type="radio" name="agree_button" value="horizontal-radio-daniel-craig"/>
                                        <label className="form-check-label text-sm" htmlFor="disagree">비동의</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={isActive2?"btn btn-pending mt-10 w-80":"btn btn-secondary mt-10 w-80"}  onClick={() => { setChangeConfirmModal(!ChangeConfirmModal);}}>결제하기</button>
                    </div>
                    
                </div>
            </div>

            {/* 변경 후 플랜 */}
            <div id="business" className={isActive ? "use-plan" : "use-plan display-none"}>
                <div className="box-type-default">
                    <div className="p-5 border-b border-slate-200/60 text-sm">
                        플랜 설정
                    </div>
                    <div className="pt-10 pb-10 p-5 cont-wrap flex flex-col items-center justify-center">
                        <ul className="use-plan-box text-center flex gap-5 w-full mb-10">
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">프리플랜</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">무료/월</p>
                                        <p className="text-white text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 20,000P로 의뢰,<br/>
                                        매달 결제 금액 없음
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-pending mt-5 w-full" onClick={() => {setPlanPaymentModal(true); }}>변경하기</button>
                            </li>
                            <li className="active">
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">플랜A</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">15,000엔/월</p>
                                        <p className="text-warning text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 5,000P로 의뢰,<br/>
                                        매달 결제 금액 15,000엔
                                    </li>
                                </ul>
                                <button type="button" className="flex-col btn btn-outline-pending bg-white mt-5 w-full">사용중 (정기결제)
                                    <p className="text-xs">2022/10/06 ~ 2023/10/05</p>
                                </button>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li className="font-bold text-lg">플랜B</li>
                                    <li>
                                        <p className="bg-lo text-pending font-bold text-lg p-2">30,000엔/월</p>
                                        <p className="text-warning text-sm mt-2">(세금별도)</p>
                                    </li>
                                    <li className="">
                                        면접의뢰 한건에 3,000P로 의뢰,<br/>
                                        매달 결제 금액 30,000엔
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-pending mt-5 w-full" onClick={() => {setPlanPaymentModal(true); }}>변경하기</button>
                            </li>
                        </ul>
                        <div className="border-t w-full">
                            <div className="pt-10 pb-3 border-b">결제약관동의 <span className="text-sm text-pending ml-2">아래의 약관을 읽은 뒤 결제가 가능합니다.</span></div>
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
                            <div className="flex space-between pt-3">
                                <p>결제약관에 동의하시겠습니까?</p>
                                <div className="flex gap-2">
                                    <div className="form-check">
                                        <input id="agree" className="form-check-input" type="radio" name="agree_button" value="horizontal-radio-daniel-craig" />
                                        <label className="form-check-label text-sm" htmlFor="agree">동의</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="disagree" className="form-check-input" type="radio" name="agree_button" value="horizontal-radio-daniel-craig" />
                                        <label className="form-check-label text-sm" htmlFor="disagree">비동의</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button"  className={isActive2?"btn btn-secondary mt-10 w-80":"btn btn-pending mt-10 w-80"}  onClick={() => { setChangeConfirmModal(!ChangeConfirmModal);}}>결제하기</button>
                    </div>
                    
                </div>
            </div>

            {/* 결제하기 */}
            <Modal
                size="modal-lg"
                backdrop="static"
                show={PlanPaymentModal}
                onHidden={() => { setPlanPaymentModal(false); }}>
                <a onClick={() => { setPlanPaymentModal(false); }}className="absolute right-0 top-0 mt-3 mr-3" href="#">
                    <Lucide icon="X" className="w-5 h-5 text-slate-400" />
                </a>
                <ModalHeader className="flex-col p-5">
                    <h2 className="font-bold text-base mr-auto pb-3 border-b w-full">
                        플랜 결제
                    </h2>
                </ModalHeader>
                <ModalBody className="p-5 plan-pay-modal business-modal">
                    <div id="detail-cont" className="border-b pb-5">
                        <div className="border-b pb-5">
                            <p>정기 결제</p>
                            <div className="form-check p-2 border mt-2">
                                <input id="regular-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                                <label className="form-check-label text-sm w-full" htmlFor="regular-pay">매월 결제 (1년 연속)</label>
                            </div>
                        </div>
                        <div className="pt-5">
                            <p>단기결제</p>
                            <div className="form-check p-2 border mt-2">
                                <input id="2m-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                                <label className="form-check-label text-sm w-full" htmlFor="2m-pay">2개월 결제 <span className="text-pending">(10% 할인)</span></label>
                            </div>
                            <div className="form-check p-2 border mt-2">
                                <input id="3m-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                                <label className="form-check-label text-sm w-full" htmlFor="3m-pay">3개월 결제 <span className="text-pending">(10% 할인)</span></label>
                            </div>
                            <div className="form-check p-2 border mt-2">
                                <input id="6m-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                                <label className="form-check-label text-sm w-full" htmlFor="6m-pay">6개월 결제 <span className="text-pending">(10% 할인)</span></label>
                            </div>
                        </div>

                    </div>
                    <div id="detail-modal-btn" className="flex flex-end gap-2 pt-5">
                        <button type="button" className="btn btn-sm btn-pending w-24" onClick={() => {
                                
                                handleClick2(true);
                                setPlanPaymentModal(!PlanPaymentModal);
                            }}>다음</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary w-24" onClick={() => { setPlanPaymentModal(!PlanPaymentModal);}}>취소</button>
                    </div> 

                </ModalBody>
            </Modal>

            {/* 변경하기 확인 */}
            <Modal
                show={ChangeConfirmModal}
                onHidden={() => {
                    setChangeConfirmModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">플랜을 변경합니다.</div>
                    <div className="modal-subtit">
                        지금 사용하고 있는 플랜은 "플랜A"입니다.<br/>
                        변경 시 사용중인 플랜은 환불없이 취소됩니다.<br/>
                        진행 하시겠습니까?
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-pending"
                            onClick={() => {
                                setChangeConfirmModal(false);
                                handleClick(true);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setChangeConfirmModal(!ChangeConfirmModal);
                            }}
                        >
                            취소
                        </a>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

export default UsePlan;