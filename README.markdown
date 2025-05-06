# Nucleus UI Authentication Forms

This project contains the **Login** and **Signup** forms for the Nucleus UI application, a web-based platform for designing with a powerful component library. The forms are built using **React**, styled with **Tailwind CSS**, and include navigation with **React Router**. The forms support standard email/password authentication and Google sign-in integration.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Signup Form**:
  - Fields: Name, Email, Password, Confirm Password
  - Google sign-up integration
  - Responsive design with Tailwind CSS
- **Login Form**:
  - Fields: Email, Password
  - "Remember sign-in details" checkbox
  - "Forgot password?" link
  - Google sign-in integration
  - Link to signup page
- Dynamic input rendering using the `map` function for maintainability
- Smooth transitions and focus states for accessibility
- Mobile-friendly layout

## Technologies
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation between login and signup pages
- **JSX**: Syntax extension for React components
- **CDN-hosted dependencies** (assumed for React, React Router, and Tailwind CSS)

## Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anup0206/Login_Signup-form
   cd nucleus-ui-auth
   ```

2. **Install Dependencies**:
   If using a Node.js setup, install dependencies:
   ```bash
   npm install
   ```
   Alternatively, use CDN-hosted scripts for React, React Router, and Tailwind CSS (see `index.html` example below).

3. **Set Up Tailwind CSS**:
   Include Tailwind CSS via CDN in your HTML:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   ```

4. **Set Up React and React Router**:
   Include React and React Router via CDN:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.4.0/dist/umd/react-router-dom.min.js"></script>
   ```

5. **Run the Application**:
   If using a local development server:
   ```bash
   npm start
   ```
   Or serve the `index.html` file using a static server (e.g., `npx serve`).

## Usage
- **Signup Form**:
  - Located at `/signup`
  - Users can enter their name, email, and password to create an account.
  - Supports Google sign-up (requires backend integration for authentication).
- **Login Form**:
  - Located at `/`
  - Users can log in with their email and password.
  - Includes a "Remember sign-in details" checkbox and a "Forgot password?" link (link functionality requires backend setup).
  - Supports Google sign-in (requires backend integration).
- **Navigation**:
  - The login form links to the signup page via a React Router `Link` component.
  - Ensure React Router is configured to handle `/` (login) and `/signup` routes.

### Example `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nucleus UI</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.4.0/dist/umd/react-router-dom.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.18.9/babel.min.js"></script>
  <script type="text/babel">
    // Your React app code here, including LoginForm.jsx and SignupForm.jsx
  </script>
</body>
</html>
```

## Project Structure
```
nucleus-ui-auth/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx    # Login form component
│   │   ├── SignupForm.jsx   # Signup form component
│   ├── App.jsx              # Main app with React Router setup
├── public/
│   ├── index.html           # Main HTML file
├── README.md                # Project documentation
├── package.json             # Node.js dependencies (if applicable)
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.