class Giphy{
    async getPopular(){
        let result =[];
        await fetch(`https://api.giphy.com/v1/stickers/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=50&rating=g`)
            .then(item=>item.json())
            .then(jsonData=>{
                result = jsonData.data;
            });
        return result;
    }
    async search(query){
        let results =[];
        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query}&limit=50&offset=0&rating=g&lang=kr`)
            .then(data=>data.json())
            .then(jsonData=>{
                results = jsonData.data;
            })
        return results;
    }
}
export default Giphy;