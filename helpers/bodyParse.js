function bodyParse(req, callback) {
  let mensagem = "";
  req.on("data", (chunk) => {
    mensagem += chunk;
  });
  req.on("end", () => {
    mensagem = JSON.parse(mensagem);
    req.mensagem = mensagem;
    callback();
  });
}

module.exports = bodyParse;
