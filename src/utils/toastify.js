import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default Toastify;
