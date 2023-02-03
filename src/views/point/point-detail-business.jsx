import {Lucide, Modal, ModalBody, ModalHeader} from "@/base-components";
import {useState,} from "react";
import $ from "jquery";

function PointDetailBusiness() {
    const [PointPaymentModal, setPointPaymentModal] = useState(false);
    function test(){
     
        $("#direct-pay").hide();
        $(".form-check-input").on('click', function(){
            if($(this).val() == "direct") {
                $("#direct-pay").show();
            }  else {
                $("#direct-pay").hide();
            }
        });
    }
    test()     

return (
<>
    <div className="point-detail-business">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                포인트 구입
            </div>
            <div className="cont-wrap p-5">
                <div className="mt-5">
                    <div className="">
                        <ul className="flex space-between items-center gap-2 p-3 bg-lo">
                            <li>2023-01-02 현재</li>
                            <li className="text-light font-bold text-lg w-3/5 text-right">KS님의 현재 사용가능한 포인트는</li>
                            <li className="text-pending font-bold text-2xl">35,000P</li>
                            <li><button className="btn btn-sm btn-pending" onClick={() => {setPointPaymentModal(true); }}>포인트 구매하기</button></li>
                        </ul>
                    </div>
                    {/* 테이블 10줄 */}
                    <div className="mt-8">
                        <p>최근 충전 포인트 현황</p>
                        <table className="table mt-5">
                            <thead className="table-light text-center">
                                <tr>
                                    <th className="whitespace-nowrap text-sm w-10">NO</th>
                                    <th className="whitespace-nowrap text-sm">포인트 구매일</th>
                                    <th className="whitespace-nowrap text-sm">결제 방법</th>
                                    <th className="whitespace-nowrap text-sm">구입 포인트</th>
                                    <th className="whitespace-nowrap text-sm">결제 금액 (세금포함)</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className="text-slate-400">2023-01-02</td>
                                    <td>신용카드 / 3899</td>
                                    <td className="font-bold">30,000P</td>
                                    <td className="text-light font-bold">33,000p</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination-wrap flex space-between">
            <div className="left-btn">
                <button className="btn btn-sm btn-outline-pending">
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
                <button className="btn btn-sm btn-outline-pending active">
                    Next
                    <Lucide icon="ArrowRight" />
                </button>
            </div>
        </div>
    </div>

    {/* 포인트 구매하기 */}
    <Modal
        size="modal-lg"
        backdrop="static"
        show={PointPaymentModal}
        onHidden={() => { setPointPaymentModal(false); }}>
        <a onClick={() => { setPointPaymentModal(false); }}className="absolute right-0 top-0 mt-3 mr-3" href="#">
            <Lucide icon="X" className="w-5 h-5 text-slate-400" />
        </a>
        <ModalHeader className="flex-col p-5">
            <h2 className="font-bold text-base mr-auto">
                포인트 결제
            </h2>
        </ModalHeader>
        <ModalBody className="p-5 plan-pay-modal business-modal">
            <div id="detail-cont">
                <div className="form-check p-2 border">
                    <input id="1-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                    <label className="form-check-label text-sm w-full" htmlFor="1-pay">10,000포인트</label>
                </div>
                <div className="form-check p-2 border mt-2">
                    <input id="3-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                    <label className="form-check-label text-sm w-full" htmlFor="3-pay">30,000포인트</label>
                </div>
                <div className="form-check p-2 border mt-2">
                    <input id="5-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                    <label className="form-check-label text-sm w-full" htmlFor="5-pay">50,000포인트</label>
                </div>
                <div className="form-check p-2 border mt-2">
                    <input id="10-pay" className="form-check-input" type="radio" name="pay_button" value="horizontal-radio-daniel-craig" />
                    <label className="form-check-label text-sm w-full" htmlFor="10-pay">100,000포인트</label>
                </div>
                <div className="form-check p-2 border mt-2">
                    <input id="input-pay" className="form-check-input" type="radio" name="pay_button" value="direct"/>
                    <label className="form-check-label text-sm w-full" htmlFor="input-pay">직접입력<span className="text-pending ml-2">(1000엔 단위)</span></label>
                </div>
                <input type="text" id="direct-pay" className="form-check p-2 mt-2 w-full" placeholder="최대 1,000,000엔"/>


                <ul className="flex space-between items-center p-3 bg-lo mt-2">
                    <li className="font-bold text-lg text-right">결제 금액 (세금포함)</li>
                    <li className="text-pending font-bold text-2xl">￥110,000</li>
                </ul>
            </div>
            <div id="detail-modal-btn" className="flex space-between pt-5">
                <button type="button" className="btn btn-sm btn-outline-pending w-24">이용약관</button>
                <div>
                    <button type="button" className="btn btn-sm btn-pending w-24 mr-2" onClick={() => {setPointPaymentModal(!PointPaymentModal);}}>결제</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary w-24" onClick={() => { setPointPaymentModal(!PointPaymentModal);}}>취소</button>
                </div>
            </div> 

        </ModalBody>
    </Modal>
</>
);
}

export default PointDetailBusiness;