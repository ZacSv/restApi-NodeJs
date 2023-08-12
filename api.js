const http = require("http");
const routes = require("./routes");
const { URL } = require("url");
const { parse } = require("path");

const server = http.createServer((req, resp) => {
  const parsedUrl = new URL(`http://localhost:3000${req.url}`);

  console.log(
    `URL: ${req.url} Request method: ${req.method} | Endpoin: ${parsedUrl.pathname}`
  );

  let { pathname } = parsedUrl;
  const splitEndpoint = pathname.split("/").filter(Boolean);
  let id = null;

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  //Função que procura a rota dentro do módulo 'routes' e a guarda dentro de 'route' para depois ser usado novamente caso a mesma exista
  const route = routes.find(
    (routeObj) =>
      routeObj.enpoint === pathname && routeObj.method === req.method
  );

  if (route) {
    req.query = Object.fromEntries(parsedUrl.searchParams);
    req.params = { id };

    route.handler(req, resp);
  } else {
    console.log("lamentavel");
  }
});

server.listen(3000, () =>
  console.log("Server started at http://localhost:3000")
);
