sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zriskfiori/test/integration/FirstJourney',
		'zriskfiori/test/integration/pages/RisksList',
		'zriskfiori/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zriskfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);