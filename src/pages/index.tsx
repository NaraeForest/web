import HeadMain from "@/components/main-header";
import Goal from "@/components/Goal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="Title"> 
        <HeadMain />
      </div>
      <div className="Body flex-1">
        <Goal />
      </div>
      <div className="Footer fixed bottom-0 w-full bg-white shadow-md">
        <Footer />
      </div>
    </div>
    </>
  );
} 