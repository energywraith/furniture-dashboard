// export interface Client {
//   clientId: number;
//   name: string;
// }

export const getClients = async () => {
  try {
    const response = await fetch(`${process.env.API_URI}/Clients`);

    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    }

    throw "Clients for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
