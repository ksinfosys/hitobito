import { Children } from "react";
import { atom } from "recoil";

const sideMenu = atom({
    key: "sideMenu",
    default: {
        menu: [
            {
                pathname: "/",
                title: "면접 제의 확인",
            },
            {
                pathname: "/resume-regist",
                title: "이력서 관리",
                subMenu: [
                    {
                        pathname: "/resume-regist",
                        title: "이력서 등록",
                    },
                    {
                        pathname: "/resume-change",
                        title: "이력서 변경",
                    },
                ],
            },
            {
                pathname: "/page-2",
                title: "포인트 관리",
                subMenu: [
                    {
                        pathname: "/point-detail",
                        title: "포인트 확인/ 교환",
                    },
                    {
                        pathname: "/giftcard-regist",
                        title: "아마존 기프트카드 등록",
                    },
                    {
                        pathname: "/giftcard-record",
                        title: "아마존 기프트카드 교환 이력",
                    },
                ],
            },
            {
                pathname: "/nickname",
                title: "닉네임 변경",
            },
            {
                pathname: "/suspension",
                title: "이용정지 / 탈퇴",
                subMenu: [
                    {
                        pathname: "/suspension",
                        title: "이용정지",
                    },
                    {
                        pathname: "/withdraw",
                        title: "회원탈퇴",
                    },
                ],
            },
            {
                pathname: "/message-reception",
                title: "메세지함",
                subMenu: [
                    {
                        pathname: "/message-reception",
                        title: "수신 메세지함",
                    },
                    {
                        pathname: "/message-sent",
                        title: "발신 메세지함",
                    },
                    {
                        pathname: "/message-box",
                        title: "메세지 보관함",
                    },
                ],
            },
            {
                pathname: "",
                title: "로그아웃",
            },
        ],
    },
});

export { sideMenu };
