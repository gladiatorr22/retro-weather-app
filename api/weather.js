/**
 * Vercel Serverless Function
 * This file (api/weather.js) will run on Vercel's servers.
 * It reads the secret API key from Environment Variables.
 */
export default async function handler(request, response) {
    // 1. Get the city from the query (e.g., /api/weather?city=London)
    const { city } = request.query;

    // 2. Get your secret API key from Vercel's Environment Variables
    // We will set this in the Vercel dashboard in Step 3
    const apiKey = process.env.VITE_OPENWEATHER_API_KEY;

    if (!city) {
        return response.status(400).json({ message: "City parameter is required" });
    }

    if (!apiKey) {
        return response.status(500).json({ message: "API key is not configured on server" });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(apiUrl);
        const data = await weatherResponse.json();

        if (!weatherResponse.ok) {
            // Forward the error from OpenWeatherMap
            return response.status(weatherResponse.status).json({ message: data.message || "City not found" });
        }

        // 3. Send the successful data back to your index.html
        return response.status(200).json(data);

    } catch (error) {
        return response.status(500).json({ message: "Internal Server Error" });
    }
}