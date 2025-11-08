import { useState } from "react";

const [selectedColors , setSelectedColors] = useState({});

let handleColorClick =(productId , color) => {
  setSelectedColors(prev => ({
    ...prev,
    [productId] :color
  }))
}