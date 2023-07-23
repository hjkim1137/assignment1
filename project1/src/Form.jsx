import React from "react";
import styles from "./Form.module.scss";

function Form() {
  return (
    <>
      <div className={styles.titleBox}>
        <div>
          <input
            type="text"
            className={styles.titleBox1}
            placeholder="제목없는 설문지"
          ></input>
        </div>
        <div>
          <input
            type="text"
            className={styles.titleBox2}
            placeholder="설문지 설명"
          ></input>
        </div>
      </div>

      <div className={styles.contentBox}>
        <div>
          <input
            type="text"
            className={styles.contentBox1}
            placeholder="제목없는 설문지"
          ></input>
        </div>
        <div>
          <input
            type="text"
            className={styles.contentBox2}
            placeholder="설문지 설명"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Form;
