// export interface Client {
//   clientId: number;
//   name: string;
//   quantity: number;
// }

export const getTopOrderedClients = async () => {
  try {
    const response = await fetch(
      `https://api-test.eltap.com/api/v1/Analytics/top-ordered-clients`
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
