# Nuxt Skeleton App

This is a skeleton app based on Mazer Nuxt project. It provides a minimal setup for building a Nuxt application with OAuth authentication using GitHub and Google providers, as well as normal user registration and login.

## Getting Started

To get started with this skeleton app, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/chris-lu/nuxt-skeleton-app.git
    ```

2. Install the dependencies:

    ```bash
    cd nuxt-skeleton-app
    npm install
    ```

3. Configure envirment variables and edit the file:

    ```bash
    cp .env.example .env
    vi .env
    ```

3. Generate and run the prisma migration

    ```bash
    npm run migrate
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    The app will be accessible at `http://localhost:3000`.

## Directory Structure

The key directories in this skeleton app are:

- `pages/`: Contains the application's pages.
- `components/`: Contains reusable components used in the app.
- `layout/`: Contains the possible layouts from Mazer Nuxt
- `prisma/`: Contains the Prisma schema for the MongoDB models.
- `server/`: Contains the server-side code for handling authentication and API routes.

## Authentication

This skeleton app uses the following modules for authentication:

- Nuxt Auth: Provides authentication functionality for the app. Refer to the [Nuxt Auth documentation](https://sidebase.io/nuxt-auth/getting-started/installation) for more information.
- Prisma: Used to create the models for the MongoDB database.

The `auth.ts` file in the `server/` directory handles the authentication logic. It configures the authentication providers, such as GitHub and Google, and defines the authorization logic for the `CredentialsProvider`.

## API Routes

The `server/api/auth/` directory contains the API routes for authentication. The `register.post.ts` file handles the registration logic. It receives the user's name, email, and password, validates the inputs, hashes the password, and creates a new user in the database using Prisma.

## Development and Production

To start the development server, use the following command:


## Production

Build the application for production:

```bash
# npm
npm run build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
