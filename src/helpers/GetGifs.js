

export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gy1xHmi2zaLuvttQLVbx4BmxjKD5U1aN&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es`
    const resp = await fetch(url);
    //console.log(resp);
    const { data } = await resp.json();
    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }
    )
    return gift;
}