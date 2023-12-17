// export interface Client {
//   clientId: number;
//   name: string;
//   quantity: number;
// }

export const getTopOrderedClients = async () => {
  try {
    const response = await fetch(
      `${process.env.API_URI}/Analytics/top-ordered-clients`
    );

    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    }

    throw "Top ordered clients for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
