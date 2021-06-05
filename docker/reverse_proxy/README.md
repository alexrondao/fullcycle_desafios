# Desafio Proxy Reverso (nginx-nodejs-mysql)
Criar um docker compose que suba uma imagem de Nginx, NodeJs e MySQL, colocando o Nginx como proxy reverso e adicionar uma função no NodeJs para retornar os registros do banco de dados MySQL.

### Imagem do docker da aplicação
para este desafio serão três imagens para serem usadas são elas:
Copie o comando abaixo:

    $ docker pull lexcorp/nginx
    $ docker pull lexcorp/node
    $ docker pull lexcorp/mysql

### Acesse o Docker Hub diretamente
- https://hub.docker.com/r/lexcorp/nginx
- https://hub.docker.com/r/lexcorp/node
- https://hub.docker.com/r/lexcorp/mysql

### Acesse o repostório do Github
Acesse o repositório para executar o `docker-compose up -d` e subir todos os serviços. Após baixar o arquivo **docker-compose.yaml**, execute o comando abaixo no seu prompt e verifique se está com o [docker](https://www.docker.com/products/docker-desktop) instalado.

Copie o comando abaixo:

    $ docker-compose up -d

### Executando o sistema
Após os serviços estarem executando. Digite o endereço http://localhost:8080 no seu browser favorito e veja a mágica acontecer. :wink: :smiley:

Obrigado! :yum:
Alex Rondão