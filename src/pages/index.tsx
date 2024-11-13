import Head from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="Title"> 
        <Head />
      </div>
      <div className="Body">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}