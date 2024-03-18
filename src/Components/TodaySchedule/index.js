import "./index.css";
import { IoIosArrowForward } from "react-icons/io";

const TodaySchedule = () => {
  return (
    <div className="today-schedule-container">
      <div className="schedule-top-container">
        <p className="today-schedule-para">Today's Schedule</p>
        <p className="see-all-today-schedule">
          See All <IoIosArrowForward />
        </p>
      </div>
      <div className="schedule-item1">
        <p className="schedule-title">Meeting with suppliers from kuta Bali</p>
        <p className="schedule-time">14.00-15.00</p>
        <p className="schedule-location">at Sunset Road, Kuta, Bali</p>
      </div>
      <div className="schedule-item2">
        <p className="schedule-title">Check operation at Giga Factory 1</p>
        <p className="schedule-time">18.00-20.00</p>
        <p className="schedule-location">at Central Jakarta</p>
      </div>
    </div>
  );
};

export default TodaySchedule;
