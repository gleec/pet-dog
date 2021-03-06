import { dogApiInstance } from '../dogApi';

const getDogs = async endpoint => {
  try {
    const response = await dogApiInstance.get(endpoint, {
      params: {
        //api_key: '9d3d1344db9f30424ccea364f78262a9'
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getDogs;
