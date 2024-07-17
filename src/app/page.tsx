import Image from "next/image";
import BgHome from "@/assets/img/bg-home.png";
import { BiLogoGithub, BiHistory } from "react-icons/bi";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-[2000px] relative">
      <header className="py-5 px-10 flex justify-between sticky top-0 right-0 left-0">
        <div className="text-white text-center">
          <h1 className="text-white text-2xl font-bold drop-shadow-2xl">
            Hotel <span className="text-green-300">Scout</span>
          </h1>
          <p className="text-xs">Resort & Hotel</p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/ryansuranjana/hotel-scout"
            target="_blank"
          >
            <BiLogoGithub
              size={35}
              color="white"
              className="drop-shadow-2xl hover:scale-110 ease-in-out duration-100"
            />
          </a>
          <BiHistory
            size={35}
            color="white"
            className="drop-shadow-2xl hover:scale-110 ease-in-out duration-100 cursor-pointer"
          />
        </div>
      </header>
      <main>
        <div className="absolute top-0 bottom-0 right-0 left-0 -z-10">
          <Image
            src={BgHome}
            alt="bg-home"
            className="w-full h-screen brightness-75"
          />
        </div>
        <div className="w-full h-[60vh] flex justify-center items-center">
          <div className="md:w-[50%] w-full mx-auto text-white">
            <div className="mb-8">
              <h2 className="font-bold text-5xl drop-shadow-lg mb-8 text-center">
                Welcome to Hotel <span className="text-green-300">Scout</span>
              </h2>
              <p className="text-sm drop-shadow-lg font-light text-justify">
                Dengan web pencarian hotel, Anda bukan hanya mencari tempat
                tidur, tetapi merajut cerita-cerita yang tak terlupakan: dari
                malam romantis di hotel bintang lima hingga petualangan
                backpacker yang mendebarkan. Setiap pencarian adalah sebuah bab
                baru dalam perjalanan hidup Anda, di mana setiap detil
                menggambarkan visi Anda tentang kesempurnaan.
              </p>
            </div>
            <div>
              <Input placeholder="Search" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
