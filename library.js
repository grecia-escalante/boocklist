const favorites = [
    {
        name: "Fausto",
        author: "Johann Wolfgang von Goethe",
        editorial: "El Nacional",
        year: 1772,
        category: "Literatura",
        description: "Fausto es la historia de un erudito que, insatisfecho con su vida, hace un pacto con el diablo Mefistófeles. A cambio de su alma, Fausto obtiene los placeres de la vida.",
        bookcoverURL: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LEEFA6345RHTVDFSKZJUY6SL74.jpg" 
    },
    {
        name: "Doña Bárbara",
        author: "Rómulo Gallegos",
        editorial: "El Nacional",
        year: 1929,
        category: "Literatura",
        description: "dnSñlemfEF kemded dkQLÑDKqñldk",
        bookcoverURL: "https://i.ytimg.com/vi/pgLVVq9m5Y4/sddefault.jpg"
    },
    {
        name: "Metamorfosis",
        author: "Franz Kafka",
        editorial: "El Nacional",
        year: 1915,
        category: "Literatura",
        description: "FafedWEFwefa weWEF gerger efwefwe grw.",
        bookcoverURL: "https://i.ytimg.com/vi/7WXaQMBSJHU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFufY5X6o1MViogYS4Ux3BATgGbQ" 
    },
    {
        name: "Cien años de soledad",
        author: "Gabriel García Marquez",
        editorial: "El Nacional",
        year: 1967,
        category: "Realismo Mágico",
        description: "viefe.efWEFWEF GRGRD nfenfw",
        bookcoverURL: "https://fotografias.larazon.es/clipping/cmsimages01/2024/11/25/6FFFF585-4E9F-45F1-B8C1-E59F98762D71/netflix-revela-trailer-cien-anos-soledad-serie-que-vida-universo-macondo_98.jpg?crop=563,317,x0,y8&width=1900&height=1069&optimize=low&format=webply" 
    }
];

let index = 0;

const postRender = () => {
    const postBook = document.getElementById("post-book");
    const nameBook = document.getElementById("book-name");
    const editorialBook = document.getElementById("book-edit");
    const yearBook = document.getElementById("book-year");
    const typeBook = document.getElementById("book-type");
    const descriptionBook = document.getElementById("book-description");

    postBook.src = favorites[index].bookcoverURL;
    nameBook.textContent = favorites[index].name;
    editorialBook.textContent = favorites[index].editorial;
    yearBook.textContent = favorites[index].year;
    typeBook.textContent = favorites[index].category;
    descriptionBook.textContent = favorites[index].description;
};

const nextPostRender = () => {
    index++;

    if (index >= favorites.length) {
        index = 0; 
    }

    postRender(); 
};

const backPostRender = () => {
    index--; 

    if (index < 0) {
        index = favorites.length - 1; 
    }

    postRender();
};

document.getElementById("arrow-right").addEventListener("click", nextPostRender);
document.getElementById("arrow-left").addEventListener("click", backPostRender);

postRender();
