import React from "react";
import { Card, Descriptions } from "antd";
import arrow from "../../assets/imgs/arrow.svg";
import phone from "../../assets/imgs/phone.svg";
import watsapp from "../../assets/imgs/watsapp.svg";

const { Meta } = Card;

const CardDriver: React.FC = () => (
  <div
    style={{
      width: "20rem",
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      gap: "0.5rem",
      border: "2px solid",
      borderColor: "gray",
      borderRadius: "8px",
    }}
  >
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <img
        alt="example"
        src="https://avatars.mds.yandex.net/i?id=58426ec99eef288b610022147c80c08f0cd4a9f1-6441755-images-thumbs&n=13"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div style={{ fontSize: "25px", fontWeight: "700" }}>Ermek Karagulov</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        <span style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}>
          Маршрут:ㅤ
        </span>
        Bishkek
        <img src={arrow} width="20px" height="15px" />
        Osh
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        <span style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}>
          Машина: ㅤ
        </span>
        Toyota camry
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}>
            Телефон: ㅤ
          </span>
          077777777{" "}
        </div>
        <img src={phone} alt="" />
        {/* <img src={watsapp} alt="" width="" /> */}
      </div>
    </div>
  </div>
);

export default CardDriver;
