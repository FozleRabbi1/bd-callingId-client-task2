# Digital Marketing

## Description
Brief description of the project and its purpose.

## Dependencies

- `@reduxjs/toolkit`
- `aos`
- `framer-motion`
- `jwt-decode`
- `react`
- `react-dom`
- `react-hook-form`
- `react-icons`
- `react-redux`
- `react-router-dom`
- `react-toastify`
- `redux-persist`
- `resize-observer-polyfill`
- `sweetalert2`
- `swiper`

## Product Management Features

### Fetching Products
- Retrieves a list of all products using `ProductsApi`.
- Displays a loading message while fetching data.

### Product Deletion
- Allows an admin user to delete a product.
  - Redirects to the login page if the user is not authenticated.
  - Ensures only users with the 'admin' role can delete products.
  - Prompts for confirmation before deleting a product.
  - Displays a success notification after deletion.

## User Management Features

### Fetching Users
- Retrieves a list of all users using `authApi`.
- Displays a loading message while fetching data.

### Role Management
- Allows an admin user to change the role of other users.
  - Redirects to the login page if the user is not authenticated.
  - Prevents users from changing their own role.
  - Ensures only users with the 'admin' role can change roles.
  - Shows a loading indicator during role updates.

### User Deletion
- Allows an admin user to delete a user.
  - Redirects to the login page if the user is not authenticated.
  - Ensures only users with the 'admin' role can delete users.
  - Prompts for confirmation before deleting a user.
  - Shows a loading indicator during the deletion process.

## Features

### Window Scroll to Top
- Automatically scrolls the window to the top on component mount.

### User Authentication
- Verifies if a user is logged in before allowing product creation or updating.
- Redirects to the login page if the user is not authenticated.

### Product Creation
- Allows authenticated users to create a new product.
- Handles image uploads via the imgbb API.
- Converts string values to numbers before submission.
- Displays success or error messages based on creation outcome.

### Product Updating
- Allows authenticated users to update an existing product.
- Handles image uploads using the imgbb API, with an option to skip updating the image.
- Filters out empty or null values from the update payload.
- Converts string values to numbers where appropriate.
- Displays success or error messages based on update outcome.

### Form Handling
- Utilizes `react-hook-form` for form state and validation.
- Provides error handling with visual feedback.

### State Management
- Uses Redux Toolkit’s  for managing product updates and creations.
- Manages loading states for file uploads and form submissions.

###  Notifications
- Displays success or error notifications after product actions.
