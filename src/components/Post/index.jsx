import React from "react";
import s from "./style.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function Post({ id, name, image, deleteUser }) {
  return (
    <div className={s.post_container}>
      <button onClick={() => deleteUser(id)}>
        <CloseCircleOutlined />
      </button>
      <img src={image} alt="#" />
      <p>{name}</p>
    </div>
  );
}
