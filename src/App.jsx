import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: "https://github.com/isadorabrito.png",
      name: "Isadora Brito",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite Lab, evento da Rocketseat. O nome do projeto é notifications-microservice 🚀",
      },
      {
        type: "link",
        content: "👉 github.com/isadorabrito",
      },
    ],
    publishedAt: new Date("2022-12-10 19:53:05"),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/isadorabritoo.png",
      name: "Isadora Brito",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite Lab, evento da Rocketseat. O nome do projeto é notifications-microservice 🚀",
      },
      {
        type: "link",
        content: "👉 github.com/isadorabrito",
      },
    ],
    publishedAt: new Date("2022-12-10 20:53:05"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
