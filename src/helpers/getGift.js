

export const getGif = async(category) =>
{
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=3GlnadtHZyuefwy3SWy2IsuOIiHUozp2`;
   const resp = await fetch(url);
   const { data } = await resp.json();

   const gift = data.map((element)=>{

       return{

           id: element.id,
           title: element.title,
           url: element.images.downsized_medium.url

       }

   })

   return gift;
}