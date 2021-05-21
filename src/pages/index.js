import Head from "next/head";
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'



export default function Home({products}) {
  return (
    <div>
      <head>
        <title>Amazon 2.0</title>
      </head>

      <Header />

      <main className="max-w-6xl mx-auto">{/*Barnner */}
      <Banner/>
      <ProductFeed products={products}/>
      </main>
    </div>
  );
}


export const getServerSideProps = async (context) =>{
  const req =  await fetch('https://fakestoreapi.com/products')
   const products = await req.json()
  return{
    props:{
      products:products,
    },
  }


}