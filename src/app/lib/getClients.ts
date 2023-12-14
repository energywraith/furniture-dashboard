// export interface Client {
//   clientId: number;
//   name: string;
// }

export const getClients = async () => {
  try {
    const response = await fetch(`https://api-test.eltap.com/api/v1/Clients`);

    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    }

    throw "Clients for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
