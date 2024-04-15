"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
export default function GalleryPage() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  const applyFilters = useCallback(
    (image: any) => {
      const filterStyle = `brightness(${brightness}%)
    contrast(${contrast}%)
    saturate(${saturation}%)`;
      return {
        filter: filterStyle,
        WebkitFilter: filterStyle,
      };
    },
    [brightness, contrast, saturation]
  );

  const renderImages = useCallback(() => {
    return images.map((image, index) => (
      <Image
        src={image.src}
        alt={image.alt}
        style={applyFilters(image)}
        key={index}
        width={image.width}
        height={image.height}
      />
    ));
  }, [applyFilters]);

  const images = [
    {
      src: "/public/1077530.jpg",
      alt: "image-1",
      width: 300,
      height: 300,
    },
    {
      src: "/public/1076554.jpg",
      alt: "image-2",
      width: 300,
      height: 300,
    },
    {
      src: "/public/865032.jpg",
      alt: "image-3",
      width: 300,
      height: 300,
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="200"
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
        />
      </div>
      <div>{renderImages()}</div>
    </div>
  );
}
