import React, { useState } from "react";
import { Button, Drawer, Row, Col, Divider, Avatar, Layout, Input } from "antd";
import {
  SnippetsOutlined,
  TagOutlined,
  LikeOutlined,
  VerticalLeftOutlined,
  EllipsisOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  WechatOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Typography from "antd/es/typography";
import { TaskTable } from "./TaskTable";
import { SettingsMenu } from "./SettingsMenu";

const { Text, Title, Link } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const SubTask = ({ name, dueDate }) => (
  <>
    <Row justify="space-between">
      <Row align="middle">
        <CheckCircleOutlined className="mr-10" />
        <Text strong>{name}</Text>
      </Row>
      <Row align="middle">
        <Text strong type="danger" className="mr-10">
          {dueDate}
        </Text>
        <Avatar style={{ backgroundColor: "purple", marginRight: 20 }}>
          SY
        </Avatar>
        <WechatOutlined style={{ fontSize: 24 }} />
      </Row>
    </Row>
    <Divider style={{ margin: "6px 0px" }} />
  </>
);

const SubTasks = ({ dueDate }) => {
  return (
    <div style={{ paddingLeft: 24, paddingRight: 24 }}>
      <Text type="secondary">Subtasks</Text>
      <Divider style={{ margin: "6px 0px 6px" }} />
      <SubTask name="Create a task list" dueDate={dueDate} />
      <SubTask
        name="Group the tasks and create navigation model"
        dueDate={dueDate}
      />
      <SubTask name="Finalisation of IA" dueDate={dueDate} />
      <Row className="mt-20">
        <Text type="secondary">+ Add subtask</Text>
      </Row>
    </div>
  );
};

const TaskDetailsHeader = ({ onClose, toggleMenu }) => {
  return (
    <Row justify="space-between">
      <Button width={100}>
        <CheckOutlined />
        Mark Complete
      </Button>
      <Row align="middle">
        <SnippetsOutlined className="mr-20 font-20" />
        <TagOutlined className="mr-20 font-20" />
        <LikeOutlined className="mr-20 font-20" />
        <EllipsisOutlined onClick={toggleMenu} className="mr-20 font-20" />
        <VerticalLeftOutlined onClick={onClose} className="font-20" />
      </Row>
    </Row>
  );
};

const TaskDetails = ({ task, projectName, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <Drawer
      visible={!!task}
      destroyOnClose
      title={
        <TaskDetailsHeader
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          onClose={onClose}
        />
      }
      width={640}
      onClose={onClose}
      closable={false}
      mask={false}
      bodyStyle={{ padding: 0 }}
    >
      {showMenu && <SettingsMenu />}
      <Col
        className="h-100"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Title
          style={{ paddingTop: 24, paddingLeft: 24, paddingRight: 24 }}
          level={2}
        >
          {task.title}
        </Title>
        <TaskTable task={task} projectName={projectName} />
        <SubTasks dueDate={task.dueDate} />
        <Content
          style={{
            flex: 1,
            backgroundColor: "#f0f2f5",
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 12,
            paddingBottom: 12,
            marginTop: 100,
          }}
        >
          <div className="h-100" style={{ position: "relative" }}>
            <Avatar style={{ background: "orange" }}>SG</Avatar>
            <TextArea
              placeholder="Ask a question or post an update"
              rows={5}
              style={{
                marginLeft: 40,
                width: "-webkit-fill-available",
                position: "absolute",
                top: 0,
              }}
            />
            <Row
              justify="space-between"
              align="middle"
              style={{ position: "absolute", bottom: 10, width: "100%" }}
            >
              <Row align="middle">
                <Text className="mr-10" type="secondary" strong>
                  Collaborators
                </Text>
                <Avatar className="mr-10" style={{ background: "orange" }}>
                  {task.avatarImg}
                </Avatar>
                <Avatar className="mr-10" icon={<UserOutlined />} />
                <Avatar className="mr-10" icon={<UserOutlined />} />
                <Title style={{ marginBottom: 0 }} level={4}>
                  +
                </Title>
              </Row>
              <Row>
                <Link underline>
                  <BellOutlined />
                  Join Task
                </Link>
              </Row>
            </Row>
          </div>
        </Content>
      </Col>
    </Drawer>
  );
};

export default TaskDetails;
