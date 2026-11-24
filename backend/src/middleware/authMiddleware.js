
import jwt from 'jsonwebtoken';

export function verificarToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                mensaje: 'No hay una sesión activa'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = decoded;

        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                mensaje: 'La sesión ha expirado'
            });
        }

        return res.status(401).json({
            mensaje: 'Token inválido'
        });
    }
}
