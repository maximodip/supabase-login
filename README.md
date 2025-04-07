# Login Supabase

This project is a simple example of how to use [Supabase](https://supabase.io/) to create a login system with email and password, and also to use the Google OAuth to login.

## Stack

- [React](https://reactjs.org/) as the frontend framework
- [Supabase](https://supabase.io/) as the backend service
- [Vite](https://vitejs.dev/) as the development server and bundler
- [Tailwind CSS](https://tailwindcss.com/) as the CSS framework

## Features

- Login with email and password
- Login with Google OAuth
- Protected routes with Supabase's `auth` hook

## Setup

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a `.env` file with the following variables:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

4. Start the development server with `npm run dev`
5. Open the app in your browser at `http://localhost:5173`

## How it works

The app uses the `supabase` hook to manage the authentication state. When the user logs in with email and password, the app makes a request to the Supabase API to authenticate the user. If the user is authenticated, the app redirects the user to the protected route.

When the user logs in with Google OAuth, the app makes a request to the Google OAuth API to authenticate the user. If the user is authenticated, the app redirects the user to the protected route.

The protected route uses the `auth` hook to check if the user is authenticated. If the user is not authenticated, the app redirects the user to the login page.

## Code organization

The code is organized in the following folders:

- `src`: contains the React components and the main application code
- `src/assets`: contains the static assets, such as images and fonts
- `src/components`: contains the reusable React components
- `src/pages`: contains the pages of the app
- `src/lib`: contains the utility functions and the Supabase client
- `src/styles`: contains the global styles of the app

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.
