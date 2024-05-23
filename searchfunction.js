

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
let availableKeywords = [];

// Hämta och extrahera produkter från HTML
async function fetchProducts() {
  try {
    const response = await fetch('sortiment.html'); // URL till din HTML-fil
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const html = await response.text();
    
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    
    const productLinks = tempDiv.querySelectorAll(".product a"); // Hitta alla produkter med länkar
    
    availableKeywords = Array.from(productLinks).map(link => ({
      name: link.textContent.trim(), // Produktnamn
      href: link.href, // Länk till produkten
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Anropa funktionen för att hämta produkter
fetchProducts();

inputBox.onkeyup = function () {
  const input = inputBox.value;
  let result = [];

  if (input.length > 0) {
    result = availableKeywords.filter((keyword) => {
      return keyword.name.toLowerCase().includes(input.toLowerCase());
    });
  }

  display(result);

  if (result.length === 0) {
    resultsBox.innerHTML = ''; // Rensa om inget resultat finns
  }
};

function display(result) {
  resultsBox.innerHTML = ''; // Rensa tidigare resultat

  const ul = document.createElement("ul"); // Skapa en ny lista
  result.forEach((item) => {
    const li = document.createElement("li"); // Skapa ett listobjekt
    li.textContent = item.name; // Lägg till produktnamnet
    li.onclick = () => {
      window.open(item.href, '_blank'); // Öppna länken i ett nytt fönster eller en ny flik
    };
    ul.appendChild(li); // Lägg till listobjektet i listan
  });

  resultsBox.appendChild(ul); // Lägg till listan i resultsBox
}

function selectInput(list) {
  inputBox.value = list.textContent; // Uppdatera inputbox med produktnamnet
  resultsBox.innerHTML = ''; // Rensa resultaten
}


