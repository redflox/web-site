// src/pages/api/spotify-callback.ts
const CLIENT_ID = import.meta.env.SPOTIFY_CLIENT;
const CLIENT_SECRET = import.meta.env.SPOTIFY_SECRET;
const REDIRECT_URI = 'http://localhost:4321/api/spotify-callback/';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
    // Parse the full URL to get the searchParams
    const url = new URL(request.url);
    // Retrieve the 'code' parameter from the URL
    const code = url.searchParams.get('code');

    if (typeof code !== 'string') {
        return new Response(JSON.stringify({ error: 'Código no proporcionado en la URL' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        });

        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body,
        });

        if (!tokenResponse.ok) {
            throw new Error('Error al solicitar el token de Spotify');
        }

        const { access_token, refresh_token } = await tokenResponse.json();
        // Guarda y maneja los tokens aquí

        return new Response(JSON.stringify({ access_token, refresh_token }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: `Error en la autenticación: ${error.message}` }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};
