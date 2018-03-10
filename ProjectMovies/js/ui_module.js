var ui_module = (() => {
    const landingPageShows = showsList => {
       
        showsList.forEach(show => {  
            const image = show.image;
            const name = show.name;
            const id = show.id;
            const columnDiv = `<div class="col-md-4 col-show single-show" data-id="${id}"><img src="${image}" alt="show" /><h3 class="show-title">${name}</h3></div>`;
            $("#main-row").append(columnDiv);
        });
    }

    const appendListShows = listOfShows => {
        const ul = $(".search-results").empty();

        listOfShows.forEach(element => {
            const movieName = element.name;
            const showID = element.id;
            const liSearch = `<li class="single-show" data-id="${showID}">${movieName}</li>`;
            ul.append(liSearch);
        })
    }

    const appendSingleShow = (currentShow) => {
        const imgHolder = $(".single-show-img");
        const titleHolder = $(".single-show-title");
        const summaryHolder = $(".single-show-details");
        
        imgHolder.append(`<img src="${currentShow.image.original}"/>`);
        titleHolder.text(`${currentShow.name}`);
        summaryHolder.html(`${currentShow.summary}`);
    }
 
    return {
        landingPageShows,
        appendListShows,
        appendSingleShow
    }
})();
