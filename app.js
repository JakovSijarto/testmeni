document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    const form = document.getElementById("menu-form");
  
    let menuItems = [
      { name: "Espresso", price: "$3.00", description: "Strong and black coffee" },
      { name: "Latte", price: "$4.50", description: "Espresso with steamed milk" },
    ];
  
    function renderMenu() {
        fetch('menu.php') // Fetch updated data from PHP script
          .then(response => response.json())
          .then(data => {
            menuItems = data; // Update menuItems with fetched data
            // Clear and re-render menu items
            menuList.innerHTML = "";
            data.forEach((item, index) => {
              // ... (rest of your menu item creation logic)
            });
          });
      }
  
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        
        if (name && price && description) {
          menuItems.push({ name, price, description }); // Update menuItems array
          renderMenu();
          form.reset();
        }
      });
  
    renderMenu();
  });
  