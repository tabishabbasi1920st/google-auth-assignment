import "./index.css";
import { PieChart, Pie, Cell } from "recharts";
import { GoDotFill, GoTab } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
];

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
};

const COLORS = ["#98D89E", "#EE8484", "#F6DC7D"];

const TopProductsChart = () => {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  useEffect(() => {
    const fetchAvtivityChartData = async () => {
      try {
        setApiStatus(apiStatusConstants.inProgress);
        const apiUrl = "https://dummyjson.com/products";
        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          const { products } = fetchedData;
          console.log(products);
          setData(products.slice(0, 3));
          setApiStatus(apiStatusConstants.success);
        }
      } catch (err) {
        console.error("Error while fetching line chart data", err);
        setApiStatus(apiStatusConstants.failure);
      }
    };

    fetchAvtivityChartData();
  }, []);

  return (
    <div className="pie-chart-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="top-products-para">Top Products</p>
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "12px",
          }}
        >
          May June 2021 <IoIosArrowDown />
        </p>
      </div>
      <div className="chart-and-data-container">
        <PieChart width={165} height={165}>
          <Pie
            data={data}
            dataKey="price"
            nameKey="title"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={COLORS[0]}
          />
        </PieChart>
        {apiStatus === apiStatusConstants.success && (
          <ul className="pie-chart-data-container">
            <li>
              <div>
                <GoDotFill color={"#98D89E"} />
                <span>Tees</span>
              </div>
              <p>{`${data[0].price}`}</p>
            </li>
            <li>
              <div>
                <GoDotFill color="#F6DC7D" />
                <span>Pants</span>
              </div>
              <p>{`${data[1].price}`}</p>
            </li>
            <li>
              <div>
                <GoDotFill color="#EE8484" />
                <span>Hoodies</span>
              </div>
              <p>{`${data[2].price}`}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopProductsChart;
