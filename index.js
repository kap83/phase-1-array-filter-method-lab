function findMatching(name, string) {
    const noMatch = []
    const match = name.filter(name => name.toLowerCase() === string.toLowerCase())
    if(match){
        return match
    }
    else return noMatch
}

function fuzzyMatch(name, string) {
    const match = name.filter(name => name.startsWith(string))
    return match
}

function matchName(driver, string) {
    const match = driver.filter(driver => driver.name === string)
    return match
}