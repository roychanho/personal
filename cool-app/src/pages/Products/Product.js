import React from "react";
import {
  useOutletContext,
  useParams,
  useLocation,
  useSearchParams,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const product = useLoaderData();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }
  //all test params
  console.log(searchParams.getAll("test"));

  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img width={100} src={product.thumbnail} />
    </div>
  );
};

export default Product;

export const dataLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await res.json();
  return productData;
};
