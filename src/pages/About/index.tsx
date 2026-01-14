import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./index.module.less";

const AboutPage: React.FC = () => {
  return (
    <Row
      gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
      align="middle"
      justify="center"
      style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}
    >
      <Col span={22}>
        <div className={styles.about_hero}>
          <Typography.Title level={1} className={styles.about_title}>
            About Me
          </Typography.Title>
          <Typography.Paragraph className={styles.about_subtitle}>
            Get to know more about Silryn · 澹隐
          </Typography.Paragraph>
        </div>
      </Col>
      <Col span={22}>
        <div className={styles.about_content}>
          <Typography.Title level={3} className={styles.section_title}>
            Who I Am
          </Typography.Title>
          <Typography.Paragraph className={styles.about_text}>
            Hello there, I'm Silryn · 澹隐. I live in a quiet and serene place,
            enjoying a peaceful life—perhaps like a free-roaming cat.
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.about_text}>
            I love computers, writing letters, exchanging postcards, and trying
            out new things I've never done before!
          </Typography.Paragraph>

          <Typography.Title level={3} className={styles.section_title}>
            What I Do
          </Typography.Title>
          <Typography.Paragraph className={styles.about_text}>
            I'm passionate about technology and creative expression. Whether
            it's coding, designing, or exploring new ideas, I enjoy the process
            of bringing thoughts to life.
          </Typography.Paragraph>

          <Typography.Title level={3} className={styles.section_title}>
            Get In Touch
          </Typography.Title>
          <Typography.Paragraph className={styles.about_text}>
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
    </Row>
  );
};

export default AboutPage;
