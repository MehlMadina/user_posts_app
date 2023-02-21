import { useEffect, useState } from "react";
import Female from "../Female";
import Form from "../Form";
import Male from "../Male";
import Post from "../Post";
import s from "./style.module.css";

export default function App() {

  const [posts, setPosts] = useState(() => JSON.parse(localStorage.getItem("posts")) ?? []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  const addUser = (post) => {
    setPosts([...posts, post])
  };

  const deleteUser = (delId) => {
    setPosts(posts.filter((user) => user.id !== delId));
  };


  const findGender = (gender) => {
    const new_posts = posts.filter((user) => user.gender === gender);
    return new_posts.map((user) => <Post key={user.id} {...user} deleteUser={deleteUser}/>);
  };


  const addBlock = (gender) => {
    if (gender === "male") {
      return posts.filter(({ gender }) => gender === "male").length === 0 ? "" : <Male findGender={findGender} />;
    } else if (gender === "female") {
      return posts.filter(({ gender }) => gender === "female").length === 0 ? "" : <Female findGender={findGender} />;
    }
  };


    return (
      <div>
        <Form addUser={addUser}/>
        <div className={s.post_container}>
          {addBlock('male')}
          {addBlock('female')}
        </div>
      </div>
    );
  };

