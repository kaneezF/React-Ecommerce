import Banner from "./Banner";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <>
      <Banner style={{ backgroundImage: `url(/images/shop-banner.jpg)` }}
        maintitle="Shop Your Favorite Styles Today!"
        showPreTitle={false}
        showPostTitle={false}
        showButton={false}
      />
      <ProductCard/>
    </>
  );
}
