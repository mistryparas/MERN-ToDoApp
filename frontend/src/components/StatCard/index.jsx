import "./style.scss";

export const StatCard = ({ title, value }) => (
    <div className="card card-plain stat-card">
        <div className="card-title">
            {title}
        </div>
        <div className="card-content">
            {value}
        </div>
    </div>
)