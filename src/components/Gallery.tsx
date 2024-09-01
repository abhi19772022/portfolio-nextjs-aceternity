"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";
import { textVarient } from "@/utils/motion";
import { motion } from "framer-motion";
import TitleText from "./TitleText";

function Gallery() {
  const row1: string[] = [
    "https://utfs.io/f/08e113ca-9cd3-4f3c-a891-75e0fdaea010-nlisdm.jpeg",
    "https://utfs.io/f/cb253631-d4f2-4c3e-81e3-202fdb7387a5-cnlz8q.png",
    "https://utfs.io/f/a97ac1eb-0e9f-4937-a79d-3c478cca09d2-nlisfc.png",
    "https://utfs.io/f/7e1b15d5-916a-4234-bf40-24276213ea46-wrdm82.logowik.com.webp",
    "https://utfs.io/f/6e71cab4-ef0d-4220-b681-2f8262fe9a8e-nm33wo.png",
    "https://utfs.io/f/3c7777f2-98a1-42c4-856b-621c447d4e6d-nlisdm.png",
  ];

  const row2: string[] = [
    "https://utfs.io/f/afc3ff57-8fb0-4ca6-8dbd-b12ccb4f468d-1krgma.jpg",
    "https://utfs.io/f/fdb39688-3cb6-48c2-8581-e1cad1c33835-saazj8.svg.png",
    "https://utfs.io/f/5ad495c7-de1c-408e-9975-77d9bc54e9fe-hmaenf.svg.png",
    "https://utfs.io/f/7c92b6fc-b63c-4586-a008-22a7465853cc-vv2d4f.png",
    "https://utfs.io/f/2fa214b4-d711-41e4-84bd-590eca2f0fd9-hvaotc.png",
    "https://utfs.io/f/4bb4e92b-63f4-4693-af59-bbb9d4fca08c-8kjywp.webp",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <TitleText title="Our Speakers" />
        <motion.p
          variants={textVarient}
          initial="hidden"
          whileInView="show"
          className="text-white text-center text-md px-10 py-6 md:px-[25%]"
        >
          Discover the leading companies behind our expert speakers, showcasing a blend of top-tier industry experience and innovation.
        </motion.p>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Gallery;

const AppContainer = styled.div`
  width: 100%; /* Updated to take full width */
  height: 65vh;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  width: 100%; /* Updated to take full width */
  max-width: 1200px; /* Limit the maximum width */
  margin: 0 auto; /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px; /* Added padding to ensure spacing on smaller screens */
`;

const Text = styled.div`
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Note = styled.div`
  margin-bottom: 40px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  align-items: center;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0)
    );
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);

  @media (max-width: 768px) {
    width: clamp(8rem, 1rem + 20vmin, 15rem);
    padding: calc(clamp(8rem, 1rem + 20vmin, 15rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    padding: 3px 10px;
  }
`;
