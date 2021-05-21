import React from 'react'
import Image from 'next/image'
import{MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <div>
      {/*top navigation */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*Bar de recherche */}
        <div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/*Right */}
        <div className="text-white flex text-xs space-x-6 mx-6 items-center whitespace-nowrap ">
          <div className="link">
            <p>Hello Carnel Megbleto!</p>
            <p className="font-extrabold md:text-sm">Accounts & lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="text-center font-extrabold absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black ">4</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-smv mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/*Bottom navigation */}
      <div className=" space-x-3 p-2 pl-6 flex items-center bg-amazon_blue-light text-white">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </div>
    </div>
  );
}

export default Header
