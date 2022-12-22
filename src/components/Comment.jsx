import { HandsClapping, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/isadorabrito.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Isadora Brito</strong>
              <time
                title="08 de dezembro às 12:30h"
                dateTime="2022-12-08 12:30:59"
              >
                Cerca de 3h atrás
              </time>
            </div>
            <button
              onMouseDown={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={22} />
            Aplaudir <span> {likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
