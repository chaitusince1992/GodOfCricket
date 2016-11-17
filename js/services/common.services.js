godOfCricketApp.service('commonServices', ['$q', '$http', function ($q, $http) {
    self = this;
    self.getSachinDataFromCSV = function (callbackSuccess) {
        $http({
            url: 'sachin.csv',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function success(response) {
            //        console.log(response.data);
            //        console.log(response.data.split('\n'));
            var eachRow = response.data.split('\n');
            var parsedEachRow = [];
            for (i = 1; i < eachRow.length - 1; i++) {
                var parsedEachRowObject = new Object();
                for (j = 0; j < eachRow[0].split(',').length; j++) {
                    parsedEachRowObject[eachRow[0].split(',')[j]] = eachRow[i].split(',')[j];
                }
                parsedEachRow.push(parsedEachRowObject);
            }
            console.log("csv parsed successfully");
            self.cleanData(parsedEachRow);
            callbackSuccess(parsedEachRow);
        });
    };
    self.getSachinDataFromCSV(function(res) {
//        console.log(res);
    });
    self.cleanData = function(sachinData) {
        var totalScore = 0;
        var countOfOuts = 0;
        var halfCenturies = 0;
        var centuries = 0;
        for(i=0;i<sachinData.length;i++) {
            //Date string to Date object
            var dateToAdd = new Date(sachinData[i].date);
            sachinData[i]['date'] = dateToAdd;
            if(sachinData[i].batting_score.indexOf('*') != -1) {
                sachinData[i]['notoutFlag'] = true;
                var scoreAsNumber = Number(sachinData[i].batting_score.substr(0,sachinData[i].batting_score.length-1));
                totalScore = totalScore + (scoreAsNumber);
                sachinData[i]['batting_score'] = scoreAsNumber;
            } else if(sachinData[i].batting_score == 'DNB' || sachinData[i].batting_score == 'TDNB') {
                sachinData[i]['batting_score'] = -1;
            } else {
                sachinData[i]['notoutFlag'] = false;
//                var scoreAsNumber = (sachinData[i].batting_score);
                var scoreAsNumber = Number(sachinData[i].batting_score);
                totalScore = totalScore + (scoreAsNumber);
                sachinData[i]['batting_score'] = scoreAsNumber; 
                countOfOuts++;    
            }
            if(sachinData[i].batting_score >= 50 && sachinData[i].batting_score < 100) {
                halfCenturies++;
            } else if(sachinData[i].batting_score >= 100) {
                centuries++;
            }
            
        }
        console.log(sachinData);
        console.log(totalScore/countOfOuts);
        console.log(halfCenturies);
        console.log(centuries);
    };
}]);
