import { useEffect } from "react";
import "./App.css";

const SocialFeed = () => {
  useEffect(() => {
    // Load TikTok embed script
    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    // Load Facebook SDK if not already loaded
    if (!document.getElementById("facebook-jssdk")) {
      // 🔹 Hanya buat kalau script FB belum wujud
      const fbScript = document.createElement("script");
      fbScript.id = "facebook-jssdk";
      fbScript.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      fbScript.async = true;
      document.body.appendChild(fbScript);
    } else {
      // 🔹 Kalau SDK dah ada, terus parse semula .fb-page yang baru dimount
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }

    // Load Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const igScript = document.createElement("script");
      igScript.id = "instagram-embed-script";
      igScript.src = "https://www.instagram.com/embed.js";
      igScript.async = true;
      document.body.appendChild(igScript);
    }
  }, []);

  return (
    <div className="social-feed">
      <h2>Sosial Media</h2>

      {/* TikTok Embed */}
      <div className="tiktok-section">
        <h4>TikTok</h4>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@captainmobilekuantan"
          data-unique-id="captainmobilekuantan"
          data-embed-type="creator"
          style={{ maxWidth: "100%", minWidth: "320px" }}
        >
          <section>
            <h4>Loading TikTok videos...</h4>
          </section>
        </blockquote>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Instagram Embed */}
        <h4>Instagram</h4>
        <div className="ig-section" style={{ marginTop: "2rem" }}>
          <iframe
            src="https://www.instagram.com/captainmobilekuantan/embed"
            width="100%"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Instagram Profile"
            // sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>

        {/* Facebook Embed */}
        {/* <h4>FaceBook</h4>

        <div className="fb-section">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/captainmobile.kuantan"
            data-tabs="timeline"
            data-width="500" // ✅ Guna nombor sahaja
            data-adapt-container-width="true" // ✅ Penting
            data-small-header="false"
            data-hide-cover="false"
            data-show-facepile="true"
            style={{ width: "100%" }} // Optional, just in case
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
        </div> */}
      </div>
    </div>
  );
};

export default SocialFeed;
