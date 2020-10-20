import React from "react";
import { Row, Divider, Menu } from "antd";
import Typography from "antd/es/typography";
import {
  FullscreenOutlined,
  BulbFilled,
  RightOutlined,
  TagsOutlined,
  ApiOutlined,
  TranslationOutlined,
  NotificationOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const SettingsMenuItem = ({ icon, name, shortcut, rightIcon }) => {
  const shortcutItems = shortcut ? shortcut.split(" ") : [];
  return (
    <Row justify="space-between">
      <Row align="middle">
        {icon}
        <Text strong>{name}</Text>
      </Row>
      <Row align="middle">
        {rightIcon}
        {shortcutItems.map((item) => (
          <Text code>{item}</Text>
        ))}
      </Row>
    </Row>
  );
};

export const SettingsMenu = () => {
  return (
    <Menu className="settings-menu">
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          icon={<FullscreenOutlined />}
          name="Full screen"
          shortcut="Tab X"
        />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          icon={<FolderAddOutlined />}
          name="Add to another project"
          shortcut="Tab P"
        />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          icon={<NotificationOutlined />}
          name="Mark as Milestone"
        />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          icon={<TranslationOutlined />}
          name="Mark as Approval"
          rightIcon={<BulbFilled style={{ color: "orange" }} />}
        />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem icon={<ApiOutlined />} name="Make dependent" />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          icon={<TagsOutlined />}
          name="Add tags"
          shortcut="Tab T"
        />
      </Menu.Item>
      <Divider className="divider" />
      <Menu.Item className="zero-margin">
        <SettingsMenuItem name="Duplicate task" />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem name="Create follow-up task" shortcut="Shift Tab F" />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem name="Print" />
      </Menu.Item>
      <Menu.Item className="zero-margin">
        <SettingsMenuItem
          name="Advanced actions"
          rightIcon={<RightOutlined />}
        />
      </Menu.Item>
      <Divider className="divider" />
      <Menu.Item className="zero-margin">
        <SettingsMenuItem name="Delete task" shortcut="Tab Bksp" />
      </Menu.Item>
    </Menu>
  );
};
