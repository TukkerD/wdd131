// Book data that can be used to dynamically generate content
const bookData = [
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        date: "March 15, 2023",
        rating: 4,
        genre: "Fantasy",
        description: "The Name of the Wind is a fantasy novel by Patrick Rothfuss. It tells the story of Kvothe, an adventurer and musician, recounting his life story to a chronicler...",
        image: "https://via.placeholder.com/150x200"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        date: "April 2, 2023",
        rating: 5,
        genre: "Science Fiction",
        description: "Dune is a science fiction novel by Frank Herbert, originally published in 1965. It won the Hugo Award in 1966 and the inaugural Nebula Award for Best Novel...",
        image: "https://via.placeholder.com/150x200"
    },
    {
        title: "The Call of Cthulhu",
        author: "H.P. Lovecraft",
        date: "June 15, 2023",
        rating: 4,
        genre: "Horror/Weird Fiction",
        description: "First published in 1928, H.P. Lovecraft's The Call of Cthulhu is a cornerstone of weird fiction. The story follows the investigation of a mysterious cult and the ancient cosmic entity they worship...",
        image: "https://m.media-amazon.com/images/I/71WZ6V5FGQL._AC_UF1000,1000_QL80_.jpg"
}
];

// This function could be used to dynamically generate articles
function generateArticles() {
    const articlesSection = document.querySelector('.articles');
    
    bookData.forEach(book => {
        const article = document.createElement('article');
        article.innerHTML = `
            <div class="article-meta">
                <p class="date">${book.date}</p>
                <p class="rating">${'★'.repeat(book.rating)}${'☆'.repeat(5-book.rating)}</p>
                <p class="genre">${book.genre}</p>
            </div>
            <div class="article-content">
                <h2>${book.title}</h2>
                <img src="${book.image}" alt="Cover of ${book.title}">
                <p>${book.description}</p>
                <a href="#" class="read-more">Read more</a>
            </div>
        `;
        articlesSection.appendChild(article);
    });
}

// Uncomment to use dynamic generation
// document.addEventListener('DOMContentLoaded', generateArticles);