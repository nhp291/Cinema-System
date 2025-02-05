
# Cinema-System

## Cinema System Frontend

This project is a React-based frontend for a cinema booking system. It interacts with a backend built using Spring Boot to manage movies, bookings, and user interactions.

### Project Structure

```
cinema-system-frontend
├── public
│   ├── index.html        # Main HTML file for the application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Reusable components
│   │   └── ExampleComponent.tsx
│   ├── pages             # Application pages
│   │   └── HomePage.tsx
│   ├── services          # API service functions
│   │   └── api.ts
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point for the React application
│   └── types             # TypeScript types and interfaces
│       └── index.ts
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nhp291/cinema-system-backend.git
   cd cinema-system-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

### Features

- User-friendly interface for browsing movies and booking tickets.
- Integration with a Spring Boot backend for data management.
- Reusable components for better maintainability.

### Usage Guidelines

- Modify the components in the `src/components` directory to create new UI elements.
- Use the `src/services/api.ts` file to interact with the backend API.
- Update the `src/types/index.ts` file to define new TypeScript interfaces as needed.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.


---

## Cinema-System-BE

### Backend Cinema Booking System - Spring Boot

#### Overview

Cinema System is a backend application built using **Spring Boot** to manage cinema-related functions such as movies, theaters, ticket booking, payments, and user management. The application includes features like movie screening schedules, customer ticket bookings, payments, movie reviews, and more.

#### Features

- **Movie Management**: Add, edit, delete movie information including title, genre, director, actors, etc.
- **Ticket Booking System**: Customers can book tickets for movie screenings at various theaters.
- **Payment Integration**: Supports multiple payment methods such as credit cards, PayPal, etc.
- **Customer Management**: Manage customer information, registration, authentication, and profile management.
- **Movie Rating**: Customers can rate and comment on movies.
- **Discounts and Promotions**: Manage discounts and promotions for movies.
- **Admin Dashboard**: Admin can manage movies, bookings, customers, payments, etc.

#### Technologies Used

- **Backend**: Spring Boot, Spring Data JPA, Spring Security
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token)
- **Build Tool**: Maven
- **API Documentation**: Swagger/OpenAPI

#### Requirements

Before getting started, ensure you have the following tools installed:
- Java 17 or newer
- Maven 3.6 or newer
- MySQL or any compatible relational database
- An IDE (e.g., IntelliJ IDEA, VSCode)

#### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nhp291/cinema-system-backend.git
   cd cinema-system-backend
   ```
