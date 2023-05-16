import { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Main from "./components/Main/Main";
import ImgRef from "./assets/medias/img-ref.json";

function App() {
  const Images = [
    "https://www.apple.com/v/airpods-max/e/images/overview/design_comfort__f5gwnm9e6ci2_small.jpg",
    "https://www.apple.com/v/airpods-max/e/images/overview/design_foam__gndv3rgud4ya_small.jpg",
    "https://www.kamera-express.fr/media/a240a63e-4dd7-46c2-b768-b4419741b505/apple-airpods-max-roze.jpg.png",
    "https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_color-red_12082020_carousel.jpg.large.jpg",

    "https://www.apple.com/v/airpods-max/e/images/overview/audio_quality_eq__bw20hke6z1ea_xlarge.jpg",
    "https://www.apple.com/v/airpods-max/e/images/overview/audio_quality_noise_cancellation__bly3c9di4wwi_xlarge.jpg",
    "https://www.apple.com/v/airpods-max/e/images/overview/design_colors_green_front__cqpeugza9as2_xlarge.jpg",
    "https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_color-green_12082020_carousel.jpg.large.jpg",

    "https://image.son-video.com/images/article/apple/APPLAIRPMAXSR/airpods-max-argent_5fd0a1e95e12b_900.jpg",
    "https://www.apple.com/v/airpods-max/e/images/overview/router_engraving__e8k6lcdki8q6_xlarge.jpg",
    "https://www.apple.com/v/airpods-max/e/images/overview/design_colors_silver_front__g8c839jaldqy_xlarge.jpg",
    "https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_color-white_12082020_carousel.jpg.large.jpg",
  ];

  const [loaded, setLoaded] = useState(false);

  const cacheImg = async (srcArray) => {
    const loadPromises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        setTimeout(() => {
          img.onload = resolve();
          img.onerror = reject();
        }, 1000);
      });
    });

    await Promise.all(loadPromises);

    setLoaded(true);
  };

  if (!loaded) {
    cacheImg(Images);
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <iframe
          src="https://giphy.com/embed/3y0oCOkdKKRi0"
          width="480"
          height="350"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/3y0oCOkdKKRi0">via GIPHY</a>
        </p>
      </div>
    );
  } else {
    return (
      <>
        <TopBar />
        <Main />
      </>
    );
  }
}

export default App;
