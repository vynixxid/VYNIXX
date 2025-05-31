const films = [
  {
    title: "AI Genesis",
    description: "Sebuah film AI tentang awal mula kesadaran mesin.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=AI+Genesis"
  },
  {
    title: "Neon Mind",
    description: "Sebuah film AI bergenre thriller futuristik.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Neon+Mind"
  },
  {
    title: "Synthetic Heart",
    description: "Drama emosional antara manusia dan AI.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Synthetic+Heart"
  },
  {
    title: "Cyber Dreams",
    description: "Petualangan futuristik di dunia AI dan cybernetics.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Cyber+Dreams"
  }
];

const filmGrid = document.getElementById("filmGrid");

films.forEach(film => {
  const card = document.createElement("div");
  card.className = "film-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${film.thumbnail}" alt="${film.title}" />
    <h3>${film.title}</h3>
    <p>${film.description}</p>
  `;
  filmGrid.appendChild(card);
});
