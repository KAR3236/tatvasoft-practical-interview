const jwt = require('jsonwebtoken');

const generateToken = (data) => {
    return jwt.sign({ id: data.id, role: data.role }, 'privateKey', {
        expiresIn: '1d'
    });
}

const authorization = (roles = []) => {
    return (req, res, next) => {
        try {
            const token = req.header('Authorization');
            if (!token) {
                res.status(403).send('Token missing');
            }

            const tokenVerify = jwt.verify(token, 'privateKey');
            req.user = tokenVerify;

            if (roles.length > 0 && roles.some((role) => role === tokenVerify.role)) {
                next();
            } else {
                res.status(401).json({
                    status: "error",
                    code: 401,
                    message: "This role is not valid",
                });
            }
        } catch (error) {
            res.status(401).json({
                status: "error",
                code: 401,
                message: error,
            })
        }
    }
}

module.exports = {
    generateToken,
    authorization,
}