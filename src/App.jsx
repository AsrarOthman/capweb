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
                <a href="#" className="tx">
                  Home
                </a>
              </div>
              <div>
                <a href="#ser" className="tx">
                  Service
                </a>
              </div>
              <div>
                <a href="#ms" className="tx">
                  Media Social
                </a>
              </div>

              <a href="#us" className="tx">
                Contact Us
              </a>
              {/* <a className="tx">Reveiw</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bckpic">
        <BackgroundSlider />
      </div>
      <div id="ser"></div>
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
          <div id="ms"></div>
          <div
            style={{
              border: "2px solidrgb(168, 168, 168) ",
              backgroundColor: "rgb(41, 41, 41)",
            }}
          >
            <SocialFeed />
            <h4 style={{ margin: "30px" }}>Facebook</h4>
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
          <div id="us" className="box1">
            <h4 style={{ margin: "30px" }}>Contact Us</h4>

            <div className="contect">
              <div className="my-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7961.848750113491!2d103.303286!3d3.826388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb7359e55845%3A0xa025edb704ea97ea!2sCaptain%20Mobile%20Kuantan%20-%20Kedai%20iPhone%20dan%20Android%20%2C%20Gadget%20%26%20Repair%20Phone%20%2C%20LCD%20%2C%20Screen%20%2C%20Battery!5e0!3m2!1sen!2smy!4v1750583096683!5m2!1sen!2smy"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <h4
                  style={{ color: "black", fontSize: "24px", padding: "20px" }}
                >
                  Cawangan Kuantan
                </h4>
                <p
                  style={{ color: "black", fontSize: "20px", padding: "20px" }}
                >
                  Singgah la ke cawangan kami di Kuantan — kami sedia bantu anda
                  dengan senyuman 😊
                </p>
                <a
                  href="https://kuantan.captainmobile.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="my-card-btn"
                    style={{ marginBottom: "30px" }}
                  >
                    Pertanyaan
                  </button>
                </a>
              </div>
              <div className="my-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7961.848750113491!2d103.303286!3d3.826388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb7359e55845%3A0xa025edb704ea97ea!2sCaptain%20Mobile%20Kuantan%20-%20Kedai%20iPhone%20dan%20Android%20%2C%20Gadget%20%26%20Repair%20Phone%20%2C%20LCD%20%2C%20Screen%20%2C%20Battery!5e0!3m2!1sen!2smy!4v1750583096683!5m2!1sen!2smy"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <h4
                  style={{ color: "black", fontSize: "24px", padding: "20px" }}
                >
                  Cawangan Kemaman
                </h4>
                <p
                  style={{ color: "black", fontSize: "20px", padding: "20px" }}
                >
                  Mari singgah ke cawangan kitorang di Kemaman, dok jauh pun —
                  hok molek ado belako!
                </p>
                <a
                  href="https://kuantan.captainmobile.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="my-card-btn"
                    style={{ marginBottom: "30px" }}
                  >
                    Pertanyaan
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              color: "white",
              fontSize: "10px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            Copyright © 2025 - Captain Mobile. Semua hak cipta dilindungi.
          </div>

          {/* <div className="box2">Reveiw</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
