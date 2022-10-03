import React, { useEffect } from "react";
import "./Home.scss";
import { useIdentity } from "../../hooks/IdentityProvider";
import { StatCard } from "../../components/StatCard";
import { useState } from "react";
import { getStats } from "../../services/todo-services";

export default function Home() {
  const { user } = useIdentity()
  const [stats, setStats] = useState({
    "total": 0,
    "completed": 0,
    "pending": 0
  });
  useEffect(() => {
    (async () => {
      let stats = await getStats()
      stats = stats.data;
      setStats(stats);
    })()
    return () => { }
  }, [user])

  return (
    <div className="home container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="flex stats-container">
            <StatCard
              title="Total Todos"
              value={stats.total}
            />
            <StatCard
              title="Completed Todos"
              value={stats.completed}
            />
            <StatCard
              title="Pending Todos"
              value={stats.pending}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
