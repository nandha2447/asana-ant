import React from "react";
import Layout from "antd/es/layout";
import Typography from "antd/es/typography";
import { Avatar } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { StatusTag, PriorityTag } from "./Tag";
const { Content, Sider } = Layout;
const { Text } = Typography;

export const TaskTable = ({ task, projectName }) => {
  const { title, status, priority, dueDate, avatarImg } = task;
  return (
    <div className="taskTable-container mb-40">
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Assignee</Text>
        </Sider>
        <Content className="bg-white">
          <Avatar className="bg-orange">{avatarImg}</Avatar>
        </Content>
      </Layout>
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Due date</Text>
        </Sider>
        <Content className="bg-white d-flex">
          <CalendarOutlined className="calendar-icon" />
          <Text strong type="danger">
            {dueDate}
          </Text>
        </Content>
      </Layout>
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Projects</Text>
        </Sider>
        <Content className="bg-white">
          <Text strong>{projectName}</Text>
        </Content>
      </Layout>
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Task Progress</Text>
        </Sider>
        <Content className="bg-white">
          <StatusTag name={status} />
        </Content>
      </Layout>
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Priority</Text>
        </Sider>
        <Content className="bg-white">
          <PriorityTag name={priority} />
        </Content>
      </Layout>
      <Layout className="my-10">
        <Sider className="bg-white">
          <Text type="secondary">Description</Text>
        </Sider>
        <Content className="bg-white">
          <Text strong>{`Description of ${title}`}</Text>
        </Content>
      </Layout>
    </div>
  );
};
