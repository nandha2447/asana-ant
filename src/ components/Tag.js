import React from "react";
import { Tag } from "antd";

const getStatusColor = (status) => {
  switch (status) {
    case "Not Started":
      return "blue";
    case "In Progress":
      return "grey";
    case "Done":
      return "#52c41a";
    default:
      return "#52c41a";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "#f5222d";
    case "Medium":
      return "orange";
    default:
      return "orange";
  }
};

export const PriorityTag = ({ name }) => (
  <Tag
    style={{
      backgroundColor: getPriorityColor(name),
      color: "white",
      borderRadius: 10,
    }}
  >
    {name}
  </Tag>
);

export const StatusTag = ({ name }) => (
  <Tag
    style={{
      backgroundColor: getStatusColor(name),
      color: "white",
      borderRadius: 10,
    }}
  >
    {name}
  </Tag>
);
