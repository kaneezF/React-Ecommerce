// src/components/Home.jsx
import Banner from "./Banner";
import BagsSection from "./BagsSection";
import Blazers from "./Blazers";
import NewProduct from "./NewProduct";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <>
      <Banner
        pretitle="Casual & Everyday"
        maintitle="Effortlessly blend comfort & style!"
        posttitle="Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, 
        versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures"
      />
      <ProductCard limit={4} />
      <BagsSection />
      <Blazers />
      <NewProduct limit={4}/>
      {/* <Shop/> */}
    </>
  );
}
