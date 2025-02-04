class Book {
    constructor(title, author_name, first_publish_year, subject) {
        this.title = title;
        this.author_name = author_name || ["Desconocido"];
        this.first_publish_year = first_publish_year || "Año no disponible";
        this.subject = subject || ["Sin categoría"];
    }
}

class Repository {
    constructor() {
        this.books = [];
    }

    addBook(bookData) {
        const newBook = new Book(
            bookData.title,
            bookData.author_name,
            bookData.first_publish_year,
            bookData.subject
        );
        this.books.push(newBook);
    }
}

const repository = new Repository();

const refresh = () => {
    const bookContainer = document.getElementById("allBooks");
    bookContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos libros

    repository.books.forEach((book) => {
        const title = document.createElement("h3");
        const author = document.createElement("h3");
        const year = document.createElement("h3");
        const category = document.createElement("h3");

        // Se asignan valores sin etiquetas extra
        title.textContent = book.title;
        author.textContent = book.author_name.join(", ");
        year.textContent = book.first_publish_year;
        category.textContent = book.subject.join(", ");

        const card = document.createElement("div");
        card.classList.add("book-card"); // Agregar clase para aplicar estilos

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(category);

        bookContainer.appendChild(card);
    });
};

// Petición AJAX corregida
const AllBooks = () => {
    $.get("https://openlibrary.org/search.json?q=books&limit=12&offset=0", (data, status) => {
        if (status === "success") {
            data.docs.forEach((book) => {
                repository.addBook(book); // Agregar cada libro al repositorio
            });
            refresh(); // Refrescar la vista con los libros agregados
        } else {
            console.error("Error al obtener los libros");
        }
    });
};

// Llamar a la función para cargar los libros al cargar la página
AllBooks();
