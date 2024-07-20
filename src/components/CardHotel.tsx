import React from "react";
import { Card, CardContent } from "./ui/card";
import { IoStar } from "react-icons/io5";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>;

type CardHotelProps = {
  name: string;
  price: number;
  address: string;
  rating: number;
  link: string;
} & CardProps;

const CardHotel = ({ className, ...props }: CardHotelProps) => {
  return (
    <a href={props.link} target="_blank">
      <Card
        className={cn(
          "md:w-[23rem] w-full cursor-pointer hover:scale-105 ease duration-150 hover:bg-white group md:border-0 border",
          className
        )}
        {...props}
      >
        <CardContent>
          <div className="w-full h-52 bg-[url('https://unsplash.it/640/425')] bg-cover bg-center" />

          <div className="p-5 md:border border-0 border-white md:mt-4 mt-0 text-white group-hover:text-black">
            <p className="font-bold text-lg mb-1">{props.name}</p>
            <p className="text-xs font-light text-justify text-white/80 group-hover:text-black/80 mb-5">
              {props.address}
            </p>
            <div className="flex justify-between items-end">
              <p className="text-sm font-semibold">Rp. {props.price}</p>
              <p className="flex items-center gap-1">
                {Array.from({ length: props.rating }).map(() => (
                  <IoStar size={25} />
                ))}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default CardHotel;
