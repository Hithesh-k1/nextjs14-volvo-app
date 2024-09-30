export const fetchApi = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch data from ${url}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
