import React from "react";
import "./AddPage.css";

const AddPage = () => {
  return (
    <div style={{ background: "yellow" }}>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Фото машины" />
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Где вы находитесь?" />
          <input type="text" placeholder="Куда вы едете?" />
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="Кокого числа вы выедете?" />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
