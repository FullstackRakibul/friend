import React from "react";
import { Typography, Input } from "antd";
import "@ant-design/icons";

const { Title, Paragraph } = Typography;

const LetterComponent = ({ username, letterBody, friend, visible }) => {
  if (!visible) return null;
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Title style={{ color: "white" }} level={3}>
        Dear {username}
      </Title>
      <Paragraph>
        <Input.TextArea
          placeholder="Letter Description"
          autoSize={{ minRows: 4, maxRows: 6 }}
          value={letterBody}
          onChange={() => {}}
        />
      </Paragraph>
      <Paragraph style={{ textAlign: "right" }}>
        <em className="text-white">From: {friend}</em>
      </Paragraph>
    </div>
  );
};

export default LetterComponent;
