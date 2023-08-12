const teste = require("../mocks/teste");
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
      return resp.send(400, "error: User not found");
    }
    resp.send(200, user);
  },

  //Recebendo informações por meio do método Post
  createUser(req, resp) {
    let mensagem = "";
    req.on("data", (chunk) => {
      mensagem += chunk;
    });
    req.on("end", () => {
      mensagem = JSON.parse(mensagem);
      const lastUserId = teste[teste.length - 1].id;
      const newUser = {
        id: lastUserId + 1,
        name: mensagem.name,
      };
      teste.push(newUser);
      resp.send(200, newUser);
    });
  },
};
