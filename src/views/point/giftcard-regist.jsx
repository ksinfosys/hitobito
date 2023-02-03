import {} from "@/base-components";
import {useState} from "react";

import AmazonCard from "@/assets/images/amazon-giftcard.svg";

function GiftcardRegist() {
    
return (
<>
    <div id="giftcard-regist">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                아마존 기프트카드 등록
            </div>
            <div className="cont-wrap p-5">
                <div className="mt-5 mb-5">
                    <div className="font-bold font-xl mb-5">포인트 교환 완료! Amazon 기프트카드가 발행되었습니다.</div>
                    <div className="relative flex flex-start gap-5 p-3 bg-lb">
                        <div>
                            <img src={AmazonCard} alt="" />
                        </div>
                        <ul>
                            <li className="font-bold">Amazon 기프트카드</li>
                            <li className="mt-5">
                                QS25-3313DE-3DTG
                                <span className="font-bold ml-10">(¥30,000)</span>
                            </li>
                        </ul>
                        <button type="button" className="absolute right-0 bottom-0 m-3 btn btn-primary w-72">Amazon에 등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
);
}

export default GiftcardRegist;