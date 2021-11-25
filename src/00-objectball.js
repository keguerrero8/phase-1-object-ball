function gameObject(){
    // const someVariable = "yes"
    // debugger
    return{
        home: {
            teamName: 'Brooklyn Nets',
            color: ['Black','White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assist: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assist: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists:2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise','Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 20,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
 
        }
    }
}


function numPointsScored (playerName) {
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      //debugger
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        //debugger
  
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.players
        for (let key in data) { //the keys here are the player names
            //debugger
            if (key === playerName) {
                //debugger
                return data[key].points
            }
          //debugger
        }
      }
    }
}

function shoeSize (playerName) {
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values 
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        let data = teamObj.players
        for (let key in data) { //the keys here are the player names
            if (key === playerName) {
                //debugger
                return data[key].shoe
            }
        }
      }
    }
}

function teamColors (teamString) {
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        if (teamObj[teamKey] === teamString) {
            //debugger
            if (teamObj[teamKey] === "Charlotte Hornets") {
                return teamObj["colors"]
            }
            return teamObj["color"]   
        }      

      }
    }
}

function teamNames () {
    let teamNameArray = []
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        if (teamKey === "teamName") {
            //debugger
            teamNameArray.push(teamObj[teamKey])
        }      

      }
    }
    return teamNameArray
}

function playerNumbers (teamString) {
    let playerNumberArray = []
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        if (teamObj[teamKey] === teamString) {
            let playersObj = teamObj.players
            for (let player in playersObj) { //iterate through each string of a players name
                playerNumberArray.push(playersObj[player].number)
            }
        }         
      }
    }
    return playerNumberArray
}

function playerStats (playerName) {
    let game = gameObject();
    for (let gameKey in game) { //getting inside home as key and corresponding values 
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        let data = teamObj.players
        for (let key in data) { //the keys here are the player names in strings
            if (key === playerName) {
                return data[key]
            }
        }
      }
    }
}

function bigShoeRebounds () {
    let game = gameObject();
    let maxVal = 0
    let player
    for (let gameKey in game) { //getting inside home as key and corresponding values 
      let teamObj = game[gameKey] //is either home or away as gamekey
      for (let teamKey in teamObj) { //getting inside home as key and corresponding values. so teamkeys are teamName, color, players (not strings can use dot notation)
        let data = teamObj.players
        for (let key in data) { //the keys here are the player names
            if (data[key].shoe > maxVal) {
                //debugger
                maxVal = data[key].shoe
                player = key
            }
        }
      }
    }
    if (game.home.players[player] === undefined) {
        return game.away.players[player].rebounds
    }
    return game.home.players[player].rebounds
}

bigShoeRebounds ()

