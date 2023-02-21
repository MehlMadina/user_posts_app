import React from "react";
import s from "./style.module.css";

export default function Female({ findGender }) {
  return (
    <div className={s.male_container}>
      <p className={s.title}>Женщины</p>
      <div className={s.cards}>{findGender("female")}</div>
    </div>
  );
}
