"use client";
import "antd/dist/reset.css";
import { Button } from "antd";

function ClientButton() {
  return (
    <>
      <p>This button is render from client:</p>
      <Button type="primary">Button</Button>
    </>
  );
}

export default ClientButton;
