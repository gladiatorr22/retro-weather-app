Retro Weather App

A simple, secure weather application with a unique sci-fi/retro terminal aesthetic. Built with plain HTML, CSS, and JavaScript, and deployed on Vercel.

Live link : https://retro-weather-app.vercel.app/

🚀 Description

This project is a functional weather app that allows users to fetch real-time weather data for any city. Its primary goal is to move beyond a standard UI by creating a specific, immersive theme inspired by old-school computer terminals and sci-fi aesthetics.

It features a custom pixel font, an animated starfield background, and a CRT scanline overlay, all while handling API requests securely through a serverless backend.

✨ Features

Real-time Weather Data: Displays current temperature, weather conditions, and wind speed for any city.

Unique Retro Aesthetic:

Custom pixel font (NDot55).

Pure CSS animated starfield background.

Subtle CRT scanline overlay.

Secure API Key: Uses a Vercel serverless function (/api/weather) to process API requests, keeping the OpenWeatherMap API key 100% secure and off the front-end.

Responsive Design: The UI adapts to mobile devices and correctly handles the on-screen keyboard.

Clean Error Handling: Provides clear user feedback for "City not found" or other API errors.

🛠️ Tech Stack

Front-End: HTML, CSS (Flexbox, Animations), JavaScript (Fetch API)

Back-End: Vercel Serverless Functions (Node.js)

API: OpenWeatherMap

Hosting: Vercel

⚙️ Running Locally & Deployment

This project is designed for a secure deployment on Vercel, where the api/weather.js function can access environment variables.

How to Deploy Your Own

Fork/Clone the repository.

Get an API Key: Sign up for a free API key from OpenWeatherMap.

Deploy on Vercel:

Import your repository to Vercel.

Go to the project Settings > Environment Variables.

Add a new variable with the Name VITE_OPENWEATHER_API_KEY and your API key as the Value.

Redeploy the project. Vercel will automatically detect the api folder and build the serverless function.
