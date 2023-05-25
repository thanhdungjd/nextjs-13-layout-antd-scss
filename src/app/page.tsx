import "antd/dist/reset.css";

import variables from "./variables.module.scss";
import ClientButton from "@/components/ClientButton";

export default function Page() {
  return (
    <>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <ClientButton />
    </>
  );
}
