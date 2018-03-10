var single_ctrl_module = ((uiModule, dataModule) => {

    const initialLoad = () => {
        const singleID = dataModule.getSingleShowID("showID");
        displaySingleShow(parseInt(singleID));
    }

    const displaySingleShow = (id) => {
        $.get(`${dataModule.showAll.url}/${id}`).done(function (response) {
            const currentShow = dataModule.createSingleShow(response);
            uiModule.appendSingleShow(currentShow);
        })
        $.get(`${dataModule.showAll.url}/${id}/cast`).done(function (response) {
            const currentCrew = dataModule.createCast(response);
            console.log(currentCrew)
        })
    }

    return {
        initialLoad
    }

})(ui_module, data_module)
$(single_ctrl_module.initialLoad())