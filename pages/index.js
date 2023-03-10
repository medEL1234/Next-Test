import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import CardsOne from "@/components/cards";
import { fetchCofeeShop } from "@/lib/cofee-shop";
//import cofeeshopeData from "../data/cofee-shope.json";
//const cofeeshopeData = [];
//this part is a server side part
export async function getStaticProps(context) {
  console.log("context :", context);
  //fetch with out async func
  /*fetch(
    "https://api.foursquare.com/v2/venues/search?ll=43.65267326999575,-79.39545615725015&query=coffe stores&client_id=X0OXAXFEIOUKZUOUNFUZKKZZPK3VYU1Q5DH1LQRQJAC5D5AO&client_secret=AADM2KMGD3ZYSJ4J0VXXWIT54DFOWQONXZXVB4LZIDEEFNRW&v=20210525"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data), (cofeeshopeData = data);
    });*/

  //fetch with async func

  //call the func of fetch
  const cofeeshope = await fetchCofeeShop();

  return {
    props: {
      cofeeshope: cofeeshope.response.venues,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });
//to get pre rander of data
export default function Home(props) {
  console.log("props:", props);
  const handlerBannerOnClick = () => {
    console.log("Hello to button click");
  };

  return (
    <>
      <Head>
        <title>Harmony Coffee for ev one</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Harmony Cof</h1>
        <Banner
          buttonText="View stores nearby"
          handlerOncClick={handlerBannerOnClick}
        />
        <Image
          className={styles.heroImage}
          src="/assets/icons8-caf??-64.png"
          width={100}
          height={100}
        ></Image>
        {props.cofeeshope.length < 0 ? (
          <h1>Data not found</h1>
        ) : (
          <div>
            <h2 className={styles.heading2}>Csablanca Stores</h2>
            <div className={styles.cardLayout}>
              {props.cofeeshope.map((items) => {
                return (
                  <CardsOne
                    key={items.id}
                    name={items.name}
                    ImageUrl={
                      items.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-shope/${items.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>

      <footer className={styles.footer}>@Harmony</footer>
    </>
  );
}
