var data_module = (() => {

    class Shows {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }
    const createShows = shows => { 
        let listOfShows = [];

        shows.forEach((element, index) => {
            if(index < 50) {
                listOfShows.push(new Shows(element.id, element.name, element.image.medium));
            }
        });

        return listOfShows
    }

    return {
        createShows
    }

})()