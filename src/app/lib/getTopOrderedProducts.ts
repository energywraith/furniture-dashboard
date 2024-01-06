// export interface Product {
//   productId: number;
//   name: string;
//   sku: string;
//   categoryName: string;
//   quantity: number;
// }

export const getTopOrderedProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.API_URI}/Analytics/top-ordered-products`
    );

    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    }

    throw "Top ordered products for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
