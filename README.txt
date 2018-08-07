Aplicação Ranking tweets - Locaweb:

Autor: André Duarte Antunes

    --------------------------------------------------------------------------------------------

Aplicação / Versões

JS
CSS3
HTML5
Node       v8.11.3                                                                                                                                                                                                                                                               
Bootstrap  v4
Jquery     v3.3.1
Dockerfile v18.06.0-ce

    --------------------------------------------------------------------------------------------

Tutorial Execução:

Porta utilizada: 3000;

- Executar o servidor:
    1º Entre na pasta Servidor
    2º Abra a linha de comandos correspondente ao diretorio em que está
    3º Execute o seguinte comando: "npm start"

    -- Interface Usuário: 
        Após realizar a execução do serviço, basta ir na pasta /Cliente e abrir o arquivo index.html no navegador.

    --------------------------------------------------------------------------------------------

- Utilizar o dockerfile:
    1º Entre na pasta Servidor
    2º Abra a linha de comandos correspondente ao diretorio em que está
    3º Monte sua imagem docker 
        - comando: docker build -t <DockerUsername>/<NameApp> .
    4º Execute a imagem
        - comando:docker run -p 3000:3000 <DockerUsername>/<NameApp>

    -- Interface Usuário: 
        Após realizar a execução do serviço, basta ir na pasta /Cliente e abrir o arquivo index.html no navegador.

    --------------------------------------------------------------------------------------------

- Realizar os Testes automatizados:
    1º Entre na pasta Servidor
    2º Abra a linha de comandos correspondente ao diretorio em que está
    3º Execute o comando
        - npm test

    --------------------------------------------------------------------------------------------

- Requisito do sistema:
    1ª Caso seja necessario realizar a visualização dos json basta realizar os processos de servidores anteriormente
    e acessar o navegador utilizando localhost:3000 e concatenar com a rota desejada:

    1ª - /most_relevants
    2ª - /most_mentions