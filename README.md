# InventoryManagement

Shopping Portal

---

we could group the page into three high level components

1. The Navigation Component
2. The Breadcrumbs Component
3. The Product List Component

---

## The Navigation Component

This component would render the navigation section. This would allow the user to visit other areas
of the application. (Home , Porducts and Help)

## The Breadcrumbs Component

This would render a hierarchical representation of where in the application the user currently is.
Products/Product list

## The Product List Component

we wiil break the Product into Three Component:

- the Product Image component would be responsible for rendering a product image, given its image name
- the Product Department component would render the department tree, like Men > Shoes > Running Shoes
- the Price Display component would render the price.

---

## OverAll

- At the top we see Inventory Management App: that’s our application.
- Under the application we have the Navigation, the Breadcrumb and the Products List components.
- The Products List component has Product Rows, one for each product.
- And the Product Row uses three components itself: one for the image, the department, and the price.

---

## Model

- Product Model: it’s just a model that we’ll use in our app to store each product detail.
