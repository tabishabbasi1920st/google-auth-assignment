import "./index.css";
import SidebarOption from "../SidebarOption";

const sidebarOptionsList = [
  {
    id: "DASHBOARD",
    name: "Dashboard",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710693296/dashboard_icon_kfpquz.png",
  },
  {
    id: "TRANSACTION",
    name: "Transaction",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710693321/transaction_icon_lterrq.png",
  },
  {
    id: "SCHEDULES",
    name: "Schedule",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710693341/schedule_icon_w7xhyz.png",
  },
  {
    id: "USERS",
    name: "Users",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710693360/user_icon_tqjmkd.png",
  },
  {
    id: "SETTINGS",
    name: "Settings",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710693372/setting_icon_fqfted.png",
  },
];

export default function Sidebar() {
  return (
    <ul className="sidebar">
      <h1 className="sidebar-board-heading">Board.</h1>
      {sidebarOptionsList.map((eachOption) => (
        <SidebarOption key={eachOption.id} eachOption={eachOption} />
      ))}
    </ul>
  );
}
