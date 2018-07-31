# InventoryManagement

This project is Shopping Portal. Where user can see the product and add to the cart to buy.

This project is done in __Angular 6__ and __Bootstrap 4__.

The aim in this project is to demonstrate Parent and Child communication , using `@Input` and `@Output` and learn Bootstrap.

Responsive Website

To preview this project [click here](https://inventory-management-arulqajmka.now.sh)

---

## Over View of this Project

### Component

- At the top we see Inventory Management App: that’s our application(__App Component__).
- Under the application we have the __Products List__ components.
- The Products List component has __Product Rows__, one for each product.
- And the Product Row uses three components itself: one for the __Product Image__ Component , __Product Department__ Component, and  __Price Display__ Component.
- There is one more component under app component is __Shopping Cart__ component to display the product add to cart.

### Model

- Product Model: it’s just a model that we’ll use in our app to store each product detail.

---

## Project Flow

- Product array is declared in App Component and I initialized with list of product.
- This array is sent to ProductList from there one one prodout is send to ProductRow using `*ngFor`.
- ProductRow display the product data using ProductImage , ProductDepartment, and  PriceDisplay Component.
- One "Add to Cart" button is added in ProductRow Component, to add product to cart.
- so I have emit event from  ProductRow -> ProductList -> AppComponent. Event is Product Object.
- In AppComponent there is Array of Product called 'shoppingList' where all the selected product is push.
- Then I have send this array(shoppingList) to Shopping Cart component. Component will only display the product which user as add to cart.

---