$(window).on("load", function () {
    var ctrlModule = ((dataModule, uiModule) => {

        $(function () {
            const request = $.get("http://api.tvmaze.com/shows").done( response => {
                console.log(response)

                const shows = dataModule.createShows(response);
                uiModule.landingPageShows(shows);
            });
        })

    })(data_module, ui_module);

})