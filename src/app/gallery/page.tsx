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
      src: "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      alt: "image-1",
      width: 300,
      height: 300,
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_1280.jpg",
      alt: "image-2",
      width: 300,
      height: 300,
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg",
      alt: "image-3",
      width: 300,
      height: 300,
    },
  ];
  return (
    <div className="container ml-16 mt-10">
      <div className="flex justify-center">
        <label htmlFor="brightness">Brillo</label>
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
        <label htmlFor="contrast">Contraste</label>
        <input
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        <label htmlFor="saturation">Saturacion</label>
        <input
          type="range"
          min="0"
          max="200"
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20 mx-auto">
        {renderImages()}
      </div>
    </div>
  );
}
