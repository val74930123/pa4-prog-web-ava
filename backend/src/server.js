import express from 'express';
import cors from 'cors';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());


// Registro de peticiones HTTP
app.use((req, res, next) => {
    const inicio = Date.now();

    res.on('finish', () => {
        const duracion = Date.now() - inicio;

        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duracion}ms`
        );
    });

    next();
});

let solicitudes = [
    { id: 1, titulo: 'Constancia de estudios', solicitante: 'Ana Torres', estado: 'Pendiente' },
    { id: 2, titulo: 'Reclamo de nota PA2', solicitante: 'Luis Ramos', estado: 'En revision' },
    { id: 3, titulo: 'Retiro del curso de Estadistica', solicitante: 'Marta Diaz', estado: 'Aprobada' },
];

app.get('/api/solicitudes', (req, res) => {
    res.json({ solicitudes });
    }
);

app.get('/api/solicitudes/:id', (req, res) => {
    const solicitud = solicitudes.find((s) => s.id === Number(req.params.id));
    if (!solicitud) return res.status(404).json({ mensaje:'Solicitud no encontrada'});
    res.json(solicitud);
    }
);

app.post('/api/solicitudes', (req, res) => {
    const { titulo, solicitante } = req.body;
    if (!titulo || !solicitante) {
        return res.status(400).json({ mensaje: 'Ttitulo y solicitante son obligatorios' });
    }
    const nueva = { id: solicitudes.length + 1, titulo, solicitante, estado: 'Pendiente' };
        solicitudes.push(nueva);
        res.status(201).json(nueva);            
    }
);

app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
