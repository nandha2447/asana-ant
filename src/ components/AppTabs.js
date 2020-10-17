import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const AppTabs = ({ onChange }) => (
  <Tabs
    tabBarStyle={{ margin: 0 }}
    defaultActiveKey="Board"
    onChange={onChange}
  >
    <TabPane tab="List" key="List" />
    <TabPane tab="Board" key="Board" />
    <TabPane tab="Timeline" key="Timeline" />
    <TabPane tab="Calendar" key="Calendar" />
    <TabPane tab="Dashboard" key="Dashboard" />
    <TabPane tab="Progress" key="Progress" />
    <TabPane tab="Forms" key="Forms" />
    <TabPane tab="More..." key="More..." />
  </Tabs>
);

export default AppTabs;
