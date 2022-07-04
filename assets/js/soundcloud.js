let imgDiv = (link)=>{return `<img src="${link}" class="gifs-giphy" alt="">`}
let noResults = ()=>{return `<div id="text-inside-container">No Results Found</div>`}

let searchGiphy = $('#searchGiphy');
searchGiphy[0].addEventListener('keypress', async (e)=>{
    if(e.key==='Enter'){
        let outerContainer = $('#container-media-outer')
        let gifContainer = $('#giphy-imgs-gifs');
        gifContainer[0].innerHTML = '<div id="text-inside-container">Loading....</div>'
        let key = searchGiphy[0].value;
        searchGiphy[0].value = ''
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5GQf66UnALROIea3kfUwLmzpgeuMpV3g&q=${key}&limit=30&offset=0&rating=g&lang=en`)
        let data = await response.json();
        gifContainer[0].innerHTML = ''
        if(!data.data.length){
            outerContainer[0].style.height = '180px'
            gifContainer[0].style.height = '100px'
            gifContainer[0].innerHTML = noResults()
            return;
        }
        else{
            outerContainer[0].style.height = '500px'
            gifContainer[0].style.height = '80%'
            for(let i of data.data){
                gifContainer[0].innerHTML+=imgDiv(i.images.fixed_width.url)
            }
        }
        
    }
})