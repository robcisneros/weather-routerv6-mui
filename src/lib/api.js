const FIREBASE_DOMAIN = 'https://react-http-5cc8c-default-rtdb.firebaseio.com';

export async function getAllMunicipios() {
    const response = await fetch(`${FIREBASE_DOMAIN}/municipios.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch municipios.');
    }
  
    const transformedData = [];
  
    for (const key in data) {
      const dataObj = {
        id: key,
        ...data[key],
      };
  
      transformedData.push(dataObj);
    }
  
    return transformedData;
  }