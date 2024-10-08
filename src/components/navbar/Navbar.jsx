import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rohan Dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/rohanmathewalex/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://medium.com/@rohanmathewalex">
            <img src="/medium.png" alt="" />
          </a>
          <a href="https://github.com/rohanmathewalex">
            <img src="/github.png" alt="" />
          </a>
          <a href="#">
            <img src="/reddit.png" alt="" />
          </a>
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
