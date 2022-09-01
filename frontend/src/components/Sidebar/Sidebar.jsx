import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({sidebarOpen, setsidebarOpen}) => {
    return (
        <div onMouseEnter={() => {setsidebarOpen(true)}} onMouseLeave={() => {setsidebarOpen(false)}} className={`sidebar sidebar-nav sidebar-custom ${sidebarOpen ? "sidebar-open" : "sidebar-close"}`}>
            <NavLink to="/todo" className="nav-link">
                    <i className="bi bi-list-task"/>
                    <span>
                        Todo
                    </span>
            </NavLink>

            <NavLink to="/crud" className="nav-link">
                    <i className="bi bi-terminal" />
                    <span>
                        CRUD
                    </span>
            </NavLink>
        </div>
    )
}

export default Sidebar;