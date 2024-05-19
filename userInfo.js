function createUserProfiles(namesArray, modifiedNamesArray) {
    if (namesArray.length !== modifiedNamesArray.length) {
        throw new Error("Input arrays must be of equal length.");
    }

    let userProfiles = [];
    for (let i = 0; i < namesArray.length; i++) {
        let userProfile = {
            originalName: namesArray[i],
            modifiedName: modifiedNamesArray[i],
            id: i + 1 
        };
        userProfiles.push(userProfile);
    }
    return userProfiles;
}

module.exports = {
    createUserProfiles
};
 