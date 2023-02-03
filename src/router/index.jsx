import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SideBusinessMenu from "../layouts/side-business-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Login from "../views/login/login";
import FindId from "../views/login/find-id";
import FindIdResult from "../views/login/find-id-result";
import FindPwd from "../views/login/find-pwd";
import TempPwd from "../views/login/temp-pwd";
import PwdChange from "../views/login/pwd-change";
import Signup from "../views/sign-up/signup";
import SignupEmployee from "../views/sign-up/signup-employee";
import SignupEmployeeTerm from "../views/sign-up/signup-employee-term";

import Dashboard from "../views/dashboard/dashboard";
import PointDetail from "../views/point/point-detail";
import GiftcardRegist from "../views/point/giftcard-regist";
import GiftcarRecord from "../views/point/giftcard-record";
import Nickname from "../views/nickname/nickname";
import Suspension from "../views/membership/suspension";
import Withdraw from "../views/membership/withdraw";
import MessageReception from "../views/message/message-reception";
import MessageSent from "../views/message/message-sent";
import MessageBox from "../views/message/message-box";
import ResumeRegist from "../views/resume-mng/resume-regist";
import ResumeChange from "../views/resume-mng/resume-change";
import UserGuideEmployee from "../views/sign-up/user-guide-employee";

// 기업
import DashboardBusiness from "../views/dashboard-business/dashboard-business";
import PointUseRecord from "../views/point-use-record/point-use-record"
import PasswordChange from "../views/password-change/password-change"
import InterviewMng from "../views/interview-mng/interview-mng";
import CorpInfoMng from "../views/corp-info-mng/corp-info-mng";
import SuspensionBusiness from "../views/membership/suspension-business";
import PointDetailBusiness from "../views/point/point-detail-business";
import UsePlan from "../views/use-plan/use-plan";
import MessageReceptionBusiness from "../views/message/message-reception-business";
import MessageSentBusiness from "../views/message/message-sent-business";
import MessageBoxBusiness from "../views/message/message-box-business";
import WithdrawBusiness from "../views/membership/withdraw-business";
import UserGuideBusiness from "../views/sign-up/user-guide-business";
import SignUpBusiness from "../views/sign-up/signup-business";

function Router() {
    const routes = [
        {
            path: "/",
            element: <SideMenu />,
            children: [
                // 면접 제의 확인
                {
                    path: "/",
                    element: <Dashboard />,
                },

                // 이력서 등록
                {
                    path: "/resume-regist",
                    element: <ResumeRegist />,
                },
                //이력서 변경
                {
                    path: "resume-change",
                    element: <ResumeChange />,
                },
                //포인트 관리
                {
                    path: "point-detail",
                    element: <PointDetail />,
                },
                {
                    path: "giftcard-regist",
                    element: <GiftcardRegist />,
                },
                {
                    path: "giftcard-record",
                    element: <GiftcarRecord />,
                },
                //닉네임 변경
                {
                    path: "nickname",
                    element: <Nickname />,
                },
                //이용정지/회원탈퇴
                {
                    path: "suspension",
                    element: <Suspension />,
                },
                {
                    path: "withdraw",
                    element: <Withdraw />,
                },
                //메세지함
                {
                    path: "message-reception",
                    element: <MessageReception />,
                },
                {
                    path: "message-sent",
                    element: <MessageSent />,
                },
                {
                    path: "message-box",
                    element: <MessageBox />,
                },
                // 이용가이드
                {
                    path: "/user-guide-employee",
                    element: <UserGuideEmployee />,
                },
            ],
        },
        // 로그인
        {
            path: "/login",
            element: <TopMenu />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                },
            ]
        },
        //아이디찾기
        {
            path: "/find-id",
            element: <TopMenu />,
            children: [
                {
                    path: "/find-id",
                    element: <FindId />,
                },
            ]
        },
        //아이디찾기결과
        {
            path: "/find-result",
            element: <TopMenu />,
            children: [
                {
                    path: "/find-result",
                    element: <FindIdResult />,
                },
            ]
        },
        //비밀번호 찾기
        {
            path: "/find-pwd",
            element: <TopMenu />,
            children: [
                {
                    path: "/find-pwd",
                    element: <FindPwd />,
                },
            ]
        },

        //비밀번호 변경하기
        {
            path: "/pwd-change",
            element: <TopMenu />,
            children: [
                {
                    path: "/pwd-change",
                    element: <PwdChange />,
                },
            ]
        },
        //임시 비밀번호 발급
        {
            path: "/temp-pwd",
            element: <TopMenu />,
            children: [
                {
                    path: "/temp-pwd",
                    element: <TempPwd />,
                },
            ]
        },
        //회원가입
        {
            path: "/signup",
            element: <TopMenu />,
            children: [
                {
                    path: "/signup",
                    element: <Signup />,
                },
            ]
        },
        //구직자 회원가입 선택
        {
            path: "/signup-em",
            element: <TopMenu />,
            children: [
                {
                    path: "/signup-em",
                    element: <SignupEmployee />,
                },
            ]
        },
        //구직자 회원가입
        {
            path: "/signup-em-term",
            element: <TopMenu />,
            children: [
                {
                    path: "/signup-em-term",
                    element: <SignupEmployeeTerm />,
                },
            ]
        },

        //기업
        {
            path: "/",
            element: <SideBusinessMenu />,
            children: [

                // 구직자검색
                {
                    path: "/business",
                    element: <DashboardBusiness />,
                },
                // 면접의뢰 관리
                {
                    path: "/interview-mng",
                    element: <InterviewMng />,
                },
                // 기업정보 관리
                {
                    path: "/corp-mng",
                    element: <CorpInfoMng />,
                },
                // 이용정지 / 탈퇴
                {
                    path: "/suspension-business",
                    element: <SuspensionBusiness />,
                },
                //포인트 구입
                {
                    path: "point-detail-business",
                    element: <PointDetailBusiness />,
                },
                {
                    path: "/withdraw-business",
                    element: <WithdrawBusiness />,
                },
                // 이용플랜설정
                {
                    path: "/use-plan",
                    element: <UsePlan />,
                },
                //메세지함
                {
                    path: "message-reception-business",
                    element: <MessageReceptionBusiness />,
                },
                {
                    path: "message-sent-business",
                    element: <MessageSentBusiness />,
                },
                {
                    path: "message-box-business",
                    element: <MessageBoxBusiness />,
                },
                // 포인트이용이력
                {
                    path: "/point-use-record",
                    element: <PointUseRecord />,
                },
                // 비밀번호 변경
                {
                    path: "/password-change",
                    element: <PasswordChange />,
                },
                // 이용가이드
                {
                    path: "/user-guide-business",
                    element: <UserGuideBusiness />,
                },

            ],
        },
        // 회원가입
        {
        path: "/signup-business",
        element: <TopMenu />,
        children: [
            {
                path: "/signup-business",
                element: <SignUpBusiness />,
            },  
        ]
    },
    ];

    return useRoutes(routes);
}

export default Router;
