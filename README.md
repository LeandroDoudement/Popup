# Popup

Este repositório foi criado como parte de um desafio técnico. O objetivo era desenvolver dois Popups customizáveis, um para exibir um jogo de caça-níquel e outro para exibir um vídeo. As opções de configuração são definidas em um arquivo JSON, permitindo a flexibilidade de escolher as características de cada Popup.

## Configuração

As configurações dos Popups são armazenadas no arquivo `configuration-data.json`. Este arquivo contém as seguintes opções:

- `type`: Define se o que vai ser exibido é o jogo ou vídeo, bastando mudar o valor para "game" ou "video"
- `title`: Define o título do Popup
- `subtitle`: Define o subtítulo do Popup
- `asset`: Define a url da imagem ou do vídeo do Popup
- `consentCheckbox`: Define o consentimento ou não para coleta de dados, sendo no caso marcado necessário atribuir o valor true, e no caso contrário atribuir o valor false.
- `activatedFields`: Objeto que possui as chaves email, name, phone e gender, em que atribuindo true as chaves habilita o campo no formulário do Popup, e no caso contrário desabilita.

## Como executar

Para executar a aplicação, você precisa ter o Yarn instalado. Siga os passos abaixo:

1. Abra o terminal na pasta raiz do projeto.
2. Execute o comando `yarn install` para instalar as dependências.
3. Após a conclusão da instalação, execute o comando `yarn start` para iniciar a aplicação.
4. O Popup será exibido no navegador de sua preferência, de acordo com as configurações definidas no arquivo `config.json`.
