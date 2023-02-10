import {} from "@/base-components";
import {useState} from "react";

import AmazonCard from "@/assets/images/amazon-giftcard.svg";

function GiftcardRegist() {
    
return (
<>
    <div id="giftcard-regist">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-lg font-bold lg:text-sm lg:font-normal">
                아마존 기프트카드 등록
            </div>
            <div className="cont-wrap py-10 px-5 ">
                <div className="font-xl mb-5"><span className="text-primary font-bold mr-2 mb-1 block lg:inline-block lg:mb-0">포인트 교환 완료!</span>Amazon 기프트카드가 발행되었습니다.</div>
                <div className="relative flex flex-col lg:flex-row items-center flex-start gap-5 p-3 bg-lb">
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
                    <button type="button" className="relative lg:absolute right-0 bottom-0 m-3 btn btn-primary w-72">Amazon에 등록하기</button>
                </div>
            </div>
        </div>
    </div>

</>
);
}

export default GiftcardRegist;