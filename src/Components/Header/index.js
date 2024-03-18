import "./index.css";
import { SidebarContext } from "../Context/SidebarContext";
import { useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { LineWave } from "react-loader-spinner";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
};

export default function Header() {
  const [userInfo, setUserInfo] = useState(null);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const { selectedOptionId, setSelectedOptionId } = useContext(SidebarContext);

  useEffect(() => {
    // Retrieve user information using the access token
    const accessToken = Cookies.get("authToken");
    fetchUserInfo(accessToken);
  }, []);

  const fetchUserInfo = async (accessToken) => {
    try {
      setApiStatus(apiStatusConstants.inProgress);
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo", // Userinfo endpoint
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
          },
        }
      );

      if (userInfoResponse.ok) {
        const userData = await userInfoResponse.json();
        setUserInfo(userData); // Set the user information in state
        setApiStatus(apiStatusConstants.success);
      } else {
        console.error("Failed to fetch user information");
        setApiStatus(apiStatusConstants.failure);
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const renderSearchbar = () => {
    return (
      <div className="searchbar">
        <input placeholder="Search..." className="search-input" type="search" />
        <img
          className="lens-img"
          src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1710700725/Search_icon_wyrqiw.png"
          alt="search"
        />
      </div>
    );
  };

  const renderLoader = () => {
    return (
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    );
  };

  const renderFailureView = () => {
    return <div>Error</div>;
  };

  const renderSuccessView = () => {
    return <img className="profile-img" src={userInfo.picture} alt="profile" />;
  };

  const renderAppropriateView = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.inProgress:
        return renderLoader();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div className="header">
      <h2 className="sidebar-selected-option-heading">{selectedOptionId}</h2>
      <ul className="nav-ul">
        <li>{renderSearchbar()}</li>
        <li>
          <img
            className="bell-img"
            src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1710700979/Vector_7_obhhpo.png"
            alt="notification"
          />
        </li>
        <li>
          <div className="profile-img-container">{renderAppropriateView()}</div>
        </li>
      </ul>
    </div>
  );
}
