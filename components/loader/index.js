import React from "react";

import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  );
};

export default Loading;