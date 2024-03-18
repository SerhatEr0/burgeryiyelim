import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eget nisl lobortis, pellentesque lorem eu, luctus nisl. Etiam sodales
          ante in diam consectetur rutrum. Praesent tincidunt dui mauris, semper
          laoreet diam placerat at. Pellentesque egestas quis dui non tincidunt.
          Pellentesque consectetur sit amet enim nec interdum. Morbi vitae
          sapien tristique, malesuada mi at, ullamcorper eros. Vivamus ut metus
          dignissim, laoreet quam vitae, tincidunt nunc. Cras ullamcorper, felis
          sed tincidunt vehicula, arcu mauris ornare nisl, sit amet luctus erat
          justo eget nibh. Vivamus erat lacus, auctor et pharetra volutpat,
          interdum sit amet sapien. Cras pellentesque porta lectus. Donec ut
          tristique tortor, non egestas quam. Donec ac ultricies magna. Maecenas
          posuere eu turpis at dignissim. Etiam scelerisque consectetur enim vel
          pharetra. Curabitur iaculis risus eget mauris varius efficitur. Duis
          nec ante consequat sapien fringilla pulvinar. Cras dapibus erat
          porttitor enim tincidunt fermentum. Nunc eu lorem sed dolor interdum
          volutpat eu eu velit. Proin condimentum consequat consequat. Etiam
          tempor ipsum ac odio scelerisque, sed varius turpis laoreet. Curabitur
          purus purus, euismod in scelerisque id, cursus vitae arcu. Nulla
          facilisi. Nam vitae libero nec arcu auctor venenatis vel ut urna.
          Maecenas pharetra porta ex, ut suscipit neque eleifend sed. Ut quis
          est et nulla rhoncus sodales quis sit amet dui.
        </p>
      </div>
    </div>
  );
}

export default About;
