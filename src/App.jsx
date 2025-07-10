

import React from "react";
import UserProfile from "./UserProfile";
import ProductDetails from "./ProductDetails";
import ListRend from "./ListRend";
import ProgressBar from "./ProgressBar";
import DynamicButton from "./DynamicButtton";
import AlertBox from "./AlertBox";
import UserList from "./UserList";
import RecipeCard from "./RecipeCard";
import ContentSection from "./ContentSection";
import FilterableList from "./FilterableList";
import "./App.css"; // Import the CSS!

const userData = {
  name: "Alice Wonderland",
  email: "alice@example.com",
  avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW",
};

const productData = {
  id: 1,
  name: "Wireless Mouse",
  price: 25.99,
  inStock: true,
};

const appFeatures = [
  "Real-time updates",
  "User authentication",
  "Data export",
  "Customizable themes"
];

const usersData = [
  { id: 1, name: "Charlie", isOnline: true },
  { id: 2, name: "Diana", isOnline: false },
  { id: 3, name: "Eve", isOnline: true }
];

const pizzaRecipe = {
  name: "Homemade Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Mozzarella cheese",
    "Pepperoni",
    "Oregano"
  ],
  instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
};

const inventoryItems = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Desk Chair", category: "Furniture" },
  { id: 3, name: "Monitor", category: "Electronics" },
  { id: 4, name: "Bookshelf", category: "Furniture" }
];

function App() {
  return (
    <>
      <div className="section">
        <h2>Challenge 1: User Profile Card</h2>
        <UserProfile data={userData} />
      </div>

      <div className="section">
        <h2>Challenge 2: Product Details</h2>
        <ProductDetails product={productData} />
      </div>

      <div className="section">
        <h2>Challenge 3: Dynamic Buttons</h2>
        <DynamicButton label="Submit Form" onClick={() => alert('Form Submitted!')} />
        <DynamicButton label="Disabled Button" isDisabled={true} />
      </div>

      <div className="section">
        <h2>Challenge 4: List Rend</h2>
        <ListRend data={usersData} />
      </div>

      <div className="section">
        <h2>Challenge 5: Alert Boxes</h2>
        <AlertBox message="Operation successful!" type="success" />
        <AlertBox message="Something went wrong." type="error" />
      </div>

      <div className="section">
        <h2>Challenge 6: Progress Bars</h2>
        <ProgressBar data={75} />
        <ProgressBar data={20} />
      </div>

      <div className="section">
        <h2>Challenge 7: User List</h2>
        <UserList users={usersData} />
      </div>

      <div className="section">
        <h2>Challenge 8: Recipe Card</h2>
        <RecipeCard recipe={pizzaRecipe} />
      </div>

      <div className="section">
        <h2>Challenge 9: Content Sections</h2>
        <ContentSection title="About Us">
          <p>We are a company dedicated to great service and innovation.</p>
          <img src="https://tse1.mm.bing.net/th/id/OIP.afQdiNPi7rhMZnP6xqoyLwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="About Us" />
        </ContentSection>
        <ContentSection title="Contact Info">
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </ContentSection>
      </div>

      <div className="section">
        <h2>Challenge 10: Filterable List</h2>
        <FilterableList items={inventoryItems} />
        <FilterableList items={inventoryItems} filterCategory="Electronics" />
      </div>
    </>
  );
}

export default App;

