import Head from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
      <div className="Title"> 
        <Head />
      </div>
      <div className="Body">
        <Main />
      </div>
    </>
  );
}