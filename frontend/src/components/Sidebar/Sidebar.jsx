import { NavLink } from "react-router-dom";
import { useIdentity } from "../../hooks/IdentityProvider";
import "./sidebar.scss";

const Sidebar = ({ sidebarOpen, setsidebarOpen }) => {
    const { isLoggedIn, logout } = useIdentity();
    return (
        <div 
            onMouseEnter={() => { setsidebarOpen(true) }} 
            onMouseLeave={() => { setsidebarOpen(false) }} 
            className={`sidebar sidebar-nav sidebar-custom ${sidebarOpen ? "sidebar-open" : "sidebar-close"}`}
        >
            <NavLink to="/todo" className="nav-link">
                <i className="bi bi-list-task" />
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

            <div className="hidden-sm-up">
                {!isLoggedIn &&
                    <NavLink to="/login" className="nav-link">
                        <i className="bi bi-lock" />
                        <span>
                            Login
                        </span>
                    </NavLink>
                }
                {isLoggedIn &&
                    <>
                        <NavLink to="/swagger" className="nav-link">
                            <i className="bi bi-question-circle" />
                            <span>
                                Swagger
                            </span>
                        </NavLink>
                        <NavLink 
                            to="/logout" 
                            className="nav-link" 
                            onClick={e => { e.preventDefault(); logout(); }}
                        >
                            <i className="bi bi-lock" />
                            <span>
                                Logout
                            </span>
                        </NavLink>
                    </>
                }
            </div>
        </div>
    )
}

export default Sidebar;