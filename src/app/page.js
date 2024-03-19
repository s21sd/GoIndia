import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import Marketstories from "./Components/Marketstories";
import Dissfourm from "./Components/Dissfourm";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-72 text-white px-6 py-8" />
      <div className="flex-grow flex flex-col">
        <Dissfourm className="w-3/4 bg-gray-100 px-4 py-6" />
      </div>
      <Marketstories className="w-full mt-auto" />
    </div>
  );
}
