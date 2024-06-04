const getTheTitles = function(books) {
    const titles = [];

    for (const book of books) {
        for (const key in book) {
            if (key === "title") {
                titles.push(book[key]);
            }
        }
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
