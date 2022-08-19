

    export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=yJe7L6NfVy9LitpYC2gSZFC9dfn6dh2z&q=${ category }&limit=20`; 

        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            urlimg: img.images.downsized_medium.url 
        }))
        
        return gifs;
        
    }