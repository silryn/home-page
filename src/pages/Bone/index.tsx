import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomeOutlined, UserOutlined, ReadOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { Anim } from "../Anim";
import HomePage from "../Home";
import AboutPage from "../About";

const { Header, Content, Footer } = Layout;

const App: React.FC = () =>
  Anim(
    <Router>
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.header_content}>
            <div className={styles.logo}>Silryn</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              className={styles.menu}
              disabledOverflow
              items={[
                {
                  key: "home",
                  icon: <HomeOutlined />,
                  label: <Link to="/">Home</Link>,
                },
                {
                  key: "blog",
                  icon: <ReadOutlined />,
                  label: (
                    <a
                      href="https://blog.silryn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                  ),
                },
                {
                  key: "about",
                  icon: <UserOutlined />,
                  label: <Link to="/about">About Me</Link>,
                },
              ]}
            />
          </div>
        </Header>
        <Content className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
        <Footer className={styles.footer}>Silryn · 澹隐</Footer>
      </Layout>
    </Router>
  );

export default App;
