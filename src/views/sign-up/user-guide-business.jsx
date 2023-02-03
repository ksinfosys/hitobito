import {Lucide, Modal, ModalBody, ModalHeader, ClassicEditor,} from "@/base-components";
import {useState} from "react";
import { Link } from 'react-router-dom';

function UserGuideBusiness() {
   
return (
<>
    <div id="business" className="user-guide-business">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                이용 가이드
            </div>
            <div className="p-5 pt-10 pb-10">
                <div className="mb-10">
                    <div className="font-bold">1. Hitobito의 특징</div>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 IT 기술자의 취업 활동과 기업의 채용을 지원하는 매칭 앱 】</li>
                        <li>· 자신에게 맞는 기업을 원하는 IT기술자와 IT기술자를 스카우트하고 싶은 기업의 채용담당자를 연결하는 매칭 앱입니다.</li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 회원가입은 무료 】</li>
                        <li>· 구직자님, 기업 채용 담당자님 모두 회원가입은 무료입니다.</li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 IT 기술자의 스킬을 시각화 】</li>
                        <li>· IT기술자로서 특징이 있는 스킬이나 실적을, 「가시화」하여 경력 정보로서 등록.</li>
                        <li>· 그 때문에, 기업에 있어서도 구직자의 특징을 파악하기 쉽고, 자사의 요망에 베스트 매치한 인재를 찾을 수 있습니다.</li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 면담 의뢰 송신 시에는 포인트가 필요 】</li>
                        <li>· 기업이 IT기술자를 스카우트 할 때 면담의뢰 발송에 대해서는 본 앱 내에서 사용하는 포인트가 필요합니다.
                            <ul className="pl-2 mt-1">
                                <li>→ 후술의 「가입 플랜과 면담 의뢰의 포인트 수에 대하여」를 참조해 주세요.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <div className="font-bold m">2. Hitobito의 기능</div>
                    <p className="mt-1">구직자와 기업의 채용 면담 실시까지 아래 프로세스에서 필요한 기능을 이용하실 수 있습니다.</p>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 이용 가능한 기능에 대하여 】</li>
                        <li>
                            <table className="table table-bordered guide-table">
                                <thead>
                                    <tr>
                                        <th rowSpan={3} className="whitespace-nowrap bg1">ご利用者</th>
                                        <th colSpan={10} className="whitespace-nowrap bg1">hitobitoの機能</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan={2} className="whitespace-nowrap bg2">会員登録</th>
                                        <th rowSpan={2} className="whitespace-nowrap bg2">経歴登録</th>
                                        <th rowSpan={2} className="whitespace-nowrap bg2">求職者検索</th>
                                        <th colSpan={5} className="whitespace-nowrap bg2">当アプリメッセージ機能</th>
                                        <th rowSpan={2} className="whitespace-nowrap bg2">ポイント購入</th>
                                        <th rowSpan={2} className="whitespace-nowrap bg2">ポイント交換</th>
                                    </tr>
                                    <tr>
                                        <th className="whitespace-nowrap bg2">面談依頼送信</th>
                                        <th className="whitespace-nowrap bg2">面談依頼回答</th>
                                        <th className="whitespace-nowrap bg2">面談実施報告</th>
                                        <th className="whitespace-nowrap bg2">面談実施確認</th>
                                        <th className="whitespace-nowrap bg2">その他連絡</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg3">企業</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td className="bg3">求職者</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-pending text-sm mt-1">이용가능 O / 이용불가 X</p>
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <div className="font-bold m">3. 이용단말기와 이용시간대 안내</div>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 이용 단말기 안내 】</li>
                        <li>
                            <table className="table table-bordered guide-table w-auto">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap bg1 w-32">ご利用者</th>
                                        <th className="whitespace-nowrap bg1 w-32">PC</th>
                                        <th className="whitespace-nowrap bg1 w-32">Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg3">企業</td>
                                        <td>O</td>
                                        <td>X</td>
                                    </tr>
                                    <tr>
                                        <td className="bg3">求職者</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-pending text-sm mt-1">이용가능 O / 이용불가 X</p>
                        </li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 이용 시간대 안내 】</li>
                        <li>· 매일, 2:00am - 4:00am(시스템 정지 시간)을 제외한 시간</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <div className="font-bold m">4. 이용계획 및 면담의뢰시 필수포인트 수에 대하여</div>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 이용 플랜에 대해서 】</li>
                        <li>· 기업은 이용함에 있어서 이용 플랜을 등록·변경할 수 있습니다. (지정이 없는 경우에는, 모두 프리플랜으로 취급됩니다)</li>
                        <li>· 플랜의 등록·변경은 언제든지 가능합니다. 등록 및 변경된 플랜에 대해서는 즉시 적용됩니다.</li>
                        <li>· 월의 도중에 플랜 변경되었을 경우의 이용료는, 일할 계산됩니다. 기업에서 구직자에게의 면담 의뢰 1회에 대해,가입 플랜별로 정한 포인트수를 사용합니다.</li>
                        <li>
                            <table className="table table-bordered guide-table w-auto">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap bg1 w-32">プラン</th>
                                        <th className="whitespace-nowrap bg1 w-24">月額利用料</th>
                                        <th className="whitespace-nowrap bg1 w-24">契約時間</th>
                                        <th className="whitespace-nowrap bg1 w-48">面談依頼時の必要ポイント数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg3">フリープラン</td>
                                        <td>ー</td>
                                        <td>ー</td>
                                        <td>20,000ポイント	</td>
                                    </tr>
                                    <tr>
                                        <td className="bg3">プランA</td>
                                        <td>15,000円</td>
                                        <td>1年</td>
                                        <td>5,000ポイント</td>
                                    </tr>
                                    <tr>
                                        <td className="bg3">プランB</td>
                                        <td>30,000円</td>
                                        <td>1年</td>
                                        <td>3,000ポイント</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-pending text-sm mt-1">(금액은 모두 세금을 제외한 금액입니다)</p>
                        </li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 플랜별 기능에 대해 】</li>
                        <li>
                            <table className="table table-bordered guide-table w-auto">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap bg1 w-32">フリープラン</th>
                                        <th className="whitespace-nowrap bg1 w-24">プランA</th>
                                        <th className="whitespace-nowrap bg1 w-24">プランB</th>
                                        <th className="whitespace-nowrap bg1">機能</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>メッセージ送受信</td>
                                    </tr>
                                    <tr>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>ポイント残高表示</td>
                                    </tr>
                                    <tr>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>ポイント推移表（前月分のみ</td>
                                    </tr>
                                    <tr>
                                        <td>X</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>ポイント推移表（期間指定、当日分を含む）</td>
                                    </tr>
                                    <tr>
                                        <td>X</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>年間支払金額によるポイント付与（毎年12月末締）</td>
                                    </tr>
                                    <tr>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>O</td>
                                        <td>企業側担当者との月１回の対面ミーティング</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-pending text-sm mt-1">이용가능 O / 이용불가 X</p>
                        </li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 포인트 구입 안내 】</li>
                        <li>· 기업은 본 서비스 내에서 사용하는 포인트를 포인트 구매 화면에서 구입할 수 있습니다.</li>
                        <li>· 1포인트 = 1엔 (세금 제외 금액)</li>
                        <li>· 구매단위 : 1,000포인트 단위</li>
                        <li>
                            · 포인트 잔액은 본 앱 내에서 관리되며, 항상 최신 포인트 잔액을 확인할 수 있습니다.<br/>
                            기업으로부터의 면담 의뢰에 대해, 구직자가 면담을 거부했을 경우에 대해서는, 그 면담 의뢰에 사용한 포인트수가 반환됩니다.
                        </li>
                    </ul>
                    <ul className="p-2 flex flex-col gap-1 mt-3">
                        <li>【 포인트 실효 】</li>
                        <li>본 사이트에 회원가입한 기간에 대해서는 포인트가 만료되지 않습니다.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <div className="font-bold m">5. 대금 지급방법에 대하여</div>
                    <p className="mt-1">매월의 이용료 및 포인트의 구입대금은, 이하의 방법으로 지불해 주시기 바랍니다.</p>
                    <ul className="pl-2 flex flex-col gap-1 mt-1">
                        <li>· 크레딧, 은행 송금</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <div className="font-bold m">6. 탈퇴시 포인트 취급에 대하여</div>
                    <p className="mt-1">회원탈퇴 시점에서 미사용 포인트가 남아있는 경우에는 모두 실효되며 환불 및 환금은 불가합니다. 따라서 포인트를 모두 사용하신 후 탈퇴를 권장 드립니다.</p>
                </div>
            </div>
        </div>

    </div>
</>
);
}

export default UserGuideBusiness;