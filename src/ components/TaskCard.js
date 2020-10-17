import React from "react";
import { Avatar } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { StatusTag, PriorityTag } from "./Tag";

const TaskCard = ({
  onClick,
  id,
  title,
  img,
  status,
  priority,
  avatarImg,
  dueDate,
}) => (
  <div className="taskCard-container" onClick={() => onClick(id)}>
    <div>{img}</div>
    <div>
      <CheckCircleOutlined className="mr-10" />
      {title}
    </div>
    <div className="mt-10">
      {status && <StatusTag name={status} />}
      {priority && <PriorityTag name={priority} />}
    </div>
    <div className="mt-10">
      {avatarImg && (
        <Avatar style={{ background: "orange" }}>{avatarImg}</Avatar>
      )}
      <span className="ml-10">{dueDate}</span>
    </div>
  </div>
);

export default TaskCard;
