import { Input } from "@/components/ui/input";
import ListFindHotelByName from "@/components/partials/ListFindHotelByName";
import ListFindHotelByLocation from "@/components/partials/ListFindHotelByLocation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/partials/Header";

export default function Home() {
  return (
    <div className="bg-[#264137]">
      <Header />

      <div className="h-screen bg-[url('/img/bg-home.png')] bg-center bg-cover gradient-mask-b-80">
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="md:w-[50%] w-full md:mx-auto mx-5 text-white">
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
      </div>

      <main className="pt-20">
        <div className="w-[80%] mx-auto">
          <section className="mb-8">
            <p className="font-bold mb-4 text-2xl text-white drop-shadow-lg">
              List By Name
            </p>
            <hr className="my-4" />
            <ListFindHotelByName />
            <hr className="my-4" />
          </section>

          <section>
            <p className="font-bold mb-4 text-2xl text-white drop-shadow-lg">
              List By Location
            </p>
            <hr className="my-4" />
            <ListFindHotelByLocation />
            <hr className="mt-4" />
          </section>
        </div>

        <div className="mx-auto py-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem className="text-white">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem className="text-white">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
}
