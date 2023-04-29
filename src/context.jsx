import { createContext, useContext, useState } from "react";

const globalContext = createContext();

//custom hook
export const useGlobalContext = () => useContext(globalContext);

export function AppGlobalContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState();
  const [isModelOpen, setIsModelOpen] = useState();
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openModal = () => {
    setIsModelOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeModal = () => {
    setIsModelOpen(false);
  };
  return (
    <globalContext.Provider
      value={{
        isModelOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
