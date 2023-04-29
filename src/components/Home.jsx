import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  // console.log(closeModal);
  return (
    <div>
      <button onClick={openSidebar} className="toggle_container">
        <FaBars className="toggle_sidebar"></FaBars>
      </button>

      <button onClick={openModal} className="toggle_modal">
        Show Modal
      </button>
    </div>
  );
};

export default Home;
