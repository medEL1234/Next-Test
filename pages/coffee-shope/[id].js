import Link from "next/link";
import { useRouter } from "next/router";
import coffeeshopeData from "../../data/cofee-shope.json";
//create a static props function for pre randing data
export async function getStaticProps({ params }) {
  console.log(params.id);
  return {
    props: {
      coffeeshop: coffeeshopeData.find((coffeeshop) => {
        return coffeeshop.id === 0;
      }),
    },
  };
}

//create getStaticPath for use the dynamic route
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
    ],
    fallback: false,
  };
}

function CoffeeShope() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Coffee Shope for harmony {router.query.id}
      <div>
        <Link href="/">Go To Back</Link>
      </div>
    </div>
  );
}
export default CoffeeShope;
