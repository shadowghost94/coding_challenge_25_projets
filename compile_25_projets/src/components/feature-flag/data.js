const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true,
};

function FeatureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else
            reject(
                "Une erreur est survenue ! S'il vous plait veuillez réessayer !"
            );
    });
}

export default FeatureFlagsDataServiceCall;
