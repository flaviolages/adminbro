Requisitos:

    git
    npde
    npm
    admin-bro
    @admin-bro/express
    express
    express-formidable

    mongodb-org (no linux) ou cloud  https://www.mongodb.com/cloud/atlas
    @admin-bro/mongoose
    mongoose



INSTALAÇÂO MONGODB LINUX ( Debian 10 Buster): 

    1. Gnupge, bibliotecas necessárias
    2. Importe a chave GPG pública do MongoDB
    3. Crie um /etc/apt/sources.list.d/mongodb-org-4.4.listarquivo para MongoDB
        DOCUMENTAÇÂO:
        https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/


        COMANDOS COM USUARIO ROOT:
            apt-get install gnupg
            wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
            echo  "deb http://repo.mongodb.org/apt/debian buster / mongodb-org / 4.4 main"  | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
            apt-get update
            apt list --upgradable
            apt-get install -y mongodb-org
            systemctl start mongod






Por Flávio Lages Junior, isso foi baseado no video CRUD Completo em menos de 12 minutos do canal Rocketseat por Mayke Brito
