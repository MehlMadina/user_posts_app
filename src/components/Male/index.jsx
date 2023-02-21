import React from "react";
import s from "./style.module.css";

export default function Female({ findGender }) {
  return (
    <div className={s.male_container}>
      <p className={s.title}>Мужчины</p>
      <div className={s.cards}>{findGender("male")}</div>
    </div>
  );
}
