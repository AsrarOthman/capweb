import { useEffect } from "react";
import "./App.css";

function FacebookEmbed() {
  useEffect(() => {
    // Masukkan SDK Facebook
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="fb-container">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/captainmobile.kuantan"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/captainmobile.kuantan"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/captainmobile.kuantan">
            Captain Mobile Kuantan
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookEmbed;
