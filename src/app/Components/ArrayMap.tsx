import React from "react"
import ChildComponent from "./ChildComponent";
const ArryMap = ()=> {

    const car = [
        {
            carImage: "/supra.jpeg",
            carName: "Supra ",
            carPrice:  "$102,410",
            carReviews: "3.9"

        },

        {
            carImage: "/ford mustang.jpeg",
            carName: "Ford Mustang",
            carPrice: " $33,515 ",
            carReviews: "4.7",
          },

          {
            carImage: "/BMW M3.jpeg",
            carName: "BMW M3",
            carPrice: " $77,175 ",
            carReviews: "4.9",
          },

          {
            carImage: "/porsche.jpeg",
            carName: "Porsche",
            carPrice: " $421,688 ",
            carReviews: "4.8",
          },
    ]

    return(
        <div className="container mx-auto px-5 py-16 pb-20">
          <div className="flex flex-wrap justify-center gap-6">
            
            {car.map((veh:any) => (
               <ChildComponent
               carImage={veh.carImage}
               carName={veh.carName}
               carPrice={veh.carPrice}
               carReviews={veh.carReviews}
               />
            ))}
        </div>
        </div>
    )
};

export default ArryMap;