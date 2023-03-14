import CallIcon from "../asset/call2.png";
import MessageIcon from "../asset/messagenotif2.png";
import ProfileIcon from "../asset/profileadd2.png";
import SmsIcon from "../asset/smsnotification2.png";
import WaIcon from "../asset/whatsapp2.png";

export const DashboardDataCard = [
  {
    title: "CALL HISTORY",
    path: "/dashboard/activ/call",
    count: 12,
    Icon: CallIcon,
  },
  {
    title: "ALL MESSAGE",
    path: "/dashboard/activ/message",
    count: 25,
    Icon: MessageIcon,
  },
  {
    title: "CHAT WHATSAPP",
    path: "/dashboard/activ/whatsapp",
    count: 2,
    Icon: WaIcon,
  },
  {
    title: "ALL INBOXES",
    path: "/dashboard/activ/email",
    count: 0,
    Icon: SmsIcon,
  },
  {
    title: "CONTACT",
    path: "/dashboard/activ/contact",
    count: 0,
    Icon: ProfileIcon,
  },
];
