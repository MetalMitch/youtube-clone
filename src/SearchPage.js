import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

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

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJyw89JIZtFsmTkaMgv7EvsaBEe84_ij-09Vea5pzw=s288-c-k-c0xffffffff-no-rj-mo"
        channel="THEABNATION"
        verified
        subs="10.4K"
        noOfVideos={141}
        description="Welcome to the official YouTube channel of TheAlterBridgeNation.com! We are a fan site for the greatest rock band your earhole has ever borne witness to: Alter Bridge!"
      />
      <hr />
      <VideoRow
        views="46K"
        subs="2.21M"
        description="Try Haus, now! The first 100 people to purchase two bottles of Haus using my link http://bit.ly/haus_STCG2 will get $10 off plus free shipping when they use my code"
        timestamp="3 hours ago"
        channel="SAM THE COOKING GUY"
        title="A CHOPPED CHEESE (BETTER THAN A PHILLY CHEESESTEAK?) | SAM THE COOKING GUY 4K"
        image={oneImg}
        vid={oneVid}
      />

      <VideoRow
        title="Buying PS5 and/or Xbox Series X - Did I make the right decision?!"
        views="57K views"
        timestamp="7 hours ago"
        channel="MetalJesusRocks"
        subs="788K"
        description="Should I get the Playstation 5 (PS5) or Xbox Series X? Let's look at the games, backwards compatibility, hardware and pricing. Oh yeah, and what about the 4K Nintendo Switch & PC Gaming!?"
        image={twoImg}
        vid={twoVid}
      />
      <VideoRow
        title="Xbox Series X/S Design Impressions!"
        views="198K views"
        description="My first impressions of $499/$299 Xbox Series X and Series S hardware. PS5 Impressions: https://youtu.be/JztgJT547Vg MKBHD ..."
        subs="12.1M"
        timestamp="1 hour ago"
        channel="Marques Brownlee"
        image={threeImg}
        vid={threeVid}
      />
      <VideoRow
        title="Gareth Bale flies to London ahead of return to Tottenham ✈️ | Good Morning Transfers"
        views="136K views"
        description="SUBSCRIBE ► http://bit.ly/SSFootballSub
        PREMIER LEAGUE HIGHLIGHTS ► http://bit.ly/SkySportsPLHighlights2021"
        subs="2.37M"
        timestamp="10 hours ago"
        channel="Sky Sports Football"
        image={fourImg}
        vid={fourVid}
      />
      <VideoRow
        title="How Do You Beat Liverpool Tactically?"
        views="131K views"
        description="How Do You Beat Liverpool Tactically?
        Subscribe to The Athletic for JUST £1 per month with Tifo’s introductory offer: http://www.theathletic.com/tifofootball"
        subs="845K"
        timestamp="1 day ago"
        channel="Tifo Football"
        image={fiveImg}
        vid={fiveVid}
      />
      <VideoRow
        title="Top 10 Actors Who Saved Their Career with One Performance"
        views="631K views"
        description="These movie stars came back in a big way. For this list, we’ll be looking at actors who largely turned their careers around with one film. Our countdown includes Keanu Reeves, Robert Downey Jr., John Travolta, and more! Did YOUR favorite celebrity make the list? Let us know in the comments! "
        subs="22.9M"
        timestamp="1 month ago"
        channel="WatchMojo.com"
        image={sixImg}
        vid={sixVid}
      />
      <VideoRow
        title="How the Sony Playstation 2 Security Was Defeated | MVG"
        views="1.3M views"
        description="The Sony PlayStation 2 is still the highest selling console in video game history but like its predecessor, the PlayStation, it was a machine that was easily exploited with security flaws. In this episode we find out the methods hackers used to open up the machine."
        subs="492K"
        timestamp="1 year ago"
        channel="Modern Vintage Gamer"
        image={sevenImg}
        vid={sevenVid}
      />
      <VideoRow
        title="Devin Townsend performs 'Kingdom' for EMGtv"
        views="4.7M views"
        description="Sit back and watch as Devin Townsend takes you through his 'Kingdom'.  Devin is a consummate performer, and we were thrilled to spend time with him in our studio.  In partnership with Fractal Audio and D'Addario, Mr. Townsend showcases his EMG 81 and EMG 66 humbucker pickups for "
        subs="238K"
        timestamp="6 years ago"
        channel="EMGtv"
        image={eightImg}
        vid={eightVid}
      />
    </div>
  );
}

export default SearchPage;
