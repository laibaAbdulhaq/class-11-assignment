
const ChildComponent = (props:any) => {
   console.log(props)
    return (
        <div className="border container sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 m-4 shadow-lg  rounded-lg items-center overflow-hidden transform transition-transform hover:scale-110 ">
            <img
            src={props.carImage}
            alt={props.carName}
            className="w-full h-40 object-cover mb-2 "
            
            />

            <h1 className="text-center font-bold text-lg">
                {props.carName}
            </h1>

            <p className="text-center text-gray-600">
                price:{props.carPrice}
            </p>

            <p className="text-center text-gray-600" >
                Reviews:{props.carReview}
                <span className="text-yellow-500 ml-2">★★★★★</span>
                
                
                
           
            </p>
        </div>

    )
};
export default ChildComponent;