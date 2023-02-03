import { Children } from "react";
import { atom } from "recoil";

const sideMenu = atom({
    key: "sideMenuBusiness",
    default: {
        menu: [
            {
                pathname: "/business",
                title: "구직자 검색",
            },
            {
                pathname: "/interview-mng",
                title: "면접의뢰 관리",
            },
            {
                pathname: "/corp-mng",
                title: "기업정보 관리",
            },
            {
                pathname: "/suspension-business",
                title: "이용정지 / 탈퇴",
                subMenu: [
                    {
                        pathname: "/suspension-business",
                        title: "이용정지",
                    },
                    {
                        pathname: "/withdraw-business",
                        title: "회원탈퇴",
                    },
                ],
            },
            {
                pathname: "/point-detail-business",
                title: "포인트 구입",
            },
            {
                pathname: "/use-plan",
                title: "이용플랜설정",
            },
            {
                pathname: "/message-reception",
                title: "메세지함",
                subMenu: [
                    {
                        pathname: "/message-reception-business",
                        title: "수신 메세지함",
                    },
                    {
                        pathname: "/message-sent-business",
                        title: "발신 메세지함",
                    },
                    {
                        pathname: "/message-box-business",
                        title: "메세지 보관함",
                    },
                ],
            },
            {
                pathname: "/point-use-record",
                title: "포인트이용이력",
            },
            {
                pathname: "/password-change",
                title: "비밀번호 변경",
            },
            {
                pathname: "",
                title: "로그아웃",
            },
        ],
    },
});

export { sideMenu };
