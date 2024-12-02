
## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências do Composer:
    ```sh
    composer install
    ```

3. Instale as dependências do NPM:
    ```sh
    npm install
    ```

4. Copie o arquivo `.env.example` para `.env` e configure suas variáveis de ambiente:
    ```sh
    cp .env.example .env
    ```

5. Gere a chave da aplicação:
    ```sh
    php artisan key:generate
    ```

6. Execute as migrações do banco de dados:
    ```sh
    php artisan migrate
    ```

## Uso

Para iniciar o servidor de desenvolvimento, execute:
```sh
php artisan serve
