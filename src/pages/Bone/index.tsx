import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Typography } from "antd";
import styles from "./index.module.less";
import { Anim } from "../Anim";
import IndexPage from "..";

const { Header, Content, Footer } = Layout;

const navs = [
  {
    title: "Home",
    path: "/",
  },
];

const App: React.FC = () =>
  Anim(
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={new Array(navs.length).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: navs[index].title,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "50px 0",
          minHeight: "calc(100vh - 64px - 70px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row
          gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
          style={{ maxWidth: "1000px", width: "100%" }}
          className={styles.row_center}
        >
          <Col span={22}>
            <div className={styles.hero_section}>
              <Typography.Title level={1} className={styles.main_title}>
                Silryn · 澹隐
              </Typography.Title>
              <Typography.Paragraph className={styles.bio}>
                A heart long at ease, flowing like a clear, tranquil stream.
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={22}>
            <div className={styles.intro_section}>
              <Typography.Paragraph className={styles.intro_text}>
                Hello there, I'm Silryn · 澹隐.
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.intro_text}>
                I live in a quiet and serene place, enjoying a peaceful
                life—perhaps like a free-roaming cat.
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.intro_text}>
                I love computers, writing letters, exchanging postcards, and
                trying out new things I've never done before!
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.contact}>
                If you'd like to get in touch, you can reach me at{" "}
                <Typography.Link
                  href="mailto:hi@silryn.com"
                  className={styles.email_link}
                >
                  hi@silryn.com
                </Typography.Link>
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={22}>
            <div className={styles.cover_card}>
              <IndexPage></IndexPage>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>Silryn · 澹隐</Footer>
    </Layout>
  );

export default App;
