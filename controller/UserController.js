const users = require("../mocks/teste");

//Definição da regra ou regras de negócio
module.exports = {
  listUsers(req, resp) {
    const { order } = req.query;
    const sortedUser = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    resp.writeHead(200, { "content-type": "application/json" });
    resp.end(JSON.stringify(sortedUser));
  },
  pageIni(req, resp) {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.end("<h1> Servidor ativo</h1>");
  },
  getUserById(req, resp) {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      resp.send(400, "error: User not found");
    } else {
      resp.send(200, user);
    }
  },
};
