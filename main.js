const queens = []
const tributeChest = []

const createQueen = (num, name) => {
    const queenObject = {
        id: num,
        name: name
    }

    queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  
};

const payTribute = (tribId, desc, queenId) => {
    const tributeObject = {
        id: tribId,
        description: desc,
        queenId: queenId
    }

    tributeChest.push(tributeObject)
}


// create some queens
createQueen(1, "Athena Perez")
createQueen(2, "Trinity Terry")
createQueen(3, "Charisse Ford")
createQueen(4, "Jenna Solis")

// console log hail message for each queen in queens array
for (queen of queens){
    const hailMessage = hailTheQueen(queen.name) 
    console.log(hailMessage)
}

// pay tribute to queens
payTribute(1, "Gold", 3)
payTribute(2, "Incense", 2)
payTribute(3, "Myrrh", 4)


// iterate each queen in queens to look for tributes assigned to their id
for (const queen of queens) {

    //each queen will look at all the tributes in the tribute Chest to see if it is hers (matches her id)
    for (const tribute of tributeChest) {
    
     if (tribute.queenId === queen.id) {
     console.log(`${queen.name} has tribute ${tribute.description}`)
     }
    }
    }



