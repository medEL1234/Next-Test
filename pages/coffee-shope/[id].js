import Link from "next/link";
import { useRouter } from "next/router";
import coffeeshopeData from "../../data/cofee-shope.json";
import Head from "next/head";
import styles from "../../styles/coffee-shop.module.css";
import Image from "next/image";
import cls from "classnames";
//create a static props function for pre randing data
export async function getStaticProps({ params }) {
  console.log(params.id);
  console.log(params);
  return {
    props: {
      coffeeshop: coffeeshopeData.find((coffeeshop) => {
        return coffeeshop.id.toString() === params.id;
      }),
    },
  };
}

//create getStaticPath for use the dynamic route
export async function getStaticPaths() {
  const paths = coffeeshopeData.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    /*paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
    ],*/
    paths,
    fallback: false,
  };
}

function CoffeeShope(props) {
  const router = useRouter();
  console.log(router);
  console.log("props :", props);

  if (router.isFallback) {
    return <div>...Loading</div>;
  }
  const HandelUpvoteButton = () => {
    console.log("handelUpvote");
  };
  return (
    <div className={styles.layout}>
      <Head>
        {props.coffeeshop.name}
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      Coffee Shope for harmony {router.query.id}
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Go To Back</Link>
          </div>
          <div>
            <Link href="/coffee-shope/dynamic">Go to page dynamic</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{props.coffeeshop.name}</h1>
          </div>

          <Image
            src={props.coffeeshop.imgUrl}
            height="600"
            width="550"
            className={styles.storeImg}
          ></Image>
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/iconOne.svg"
              width="24"
              height="24"
            ></Image>
            <p className={styles.text}>{props.coffeeshop.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/iconTow.svg"
              width="24"
              height="24"
            ></Image>
            <p className={styles.text}>{props.coffeeshop.neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/iconThree.svg"
              width="24"
              height="24"
            ></Image>
            <p className={styles.text}>10</p>
          </div>

          <button className={styles.upvoteButton} onClick={HandelUpvoteButton}>
            lUpvote
          </button>
        </div>
      </div>
    </div>
  );
}
export default CoffeeShope;
