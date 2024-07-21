import HeaderHistory from "@/components/partials/HeaderHistory"
import { Input } from "@/components/ui/input";
import ListHistory from "@/components/partials/ListHistory";

const Page = () => {
  return (
    <div className="bg-[#264137] pt-20">
        <HeaderHistory/>
        <div className="md:w-[80%] mx-auto">
            <div className="space-y-4 py-10 flex flex-col justify-center items-center">
                <p className="font-bold text-5xl text-white drop-shadow-lg">History</p>
                <Input placeholder="Search history" className="w-1/2"></Input>
            </div>
            <ListHistory/>
        </div>
    </div>
  )
}

export default Page