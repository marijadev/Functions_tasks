var ui_module = (() => {

    const landingPageShows = showsList => {
       
        showsList.forEach(element => {  
            const image = element.image;
            const name = element.name;
            const columnDiv = `<div class="col-md-4 col-show"><img src="${image}" alt="show" /><h3 class="show-title">${name}</h3></div>`;

            $("#main-row").append(columnDiv);
        });
    }
 
    return {
        landingPageShows
    }
})()
