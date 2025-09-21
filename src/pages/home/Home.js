import Navbar from "../../components/navbar/Navbar";
import Image from "../../components/image/Image";
import Icon from "../../components/icon/Icon";
import { Outlet, useLocation } from "react-router-dom";
import { List } from "../../components/list/List";
import { ThemeMode } from "../../contexts/mode";
import "./Home.css";
import { useContext } from "react";
export default function Home() {
  const { changeMode } = useContext(ThemeMode);
  const location = useLocation();
  let isOrderPageActive = false;
  if (location.pathname === "/orders") isOrderPageActive = true;
  const pageItems = [
    {
      id: 1,
      itemName: "User Profile",
      iconName: "IdentificationBadge",
      children: [
        {
          id: 2,
          itemName: "Overview",
        },
        {
          id: 3,
          itemName: "Projects",
        },
        {
          id: 4,
          itemName: "Campaigns",
        },
        {
          id: 5,
          itemName: "Documents",
        },
        {
          id: 6,
          itemName: "Followers",
        },
      ],
    },
    {
      id: 7,
      itemName: "Account",
      iconName: "IdentificationCard",
      children: [],
    },
    {
      id: 8,
      itemName: "Corporate",
      iconName: "UsersThree",
      children: [],
    },
    {
      id: 9,
      itemName: "Blog",
      iconName: "Notebook",
      children: [],
    },
    {
      id: 10,
      itemName: "Social",
      iconName: "ChatsTeardrop",
      children: [],
    },
  ];
  const dashboardItems = [
    {
      id: 1,
      itemName: "Default",
      iconName: "ChartPieSlice",
      children: [],
    },
    {
      id: 2,
      itemName: "eCommerce",
      iconName: "ShoppingBagOpen",
      children: [],
      routePath: "/orders",
    },
    {
      id: 3,
      itemName: "Projects",
      iconName: "FolderNotch",
      children: [],
    },
    {
      id: 4,
      itemName: "Online Courses",
      iconName: "BookOpen",
      children: [],
    },
  ];
  const favoritesItems = [
    {
      id: 1,
      itemName: "Overview",
    },
    {
      id: 2,
      itemName: "Projects",
    },
  ];
  const notificationsItems = [
    {
      id: 1,
      title: "You have a bug that needs to be fixed.",
      description: "Just now",
      isIcon: true,
      iconName: "BugBeetle",
    },
    {
      id: 2,
      title: "New user registered",
      description: "59 minutes ago",
      isIcon: true,
      iconName: "User",
    },
    {
      id: 3,
      title: "You have a bug that needs to be fixed.",
      description: "12 hours ago",
      isIcon: true,
      iconName: "BugBeetle",
    },
    {
      id: 4,
      title: "Andi Lane subscribed to you",
      description: "Today, 11:59 AM",
      isIcon: true,
      iconName: "Broadcast",
    },
  ];
  const activitiesItems = [
    {
      id: 1,
      title: "You have a bug that needs to be fixed.",
      description: "Just now",
      isImage: true,
      imageName: "Micheal",
    },
    {
      id: 2,
      title: "Released a new version",
      description: "59 minutes ago",
      isImage: true,
      imageName: "Jennifer",
    },
    {
      id: 3,
      title: "Submitted a bug",
      description: "12 hours ago",
      isImage: true,
      imageName: "Emily",
    },
    {
      id: 4,
      title: "Modified A data in Page X",
      description: "Today, 11:59 AM",
      isImage: true,
      imageName: "James",
    },
    {
      id: 5,
      title: "Deleted a page in Project X",
      description: "Feb 2, 2023",
      isImage: true,
      imageName: "William",
    },
  ];
  const contactItems = [
    {
      id: 1,
      title: "Natali Craig",
      isImage: true,
      imageName: "Natali",
    },
    {
      id: 2,
      title: "Drew Cano",
      isImage: true,
      imageName: "Drew",
    },
    {
      id: 3,
      title: "Orlando Diggs",
      isImage: true,
      imageName: "Orlando",
    },
    {
      id: 4,
      title: "Andi Lane",
      isImage: true,
      imageName: "Andi",
    },
    {
      id: 5,
      title: "Kate Morrison",
      isImage: true,
      imageName: "Kate",
    },
    {
      id: 6,
      title: "Koray Okumus",
      isImage: true,
      imageName: "Koray",
    },
  ];
  return (
    <div
      className="home"
      style={{
        grid: isOrderPageActive
          ? "auto 1fr auto / 17% 1fr"
          : "auto 1fr auto / 17% 1fr 21%",
      }}
    >
      <nav className="left-side-nav">
        <div className="profile-section">
          <Image name="profile" />
          <p>ByeWind</p>
        </div>
        <div className="recent-section">
          <div className="recent-section-heading">
            <p>Favorites</p>
            <p style={{ color: "var(--list-marker)" }}>Recently</p>
          </div>
          <ul className="recent-section-items">
            {favoritesItems.map((item) => (
              <li key={item.id}>{item.itemName}</li>
            ))}
          </ul>
        </div>
        <Navbar sectionName={"Dashboards"} listItems={dashboardItems} />
        <Navbar sectionName={"Pages"} listItems={pageItems} />
      </nav>
      <div className="main-content">
        <div className="top-content">
          <div className="top-content-section">
            <Icon name="Sidebar" />
            <Icon name="Star" />
            <p>Dashboards / {isOrderPageActive ? "Orders" : "Default"}</p>
          </div>
          <div className="top-content-section">
            <div className="input-wrapper">
              <Icon name="Search" />
              <input placeholder="Search" name="search"></input>
              <Icon name="InputSuffix" />
            </div>
            <button onClick={changeMode}>
              <Icon name="Sun" />
            </button>
            <Icon name="ClockCounterClockwise" />
            <Icon name="Bell" />
            <Icon name="Sidebar" />
          </div>
        </div>
        <Outlet />
      </div>
      <nav
        className="right-side-nav"
        style={{ display: isOrderPageActive ? "none" : "block" }}
      >
        <List listName={"Notifications"} listItems={notificationsItems} />
        <List listName={"Activities"} listItems={activitiesItems} />
        <List listName={"Contacts"} listItems={contactItems} />
      </nav>
    </div>
  );
}
