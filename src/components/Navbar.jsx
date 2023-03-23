import { Link } from "react-router-dom";
import { Button, Typography, Menu, Avatar } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FunctionOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

const logo = "https://cdn-icons-png.flaticon.com/512/9293/9293472.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="logo-main" src={logo} alt="logo" />

        <Typography.Title level={3} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
        <Button
          onClick={() => setActiveMenu(!activeMenu)}
          className="menu-control-container"
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FunctionOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
