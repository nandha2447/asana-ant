import React from "react";
import {
  CheckCircleOutlined,
  FilterOutlined,
  VerticalAlignMiddleOutlined,
  RiseOutlined,
  AppstoreAddOutlined,
  BarsOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

const SubHeaderItem = ({ icon, title }) => (
  <div className="ml-20">
    {icon}
    <span className="ml-5">{title}</span>
  </div>
);

const SubHeaderContent = () => (
  <Row justify="space-between" className="w-100">
    <Col>Created on Sep 1</Col>
    <Col>
      <Row>
        <div style={{ marginLeft: 20, color: "purple" }}>Send Feedback</div>
        <SubHeaderItem
          icon={<CheckCircleOutlined />}
          title="Incomplete tasks"
        />
        <SubHeaderItem icon={<FilterOutlined />} title="Filter" />
        <SubHeaderItem icon={<VerticalAlignMiddleOutlined />} title="Sort" />
        <SubHeaderItem icon={<RiseOutlined />} title="Rules" />
        <SubHeaderItem icon={<AppstoreAddOutlined />} title="Apps" />
        <SubHeaderItem icon={<BarsOutlined />} title="Fields" />
        <SubHeaderItem icon={<EllipsisOutlined />} />{" "}
      </Row>
    </Col>
  </Row>
);

export default SubHeaderContent;
