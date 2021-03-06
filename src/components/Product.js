import {useState} from "react"
 import Image from "next/image"
 import {StarIcon} from "@heroicons/react/solid"
 import Currency from "react-currency-formatter"


 const MAX_RATING = 5;
 const MIN_RATING = 1;


const Product = ({ id, title, price, description, category, image }) => {
  
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING -MIN_RATING +1 )) + MIN_RATING)
  
  const [hasPrime] = useState(Math.random() < 0.5)


  return(
  
  <div className="relative flex flex-col m-5 z-30 bg-white p-3">
    <p className="absolute top-2 right-2 text-xs italic text-gray z-15">{category}</p>
    <Image src={image} height={200} width={200} objectFit="contain"/>
    <h4 className="my-3">{title}</h4>
    <div className="flex">
      {Array(rating).fill().map((_,i) =>(
    <StarIcon className="h-5 text-yellow-500 "/>
      ))}
    </div>

    <p className="text-xs my-2 line-clamp-2">{description}</p>
    <div>
      <Currency className="mb-5" quantity={price} currency="EUR"/>
    </div>
    {hasPrime && (
      <div className="flex items-center space-x-2 mt-5">
        <img className="w-12"src="https://links.papareact.com/fdw" alt="primelogo"/>
        <p className="text-xs text-gray-500">FREE Next-day delivery</p>
      </div>
    )}
    <button className="mt-auto button">Add To Basket</button>
  </div>
  )
};


export default Product