import React from "react";
import { Button, Spin, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { react } from "@babel/types";

export default function LoadingPage() {
  const refreshPage = () => {
    setButtonRefreshing(true);
    window.location.reload();
  };
  const [showButton, setshowButton] = React.useState(true);
  const [buttonRefreshing, setButtonRefreshing] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => {
      setshowButton(false);
    }, 200);
    return () => {
      clearTimeout(t);
    };
  }, [showButton]);
  return (
    <div className={styles.full_screen}>
      <div className={styles.center}>
        <Spin tip="Loading..." size="large" />
        <br />
        <Typography className={showButton ? styles.transparent : undefined}>
          <Typography.Paragraph type="secondary">
            No response for a long time? Try refreshing the page:
          </Typography.Paragraph>
        </Typography>
        <Button
          onClick={refreshPage}
          type="dashed"
          loading={buttonRefreshing}
          icon={<SyncOutlined />}
          className={showButton ? styles.transparent : undefined}
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
}
