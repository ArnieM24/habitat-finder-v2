import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { village_name, city_name, image } from "@/lib/data";
import { HomePageData } from "@/lib/data";

import Image from "next/image";

import React from "react";

function HomepageCard({}) {
  console.log("HomepageCard", HomePageData);

  return (
    <div className="grid grid-cols-3 gap-10 p-4 w-full mb-20">
      {HomePageData.slice(0, 9).map((data, index) => (
        <Card key={index} className={"w-[300px] h-[300px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer relative overflow-hidden rounded-lg group"}>
          <CardContent className="w-full h-full flex flex-col items-center justify-center">
            <Image
              src={data?.image1 || "/assets/default.jpg"}
              alt="village"
              className="w-[300px] h-[200px] object-fit group-hover:scale-110 transition-transform duration-300 ease-in-out"
              width={300}
              height={100}
            />
          </CardContent>
          <CardFooter className="text-center">
            <div className="text-[14px]">{data.village_name}</div>
            <CardDescription className="m-2 text-[12px]">{data.city_name}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default HomepageCard;
