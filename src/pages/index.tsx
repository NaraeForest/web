import HeadMain from "@/components/MainHeader";
import Goal from "@/components/goal";
import Footer from "@/components/footer";

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