import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Qr from "@/components/Qr";
import Products from "@/components/Products";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="View_container md:flex md:items-start justify-center">
        <div className="sm_container md:w-[359px]">
          <Intro />
          <Qr />
        </div>
        <div className="lg-container md:w-[840px]">
          <Products />
        </div>
      </div>
    </>
  );
}
