import React from "react";
import s from './style.module.css';


export default function Form({ addUser }) {

  const submit = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { image } = event.target;
    const { gender } = event.target;

    const new_posts = {
      id: Date.now(),
      name: name.value,
      image: image.value,
      gender: gender.value,
    };

    addUser(new_posts);

    name.value = "";
    image.value = "";
    gender.value = "";

    console.log(new_posts);
  };



  return (
    <div className={s.block}>
      <form className={s.form} onSubmit={submit}>
        <input type="text" name="name" placeholder="Имя" required />
        <input type="text" name="image" placeholder="Ссылка на фото" required />
        <div className={s.btns_block}>
          <select name="gender" required>
          <option value="gender">Пол</option>
          <option value="male">мужской</option>
          <option value="female">женский</option>
        </select>
        <button>Добавить</button>
        </div>
        
      </form>
    </div>
  );
}
