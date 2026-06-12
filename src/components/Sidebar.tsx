import { Link } from "react-router-dom";
import "./Sidebar.css";

type MenuItem = {
  name: string;
  path: string;
};

type SidebarProps = {
  menu: MenuItem[];
  isOpen: boolean;
};

export default function Sidebar({ menu, isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
