import React, { useState } from "react";

export const SidebarContext = React.createContext();

const SidebarContextProvider = ({ children }) => {
  const [selectedOptionId, setSelectedOptionId] = useState("DASHBOARD");

  return (
    <SidebarContext.Provider
      value={{
        selectedOptionId,
        setSelectedOptionId,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
