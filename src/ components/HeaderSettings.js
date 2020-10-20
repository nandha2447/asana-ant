import React from "react";
import { Avatar, Button, Divider } from "antd";
import {
  SearchOutlined,
  UsergroupAddOutlined,
  PlusCircleTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const HeaderSettings = () => (
  <div className="flex-center h-100 bg-white" style={{ display: "flex" }}>
    <Avatar.Group className="mr-10">
      <Avatar className="bg-orange">AB</Avatar>
      <Avatar className="bg-purple">CD</Avatar>
      <Avatar className="bg-purple">EF</Avatar>
      <Avatar className="bg-orange">GH</Avatar>
      <Avatar className="bg-purple">HI</Avatar>
    </Avatar.Group>
    <Button icon={<UsergroupAddOutlined />}>Share</Button>
    <Divider type="vertical" />
    <Button className="mr-10 br-16" icon={<SearchOutlined />}>
      Search
    </Button>
    <PlusCircleTwoTone
      twoToneColor="orange"
      style={{ fontSize: 28, marginRight: 10 }}
    />
    <QuestionCircleOutlined style={{ fontSize: 28, marginRight: 10 }} />
    <Button className="gradient-button mr-10">Upgrade</Button>
    <Avatar className="bg-purple mr-10">SK</Avatar>
  </div>
);

export default HeaderSettings;
