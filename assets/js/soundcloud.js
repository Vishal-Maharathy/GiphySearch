let imgDiv = (link)=>{return `<img src="${link}" class="gifs-giphy" alt="">`}

let searhcGiphy = $('#searchGiphy');
searhcGiphy[0].addEventListener('keypress', async (e)=>{
    if(e.key==='Enter'){
        let gifContainer = $('#giphy-imgs-gifs');
        gifContainer[0].innerHTML = ''
        let key = searhcGiphy[0].value;
        searhcGiphy[0].value = ''
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5GQf66UnALROIea3kfUwLmzpgeuMpV3g&q=${key}&limit=30&offset=0&rating=g&lang=en`)
        let data = await response.json();
        for(let i of data.data){
            // prepend 
            gifContainer[0].innerHTML+=imgDiv(i.images.fixed_width.url)
            // console.log(i.images.fixed_width.url);
        }
    }
})