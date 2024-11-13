import Head from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import { PlaneText } from "@/components/text";

export default function Home() {
  return (
    <>
      <div className="Title"> 
        <Head />
        <PlaneText text={"hello"}>
          <h2>asdf</h2>
          tetes
        </PlaneText>
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