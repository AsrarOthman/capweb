import { useEffect, useState } from "react";

const images = ["/b1.png", "/b2.png", "/b3.png", "/b4.jpeg"];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Tukar setiap 5 saat

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "400px",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Isi content atas background */}
      <div
        className="content"
        style={{ color: "white", textAlign: "center", paddingTop: "30vh" }}
      >
        <h1 className="herotx2">CAPTAIN MOBILE</h1>
        <h1 className="herotx3">Trade In Lama Tukar Baru!!!</h1>
      </div>
    </div>
  );
};

export default BackgroundSlider;
