Shoe Store Application
----------------------

This is a simple React application for a shoe store. It allows users to browse through a collection of shoes, add them to their cart, and remove them from the cart.

### 1\. App Component

*   Integrates other components like Navbar, Header, ConditionalRender, and Footer.
*   Manages the state of the product list and the cart count.

### 2\. Navbar Component

*   Displays navigation links and a cart button.
*   Takes props `setCartCount` and `cartCount` to manage the cart count.

### 3\. Header Component

*   Renders the header section of the application with a title, description, and an image.

### 4\. ConditionalRender Component

*   Renders the collection of shoes dynamically based on the data provided.
*   Takes props `product` and `setCartCount`.

### 5\. ProductCard Component

*   Displays individual shoe items with options to add them to the cart or remove them from the cart.
*   Manages the state of the item being in the cart or not.
*   Takes props `item`, `index`, and `setCartCount`.

### 6\. Footer Component

*   Displays the footer section with credits and a back-to-top link.

    

### Features

*   **Browse Shoes**: Users can browse through a collection of shoes displayed on the homepage.
*   **Add to Cart**: Users can add shoes to their cart by clicking the "Add Cart" button.
*   **Remove from Cart**: Users can remove shoes from their cart by clicking the "Remove From Cart" button.
*   **Dynamic Rendering**: The application dynamically renders shoe items based on the data provided.

### How to Run

To run this application:

1.  Ensure you have Node.js and npm installed on your system.
2.  Clone this repository.
3.  Navigate to the project directory in your terminal.
4.  Run `npm install` to install dependencies.
5.  Run `npm start` to start the development server.
6.  Open your browser and navigate to `http://localhost:5173` to view the application.

### Technologies Used

*   React.js: JavaScript library for building user interfaces.
*   HTML/CSS: Standard web technologies for structure and styling.
*   Bootstrap: Front-end framework for building responsive and mobile-first websites.

### Credits

This application is created by @sco as part of a shoe store project.

For any questions or issues, please feel free to contact the developer.

