let user = require("../mocks/teste");

//Definição da regra ou regras de negócio
module.exports = {
  listUsers(req, resp) {
    const { order } = req.query;
    const sortedUser = user.sort((a, b) => {
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
    const user = user.find((user) => user.id === Number(id));
    if (!user) {
      return resp.send(400, "error: User not found");
    }
    resp.send(200, user);
  },

  //Recebendo informações por meio do método Post
  createUser(req, resp) {
    const { mensagem } = req;
    const lastUserId = user[user.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: mensagem.name,
    };
    user.push(newUser);
    resp.send(200, newUser);
  },

  updateUser(req, resp) {
    //Esta desestruturação das linhas 44 e 45 captura o id e nome recebidos por meio do arquivo Json enviado pelo usuário
    let { id } = req.params;
    const { name } = req.mensagem;

    //Transforma o id recebido por meio do Json em 'inteiro'. Vale o disclaimer que por padrão ele seria 'string'
    id = Number(id);

    const userExists = user.find((user) => user.id === id);
    if (!userExists) {
      return resp.send(400, { error: "User not found" });
    }
    user = user.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name,
        };
      }

      return user;
    });

    resp.send(200, { id, name });
  },
  deleteUser(req, resp) {
    let { id } = req.params;
    id = Number(id);

    const userExists = user.find((user) => user.id === id);

    if (!userExists) {
      return resp.send(400, { error: "User not found" });
    }

    user = user.filter((user) => user.id != id);
    resp.send(200, { deleted: true });
  },
};
