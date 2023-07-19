let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to sort band names excluding articles
function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  bandNames.sort(function(a, b) {
    let nameA = a.toLowerCase();
    let nameB = b.toLowerCase();

    // Remove articles from band names
    articles.forEach(article => {
      if (nameA.startsWith(article + ' ')) {
        nameA = nameA.slice(article.length + 1);
      }
      if (nameB.startsWith(article + ' ')) {
        nameB = nameB.slice(article.length + 1);
      }
    });

    return nameA.localeCompare(nameB);
  });

  return bandNames;
}

// Sort the band names and add them to the 'band' ul element
const bandList = sortBandNames(touristSpots);
const bandListElement = document.getElementById('band');

bandList.forEach(band => {
  const liElement = document.createElement('li');
  liElement.textContent = band;
  bandListElement.appendChild(liElement);
});
