import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({

}) => {
    return (
        <div className="sidebar sidebar-nav sidebar-custom">
            <Link to="/apiPage" className="nav-link">
                    <i className="fa fa-user" />
                    <span>
                        Api Page
                    </span>
            </Link>
        </div>
    )
}

export default Sidebar;