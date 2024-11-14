import React from "react";
import Link from "next/link";

export default function HeadMain() {
    return (
      <div className="container mx-auto px-4 flex flex-col items-center">
        <header className="header flex justify-between items-center mb-4 w-full">
          <h1 className="text-4xl font-bold ml-2 mt-12 mb-3">Home</h1>
          <Link href="/MainGoalEdit">
            <button className="text-2xl mr-2 mt-12 mb-3">+</button>
          </Link>
        </header>
      </div>
    );
  }
  