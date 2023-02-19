//initialization of api
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export async function fetchCofeeShop() {
  //fetch image api
  const photos = await serverApi.search.getPhotos({
    query: "car",
    page: 1,
    perPage: 10,
    color: "green",
    orientation: "portrait",
  });
  console.log("photos:", photos);

  const UnsplashResult = photos?.response?.results;
  console.log("result:", UnsplashResult);
  const photosResponse = UnsplashResult?.map((items) => items.urls["small"]);
  console.log("photos results :", photosResponse);

  const response = await fetch(
    "https://api.foursquare.com/v2/venues/search?ll=43.65267326999575,-79.39545615725015&query=coffe stores&client_id=X0OXAXFEIOUKZUOUNFUZKKZZPK3VYU1Q5DH1LQRQJAC5D5AO&client_secret=AADM2KMGD3ZYSJ4J0VXXWIT54DFOWQONXZXVB4LZIDEEFNRW&v=20210525"
  );
  const data = await response.json();

  console.log(data);

  return data;
}
