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
      <Content style={{ padding: "0px" }}>
        <Row
          gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
          align="middle"
          justify="center"
          style={{ maxWidth: "1200px" }}
          className={styles.row_center}
        >
          <Col span={23}>
            <Breadcrumb style={{ margin: "8px 0" }}>
              <Breadcrumb.Item>Silryn</Breadcrumb.Item>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={23}>
            <Typography>
              <Typography.Title level={2}>Silryn · 澹隐</Typography.Title>
              <Typography.Paragraph type="secondary">
                A heart long at ease, flowing like a clear, tranquil stream.
              </Typography.Paragraph>
              <Typography.Paragraph>
                Hello there, I'm Silryn · 澹隐.
              </Typography.Paragraph>
              <Typography.Paragraph>
                I live in a quiet and serene place, enjoying a peaceful
                life—perhaps like a free-roaming cat.
              </Typography.Paragraph>
              <Typography.Paragraph>
                I love computers, writing letters, exchanging postcards, and
                trying out new things I've never done before!
              </Typography.Paragraph>
              <Typography.Paragraph>
                If you'd like to get in touch, you can reach me at{" "}
                <Typography.Link href="mailto:hi@silryn.com">
                  hi@silryn.com
                </Typography.Link>
                .
              </Typography.Paragraph>
            </Typography>
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
