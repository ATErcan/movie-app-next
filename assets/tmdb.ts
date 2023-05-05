export const baseUrl = `https://api.themoviedb.org/3/`
export const baseImgUrl = "https://image.tmdb.org/t/p/original";

export const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.statusText}`);  
    }
    return res.json();    
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
    
  }
}

