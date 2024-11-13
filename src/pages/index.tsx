import HeadMain from "@/components/MainHeader";
import Goal from "@/components/Goal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="Title"> 
        <HeadMain />
      </div>
      <div className="Body flex-1 pb-16">
        <Goal />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
    </>
  );
} 