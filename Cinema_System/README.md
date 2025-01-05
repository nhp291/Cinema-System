# Cinema System Frontend

This project is a React-based frontend for a cinema booking system. It interacts with a backend built using Spring Boot to manage movies, bookings, and user interactions.

## Project Structure

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
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Entry point for the React application
│   └── types            # TypeScript types and interfaces
│       └── index.ts
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd cinema-system-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- User-friendly interface for browsing movies and booking tickets.
- Integration with a Spring Boot backend for data management.
- Reusable components for better maintainability.

## Usage Guidelines

- Modify the components in the `src/components` directory to create new UI elements.
- Use the `src/services/api.ts` file to interact with the backend API.
- Update the `src/types/index.ts` file to define new TypeScript interfaces as needed.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.