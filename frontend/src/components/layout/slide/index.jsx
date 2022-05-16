import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

const fadeImages = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8a7f6a4-43dd-493a-a3a6-d06930d6ed15/de8an3e-e41acfa2-0469-4821-8837-f55faa6e5b1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4YTdmNmE0LTQzZGQtNDkzYS1hM2E2LWQwNjkzMGQ2ZWQxNVwvZGU4YW4zZS1lNDFhY2ZhMi0wNDY5LTQ4MjEtODgzNy1mNTVmYWE2ZTViMWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Iruty994nCYQo3PAHKO9YNGSK0RvuwOTIeoAsQSZ0qI",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f3810965-d444-49fe-860e-ea51d4e13361/dbkzwo7-5196b08c-b799-4ca0-b7e4-fd50bf95eacd.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f8a7f6a4-43dd-493a-a3a6-d06930d6ed15/de8aok4-4adedc77-560b-4c46-88bc-a8493ed37df9.png"
];

export default function Slide() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
}
