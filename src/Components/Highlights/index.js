import "./index.css";
import HighlightCard from "../HighlightCard";

const highlightsCardList = [
  {
    id: "TOTAL_REVINUES",
    title: "Total Revenues",
    figure: "$2,129,430",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710702927/Vector_8_ezwssk.png",
    bgColor: "#ddefe0",
    imgHeight: "24px",
    imgWidth: "26px",
  },
  {
    id: "TOTAL_TRANSACTIONS",
    title: "Total Transactions",
    figure: "1,520",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710703056/total_transactions_icon_sifpow.png",
    bgColor: "#f4ecdd",
    imgHeight: "24px",
    imgWidth: "20px",
  },
  {
    id: "TOTAL_LIKES",
    title: "Total Likes",
    figure: "9,721",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710703143/Vector_9_fb5kfq.png",
    bgColor: "#efdada",
    imgHeight: "24px",
    imgWidth: "24px",
  },
  {
    id: "TOTAL_USERS",
    title: "Total Users",
    figure: "892",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1710703205/Vector_10_ijh4ca.png",
    bgColor: "#dee0ef",
    imgHeight: "24px",
    imgWidth: "36px",
  },
];

const Highlights = () => {
  return (
    <ul className="highlights">
      {highlightsCardList.map((eachCard) => (
        <HighlightCard key={eachCard.id} eachCard={eachCard} />
      ))}
    </ul>
  );
};

export default Highlights;
