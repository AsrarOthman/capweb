import { useEffect } from "react";
import React from "react";
import "./App.css";
import Card from "./Card";
import SocialFeed from "./SocialFeed";
import BackgroundSlider from "./BackgroundSlider";

function App() {
  return (
    <div className="mother">
      <div className="hero">
        <div className="hero0">
          <div className="hero1">
            <img
              src="/capbg 2.png"
              alt="logo"
              style={{ height: "40px", width: "auto" }}
            />
          </div>
          <div className="hero2"></div>
          <div className="hero2">
            <div className="head1">
              <div>
                <a className="tx">Home</a>
              </div>
              <div>
                <a className="tx">Service</a>
              </div>
              <div>
                <a className="tx">Media Social</a>
              </div>

              <a className="tx">Contect</a>
              <a className="tx">Reveiw</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bckpic">
        <BackgroundSlider />
      </div>
      <div className="main">
        <div>
          {/* <h1 className="herotx">CAPTAIN MOBILE KUANTAN </h1> */}

          <div className="main2">
            <p>Lubuk iPhone Terbesar Kuantan</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Card
                title="Trade In"
                image="/trade3.jpg"
                description="Nak Tahu Harga Trade In Gadget Korang ?! "
              />
              <Card
                title="Beli Gadget"
                image="/beli2.jpg"
                description="Nak Beli iPhone / Andriod / iPad / Laptop dan Lain Gadget ?"
              />
              <Card
                title="Jualan Urgent"
                image="/b2.png"
                description="Jualan Urgent (Jual Sahaja)"
              />
              <Card
                title="Tanya Repair"
                image="/b1.png"
                description="Tanya Untuk Repair Gadget Android atau iPhone."
              />
            </div>
          </div>
          <div
            style={{
              border: "2px solidrgb(168, 168, 168) ",
              backgroundColor: "rgb(41, 41, 41)",
            }}
          >
            <SocialFeed />
            <h4 style={{ marginTop: "40px" }}>Facebook</h4>
            <div>
              <a
                href="https://www.facebook.com/captainmobile.kuantan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/fb.png"
                  alt="fb"
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "800px",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="box1">Contect</div>
          <div className="box2">Reveiw</div>
        </div>
      </div>
    </div>
  );
}

export default App;
