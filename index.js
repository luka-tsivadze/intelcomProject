import data from './data.json' assert { type: "json" };

// Function to display a section (replace with your UI logic)
function displaySection(sectionName) {
  const sectionData = data[sectionName];
  console.log(`** ${sectionName} **`);

  sectionData.forEach((item) => {
    console.log(`  - Header: ${item.header}`);
    console.log(`    - Cards:`);
    item.cards.forEach((card) => {
      console.log(`      - Img: ${card.Img}`);
      console.log(`      - Text: ${card.text}`);
    });
  });
}

// Example usage: Display the "basic" section
displaySection('smart');