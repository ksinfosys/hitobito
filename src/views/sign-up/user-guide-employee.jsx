import { Lucide, Modal, ModalBody, ModalHeader, ClassicEditor, } from "@/base-components";
import { useState } from "react";
import { Link } from 'react-router-dom';

function UserGuideEmployee() {

    return (
        <>
            <div id="business" className="user-guide-business employee">
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
                                    <p className="text-primary text-sm mt-1">이용가능 O / 이용불가 X</p>
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
                                    <p className="text-primary text-sm mt-1">이용가능 O / 이용불가 X</p>
                                </li>
                            </ul>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 이용 시간대 안내 】</li>
                                <li>· 매일, 2:00am - 4:00am(시스템 정지 시간)을 제외한 시간</li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <div className="font-bold m">4. 등록부터 면접 실시까지의 흐름</div>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 닉네임 등록 】</li>
                                <li>· 회원가입시 닉네임을 입력해 주시고, 채용 기업측에는 익명으로 표시됩니다.
                                </li>
                            </ul>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 경력정보 등록 】</li>
                                <li>
                                    · IT기술자로서의 경력 정보의 등록에 대해서는, 기업측이 보고 싶은 포인트를 정리한 등록 방법입니다.
                                </li>
                                <li>
                                    · 과거의 실적을 어필하는 수단으로서 SNS나 GitHub의 계정도 입력 가능합니다.
                                </li>
                                <li>
                                    · 또, 기업측에 어필하기 위한 소개 자료등의 파일도 등록할 수 있습니다.
                                </li>
                                <li>
                                    · 그로인해 스스로 기업의 채용 정보를 찾는 것이 아니라, IT기술자를 채용하고 싶은 기업으로부터 스카우트의 면접 제의가 도착하게 됩니다.
                                </li>
                            </ul>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 면접 제의에 대한 회신 】</li>
                                <li>
                                    · 면접 제의가 도착한 상대편의 기업 정보나 채용 정보의 상세를 확인할 수 있습니다.
                                </li>
                                <li>
                                    · 상대편 기업의 사원이, 기업 SNS인 「tomodomo」를 이용하고 있는 경우에는, 상대편 기업의 분위기도 확인할 수 있습니다.
                                </li>
                                <li>
                                    ·면접해 보고 싶은 기업에는 면접 수락을, 면접하고 싶지 않은 기업에는 거부를 송신할 수 있습니다.

                                </li>
                            </ul>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 면접 제의 수락 후 안내 】</li>
                                <li>
                                    · 면접 제의를 수락한 경우에만 상대 기업에 대해 개인정보 및 경력정보의 상세내용이 공개됩니다.
                                </li>
                                <li>
                                    · 기업과의 면담 일시 조정 등의 연락은 본 앱의 메시지 기능을 이용할 수 있습니다.
                                </li>
                            </ul>
                            <ul className="p-2 flex flex-col gap-1 mt-3">
                                <li>【 면접 실시 후에 대해서 】</li>
                                <li>
                                    · 실제로 기업과의 면접을 실시한 후에, 채용 여부에 관계없이 면접 실시 완료를 보고해 주십시오.
                                </li>
                                <li>
                                    · 면접 실시 보고에 대해 상대편 기업의 확인이 이루어지면, 기업이 면접 의뢰에 사용한 포인트의 일부가 구직자에게 환원됩니다.
                                </li>
                                <li>
                                    ·환원된 포인트에 대해서는, Amazon의 기프트권으로 교환할 수 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UserGuideEmployee;