// middleware simples para basic auth
const authMiddleware = (req, res, next) => {
  const auth = { login: 'admin', password: 'admin' }; // Change this to your actual credentials

  // Lendo login e senha do header de authorization
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  // verificando se estão corretos
  if (login && password && login === auth.login && password === auth.password) {
    // acesso ok
    return next();
  }

  // acesso negado
  return res.status(401).send('Authentication required.');
};

module.exports = authMiddleware;
