import logo from "../logo.svg";
import { links, social } from "../data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? "sidebar " : "sidebar hide_sidebar"}>
      <div className="header">
        <img src={logo} alt="" />
        <button onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="nav_links">
        <ol>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li className="link_icon" key={id}>
                {icon}
                <a href={url}>{text}</a>
              </li>
            );
            // console.log(link);
          })}
        </ol>
      </div>
      <div>
        <ol className="social">
          {social.map((each) => {
            const { id, url, icon } = each;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SideBar;
