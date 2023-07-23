import React, { useState } from "react";
import styles from "./Form.module.scss";
import ShortAnswer from "./ShortAnswer";
import LongAnswer from "./LongAnswer";
import MultipleChoice from "./MultipleChoice";
import CheckBox from "./CheckBox";
import DropDown from "./DropDown";
import SelectBox from "./SelectBox";

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
        <div className={styles.contentBoxFlex}>
          <input
            type="text"
            className={styles.contentBox1}
            placeholder="질문"
          ></input>
          <SelectBox />
        </div>
        <ShortAnswer />
        {/* <LongAnswer /> */}
        {/* <MultipleChoice /> */}
        {/* <CheckBox /> */}
        {/* <DropDown /> */}
      </div>
    </>
  );
}

export default Form;
