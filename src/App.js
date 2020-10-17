import React, { useState } from "react";
import Layout from "antd/es/layout";
import Typography from "antd/es/typography";
import "./App.css";
import { Avatar, Row, Col, Button, Divider } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import AppTabs from "./ components/AppTabs";
import SubHeaderContent from "./ components/SubHeaderContent";
import TaskCard from "./ components/TaskCard";
import TaskDetails from "./ components/TaskDetails";
import initialData from "./data/initial-data";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const App = () => {
  const [showBoard, setShowBoard] = useState(true);
  const [boardData, setBoardData] = useState(initialData);
  const [activeTaskId, setActiveTaskId] = useState();

  const changeTab = (activeKey) => {
    setShowBoard(activeKey === "Board");
  };

  const onTaskCardClick = (id) => {
    setActiveTaskId(id);
  };

  const onClose = () => setActiveTaskId("");

  const columns = boardData.columnOrder.map((col) => boardData.columns[col]);
  const tasks = boardData.tasks;

  return (
    <div className="App">
      <Layout style={{ height: "100%" }}>
        <Header
          style={{
            padding: 0,
            background: "white",
            height: "fit-content",
            lineHeight: "22px",
          }}
        >
          <Layout>
            <Sider
              width="fit-content"
              style={{ background: "white ", padding: "5px 20px 0px 20px" }}
            >
              <Avatar
                style={{ background: "purple", borderRadius: 16 }}
                shape="square"
                icon={<UserOutlined />}
                size={64}
              />
            </Sider>
            <Content style={{ background: "white", height: "100%" }}>
              <Content>
                <Title level={3} style={{ marginBottom: 0 }}>
                  {boardData.projectName}
                </Title>
              </Content>
              <AppTabs onChange={changeTab} />
            </Content>
          </Layout>
          <Divider style={{ margin: 0 }} />
        </Header>
        {showBoard && (
          <Layout>
            <Header
              style={{
                background: "white",
                height: 30,
                lineHeight: "22px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SubHeaderContent />
            </Header>
            <Content className="container-background">
              {activeTaskId && (
                <>
                  <TaskDetails
                    task={tasks[activeTaskId]}
                    onClose={onClose}
                    projectName={boardData.projectName}
                  />
                </>
              )}
              <Row>
                {columns.map((col) => {
                  return (
                    <Col className="mr-20">
                      <Row justify="space-between" className="mb-20">
                        <Row>{col.title}</Row>
                        <Row align="middle">
                          <PlusOutlined
                            style={{ fontSize: 18, cursor: "pointer" }}
                          />
                          <EllipsisOutlined
                            style={{ fontSize: 18, cursor: "pointer" }}
                            className="ml-10"
                          />
                        </Row>
                      </Row>
                      {col.taskIds.map((taskId) => {
                        const {
                          id,
                          title,
                          status,
                          priority,
                          avatarImg,
                          dueDate,
                        } = tasks[taskId];
                        return (
                          <Col>
                            <TaskCard
                              id={id}
                              onClick={onTaskCardClick}
                              title={title}
                              status={status}
                              priority={priority}
                              avatarImg={avatarImg}
                              dueDate={dueDate}
                            />
                          </Col>
                        );
                      })}
                      <Button className="add-task-button">+ Add Task</Button>
                    </Col>
                  );
                })}
              </Row>
            </Content>
          </Layout>
        )}
      </Layout>
    </div>
  );
};

export default App;
