import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);



// esse arquivo e essas linhas de codigos são necessarios sempre que quiser upar pra um servidor mesmo,
// mas se for fazer um servidor local não é necessário
