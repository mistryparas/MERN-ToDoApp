import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({
}) => {
    return (
        <div className="sidebar sidebar-nav sidebar-custom">
            <NavLink to="/todo" className="nav-link">
                    <i class="bi bi-list-task"/>
                    <span>
                        Todo
                    </span>
            </NavLink>

            <NavLink to="/crud" className="nav-link">
                    <i class="bi bi-terminal" />
                    <span>
                        CRUD
                    </span>
            </NavLink>
        </div>
    )
}

export default Sidebar;