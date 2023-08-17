# restApi-NodeJs
Fiz uma API simples utilizando JavaScript puro, nela simulo uma pequena base de dados com alguns usuários e o intuito deste pequeno projeto que fiz
é conseguir consultar os usuários existentes (GET), modificar atributos dos usuários existentes (PUT), criar novos usuários (POST) e também deletar
usuários que já existem na base de dados. A arquitetura das pastas ficou definida da seguinte maneira:

  - Controller -> Aqui estão as regras de negócios, os handlers, as funções que serão executadas mediante interação do usuário com a API.
  - Helpers -> Neste arquivo está contido a regra de como será recebido o arquivo JSON, como ele será lido, processado e armazenado.
  - Mocks -> Neste arquivo está a base de dados com os usuários fictícios
  - Api -> Este arquivo é a main e nele eu de fato crio o 'servidor', defino pequenas regras para a URL para que os query params possam ser lidos
  - Routes -> Neste arquivo contém as rotas que o usuário poderá acessar e suas devidas tratativas.
