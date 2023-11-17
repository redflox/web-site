import type { APIRoute } from 'astro'; 
import SpotifyWebApi from "spotify-web-api-node"

const api = new SpotifyWebApi({
    clientId: import.meta.env.SPOTIFY_CLIENT,
    clientSecret: import.meta.env.SPOTIFY_SECRET,
    redirectUri: import.meta.env.SPOTIFY_REDIRECT,
})


export const GET: APIRoute = async ({ params, request }) => {
    try {
        api.setRefreshToken(import.meta.env.SPOTIFY_REFRESH_TOKEN);
        const data = await api.refreshAccessToken();
        api.setAccessToken(data.body.access_token);
        

        const recentTracks = await api.getMyRecentlyPlayedTracks({
            limit: 1,
        });

        // res.status(200).json(recentTracks.body.items[0].track);
        return new Response(
            JSON.stringify({
                data: recentTracks.body.items[0].track,
            })
        )

    } catch (err) {
        console.log("Something went wrong!", err);
        return new Response(
            JSON.stringify({
                error: err,
            })
        )
    }
}

