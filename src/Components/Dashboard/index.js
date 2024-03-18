import "./index.css";
import Header from "../Header";
import Highlights from "../Highlights";
import ActivityChart from "../ActivityChart";
import TopProductsChart from "../TopProductsChart";
import TodaySchedule from "../TodaySchedule";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Highlights />
      <ActivityChart />
      <div className="pie-chart-and-schedule-container">
        <TopProductsChart />
        <TodaySchedule />
      </div>
    </div>
  );
};

export default Dashboard;
