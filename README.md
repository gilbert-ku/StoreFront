# Storefront Project

## Overview

This project is a simple storefront built using **React**, **TypeScript**, and **Vite** as the build tool. It integrates with the **Fake Store API** to display products and manage a shopping cart. The project includes:

- **Product display** with filtering by category.
- **Shopping cart** where users can add and remove items.
- **Product details page** where users can see more information about each product.
- **Routing** between different pages (product list, product details, shopping cart).

While **dark theme**, **unit tests**, and **Redux for state management** were not implemented in this challenge, these are areas that I plan to improve upon in the future.

## Thought Process and Approach

The goal was to create a simple yet functional storefront application that fetches products from the Fake Store API and enables users to interact with a shopping cart. I focused on the following:

1. **Efficient use of TypeScript**: I aimed to integrate TypeScript gradually, ensuring proper typing for API responses and state management.
2. **Modular Components**: I designed reusable components for the product cards, cart, and product details to ensure maintainability and scalability.
3. **State Persistence**: For simplicity, I opted to manage the shopping cart using **local storage** instead of more complex state management solutions like Redux.
4. **Routing**: React Router was used to manage navigation between the product listing, product detail pages, and shopping cart.
5. **Responsiveness**: Using **Tailwind CSS**, I ensured the application was responsive and could be used effectively on various screen sizes.

## Challenges Faced

- **Learning TypeScript**: Moving from JavaScript to TypeScript posed a few challenges, particularly with managing types for API responses and handling complex state. To address this, I gradually introduced TypeScript features and used static type checking to minimize runtime errors.
  
- **State Management**: Although I initially considered using **Redux** for state management, I chose to use **local storage** for storing the shopping cart data. This choice allowed me to focus on the core functionality and ensured the cart data was persisted between sessions.

## Features

- **Product Display**: Products are fetched from the [Fake Store API](https://fakestoreapi.com/) and displayed in a card format.
- **Category Filter**: Products can be filtered by category, improving the user experience.
- **Product Details Page**: Clicking on a product leads to a detailed view of the product.
- **Shopping Cart**: Users can add/remove products to/from the cart, with the state stored in **local storage**.
- **Routing**: React Router handles navigation between the product list, cart, and product details.
- **Responsive UI**: The app is fully responsive, built with **Tailwind CSS**.
- **Error Handling**: Loading states and error messages are implemented for API calls.

## Technologies Used

- **[React](https://reactjs.org/)**: UI library for building the user interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing to ensure safer and more reliable code.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for fast and responsive design.
- **[Vite](https://vitejs.dev/)**: A modern build tool for fast development.
- **[React Router](https://reactrouter.com/)**: To implement routing between pages.
- **[Fake Store API](https://fakestoreapi.com/)**: A free API used to fetch product data.

## Setup Instructions

To run this project locally:

1. Clone the repository:

```bash

git clone git@github.com:Mordula/challenge-react-storefront-gilbert.git
and 
cd challenge-react-storefront-gilbert

``` 

2. Install dependencies:

```bash
npm install
```

3. Start the application:
```bash
npm run dev
```

4. Open the app in your browser at http://localhost:5173/

## Future Improvements

- Implement **dark theme** for better user customization.
- Add **unit tests** for critical functionality to ensure robustness.
- Use **Redux** for more scalable state management, particularly for large-scale applications.

