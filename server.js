import express from 'express';
import axios from 'axios';
import path from 'path'; // Importa el módulo path para manejar rutas de archivos
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8080;

const clientId = '58cf7eed701340c784b4d47ad2534300';
const clientSecret = '84b83e7aef9844639c8040b9e301f925';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// ! - CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Ruta para manejar la solicitud de búsqueda de artistas desde el frontend
app.get('/api/search', async (req, res) => {
    try {
        // Obtener token de acceso de Spotify
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            },
        });

        // para pasar el token al front end se puede hacer de la siguiente manera
        res.json({ token: response.data.access_token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el token de acceso de Spotify' });
    }
});


// Servir archivos estáticos de la carpeta "build" de la aplicación de React
app.use(express.static(path.join(__dirname, 'build')));

// Ruta para manejar todas las demás solicitudes, sirviendo el index.html de la aplicación de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
