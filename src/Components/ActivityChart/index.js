import "./index.css";
import React, { useRef, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const ActivityChart = () => {
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(null); // Initial width
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAvtivityChartData = async () => {
      try {
        const apiUrl = "https://dummyjson.com/products";
        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          const { products } = fetchedData;
          setData(products);
        }
      } catch (err) {
        console.error("Error while fetching line chart data", err);
      }
    };

    fetchAvtivityChartData();

    const resizeListener = () => {
      if (chartRef.current) {
        const newWidth = chartRef.current.offsetWidth;
        setChartWidth(newWidth);
      }
    };

    // Calculate and set initial width
    if (chartRef.current) {
      const initialWidth = chartRef.current.offsetWidth;
      setChartWidth(initialWidth);
    }

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="activity-chart" ref={chartRef}>
      <div className="chart-top-container">
        <div className="chart-left-container">
          <p className="chart-activities-para">Activities</p>
        </div>
        <div className="chart-right-container">
          <p className="guest">
            <GoDotFill color={"#e9a0a0"} />
            Guest
          </p>
          <p className="guest">
            <GoDotFill color={"#9bdd7c"} />
            User
          </p>
        </div>
      </div>
      {chartWidth && (
        <LineChart
          style={{ paddingRight: "10px" }}
          width={chartWidth}
          height={280}
          data={data}
        >
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <Line type="monotone" dataKey="stock" stroke="#82ca9d" />
          <XAxis dataKey="title" />
          <YAxis />
        </LineChart>
      )}
    </div>
  );
};

export default ActivityChart;
