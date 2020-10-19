import React from "react";
import Layout from "antd/es/layout";
import Typography from "antd/es/typography";

const { Content } = Layout;
const { Title } = Typography;
const PlaceHolder = () => (
  <Content
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <Title>This feature is coming soon</Title>
  </Content>
);

export default PlaceHolder;
