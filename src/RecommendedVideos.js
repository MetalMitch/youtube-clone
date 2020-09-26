import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

import oneImg from "./assets/1.jpg";
import oneVid from "./assets/1.webp";
import twoImg from "./assets/2.jpg";
import twoVid from "./assets/2.webp";
import threeImg from "./assets/3.jpg";
import threeVid from "./assets/3.webp";
import fourImg from "./assets/4.jpg";
import fourVid from "./assets/4.webp";
import fiveImg from "./assets/5.jpg";
import fiveVid from "./assets/5.webp";
import sixImg from "./assets/6.jpg";
import sixVid from "./assets/6.webp";
import sevenImg from "./assets/7.jpg";
import sevenVid from "./assets/7.webp";
import eightImg from "./assets/8.jpg";
import eightVid from "./assets/8.webp";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="A CHOPPED CHEESE (BETTER THAN A PHILLY CHEESESTEAK?) | SAM THE COOKING GUY 4K"
          views="46K views"
          timestamp="3 hours ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgayirqjpbgJc82WtZuWJbsL6W4eDmdpw7Hiw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="SAM THE COOKING GUY"
          image={oneImg}
          vid={oneVid}
        />
        <VideoCard
          title="Buying PS5 and/or Xbox Series X - Did I make the right decision?!"
          views="57K views"
          timestamp="7 hours ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GitB-ORLAktGCZqztR1yrCFsnuzmEl_e8D4NA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="MetalJesusRocks"
          image={twoImg}
          vid={twoVid}
        />
        <VideoCard
          title="Xbox Series X/S Design Impressions!"
          views="198K views"
          timestamp="1 hour ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Marques Brownlee"
          image={threeImg}
          vid={threeVid}
        />
        <VideoCard
          title="Gareth Bale flies to London ahead of return to Tottenham ✈️ | Good Morning Transfers"
          views="136K views"
          timestamp="10 hours ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ggw84E4qiCaz4hlk-qb10Soz0EjFXlK3Zz5Wg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Sky Sports Football"
          image={fourImg}
          vid={fourVid}
        />
        <VideoCard
          title="How Do You Beat Liverpool Tactically?"
          views="131K views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiVsZXWLnUCwK48Cu1OuwTMvfvkNBX2gWQJvA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Tifo Football"
          image={fiveImg}
          vid={fiveVid}
        />
        <VideoCard
          title="Top 10 Actors Who Saved Their Career with One Performance"
          views="631K views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhMR3_ZPEhoinJte9QRTmbZTVGspp_g_px81Q=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="WatchMojo.com"
          image={sixImg}
          vid={sixVid}
        />
        <VideoCard
          title="How the Sony Playstation 2 Security Was Defeated | MVG"
          views="1.3M views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjPcZVJ7XJ8MpQ6-7GzxKZ6mqLUWYqz8OM0Zg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Modern Vintage Gamer"
          image={sevenImg}
          vid={sevenVid}
        />
        <VideoCard
          title="Devin Townsend performs 'Kingdom' for EMGtv"
          views="4.7M views"
          timestamp="6 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgJK0crKhA8CgxYbMzR8B-r6g8unzEqKpyKdQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="EMGtv"
          image={eightImg}
          vid={eightVid}
        />
        {/* <VideoCard
          title=""
          views=""
          timestamp=""
          channelImage=""
          channel=""
          image=""
        /> */}
      </div>
    </div>
  );
}

export default RecommendedVideos;
