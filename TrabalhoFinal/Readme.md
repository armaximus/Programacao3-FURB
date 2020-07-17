Baixar os nugets abaixo e adicionar as referências ao projeto:
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.SQLServer
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.IdentityModel.Tokens
- System.IdentityModel.Tokens.Jwt

Pegar a porta do localhost, para pegar você pode executar o sistema uma vez caso seja necessário, copie a url do seu localhost (ex: localhost:46780).
Abra o arquivo Pessoa.js localizado em wwwroot>js>Pessoa.js.
Alterar o "this.baseRequestURL" com o valor do seu localhost. Detalhe, deve ir sem a barra no final.
Por fim executar a solução.
