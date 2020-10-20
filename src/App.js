import React, { useState } from "react";
import Layout from "antd/es/layout";
import Typography from "antd/es/typography";
import "./App.css";
import { Avatar, Row, Button, Divider } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AppTabs from "./ components/AppTabs";
import SubHeaderContent from "./ components/SubHeaderContent";
import TaskCard from "./ components/TaskCard";
import TaskDetails from "./ components/TaskDetails";
import Placeholder from "./ components/PlaceHolder";
import initialData from "./data/initial-data";
import HeaderSettings from "./ components/HeaderSettings";

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

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      if (destination.index === source.index) {
        return;
      } else {
        const column = boardData.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column,
          taskIds: newTaskIds,
        };

        setBoardData({
          ...boardData,
          columns: {
            ...boardData.columns,
            [newColumn.id]: newColumn,
          },
        });
      }
    } else {
      const sourceColumn = boardData.columns[source.droppableId];
      const destinationColumn = boardData.columns[destination.droppableId];
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      const destinationTaskIds = Array.from(destinationColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);
      const newSourceColumn = {
        ...sourceColumn,
        taskIds: sourceTaskIds,
      };
      destinationTaskIds.splice(destination.index, 0, draggableId);
      const newDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationTaskIds,
      };
      setBoardData({
        ...boardData,
        columns: {
          ...boardData.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestinationColumn.id]: newDestinationColumn,
        },
      });
    }
  };

  const onClose = () => setActiveTaskId("");

  const columns = boardData.columnOrder.map((col) => boardData.columns[col]);
  const tasks = boardData.tasks;

  return (
    <div className="app">
      <Layout className="h-100">
        <Header className="app-Header bg-white">
          <Layout>
            <Sider className="bg-white app-sider" width="fit-content">
              <Avatar
                className="bg-purple br-16"
                shape="square"
                icon={<UserOutlined />}
                size={64}
              />
            </Sider>
            <Content className="bg-white h-100 pt-5">
              <Content
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Title level={3} style={{ marginBottom: 0 }}>
                  {boardData.projectName}
                </Title>
              </Content>
              <AppTabs onChange={changeTab} />
            </Content>
            <Sider className="bg-white" width="auto">
              <HeaderSettings />
            </Sider>
          </Layout>
          <Divider className="zero-margin" />
        </Header>
        {showBoard ? (
          <Layout>
            <Header className="bg-white board-header">
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
              <DragDropContext onDragEnd={onDragEnd}>
                <Row>
                  {columns.map((col) => {
                    return (
                      <Droppable droppableId={col.title} key={col.title}>
                        {(provided) => (
                          <div
                            className="mr-20"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <Row justify="space-between" className="mb-20">
                              <Row>{col.title}</Row>
                              <Row align="middle">
                                <PlusOutlined className="column-icon" />
                                <EllipsisOutlined className="column-icon ml-10" />
                              </Row>
                            </Row>
                            {col.taskIds.map((taskId, index) => {
                              const {
                                id,
                                title,
                                status,
                                priority,
                                avatarImg,
                                dueDate,
                              } = tasks[taskId];
                              return (
                                <Draggable
                                  draggableId={taskId}
                                  index={index}
                                  key={taskId}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <TaskCard
                                        isDragging={snapshot.isDragging}
                                        id={id}
                                        onClick={onTaskCardClick}
                                        title={title}
                                        status={status}
                                        priority={priority}
                                        avatarImg={avatarImg}
                                        dueDate={dueDate}
                                      />
                                    </div>
                                  )}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                            <Button className="add-task-button">
                              + Add Task
                            </Button>
                          </div>
                        )}
                      </Droppable>
                    );
                  })}
                </Row>
              </DragDropContext>
            </Content>
          </Layout>
        ) : (
          <Placeholder />
        )}
      </Layout>
    </div>
  );
};

export default App;
