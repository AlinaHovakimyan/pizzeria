const fs = require('fs');

// Function to read the file, parse it, and generate HTML content
function generateMenuHTML(menuText) {
    const menuItems = menuText.trim().split('\n\n'); // Split by double newline
    let menuHTML = '<html><head><title>Pizza Menu</title></head><body><h1>Pizza Menu</h1><ul>'; // Start of the HTML structure
    
    menuItems.forEach(item => {
        const lines = item.split('\n');
        const [name, priceSmall, priceLarge] = lines[0].split(' ');
        const description = lines.slice(1).join(', '); // Combine description lines

        // Create a menu item HTML structure
        menuHTML += `
            <li>
                <h3>${name}</h3>
                <p>Small: ${priceSmall} | Large: ${priceLarge}</p>
                <p>Description: ${description}</p>
            </li>
        `;
    });

    menuHTML += '</ul></body></html>'; // End of the HTML structure
    return menuHTML;
}

// Read the menu.txt file
fs.readFile('../resources/data/pizza_menu.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the menu file:', err);
        return;
    }

    // Generate HTML content from the menu data
    const menuHTMLContent = generateMenuHTML(data);

    // Write the generated HTML to menu.html
    fs.writeFile('menu.html', menuHTMLContent, (err) => {
        if (err) {
            console.error('Error writing the menu file:', err);
        } else {
            console.log('menu.html has been generated successfully!');
        }
    });
});
