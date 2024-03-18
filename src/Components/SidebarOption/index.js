import "./index.css";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";

const SidebarOption = ({ eachOption }) => {
  const { id, name, imageUrl } = eachOption;

  const { selectedOptionId, setSelectedOptionId } = useContext(SidebarContext);

  const handleClick = () => {
    setSelectedOptionId(id);
  };

  return (
    <li key={id} className="sidebar-item" onClick={handleClick}>
      <img className="sidebar-item-img" src={imageUrl} alt={name} />
      <p
        className={`sidebar-item-name ${
          id === selectedOptionId ? "selected-option" : ""
        }`}
      >
        {name}
      </p>
    </li>
  );
};

export default SidebarOption;
