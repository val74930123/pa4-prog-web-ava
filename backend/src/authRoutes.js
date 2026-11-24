
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verificarToken } from './middleware/authMiddleware.js';

const router = Router();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === 'true',
    sameSite: 'lax',
    path: '/'
};

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                mensaje: 'Correo y contraseña son obligatorios'
            });
        }

        const usuarioValido = email === process.env.AUTH_USER;
        const passwordValido = await bcrypt.compare(
            password,
            process.env.AUTH_PASSWORD_HASH || ''
        );

        if (!usuarioValido || !passwordValido) {
            return res.status(401).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
        );

        res.cookie('token', token, {
            ...cookieOptions,
            maxAge: 15 * 60 * 1000
        });

        return res.json({
            mensaje: 'Inicio de sesión exitoso',
            usuario: { email }
        });

    } catch (error) {
        console.error('Error en login:', error);

        return res.status(500).json({
            mensaje: 'Error interno del servidor'
        });
    }
});

// VERIFICAR SESIÓN
router.get('/me', verificarToken, (req, res) => {
    return res.json({
        autenticado: true,
        usuario: { email: req.usuario.email }
    });
});

// LOGOUT
router.post('/logout', (req, res) => {
    res.clearCookie('token', cookieOptions);

    return res.json({
        mensaje: 'Sesión cerrada correctamente'
    });
});

export default router;
