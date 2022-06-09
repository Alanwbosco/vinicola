Para adicionar itens no store da vinícola é precisa instalar o postman, swagger ou qualquer outro api-test para fazer as inserções.

O caminho padrão será, para o postman, a seguinte url: http://localhost:3000/vinhos - como post - e deve-se programar como JSON a modalidade de escrita; por fim, é necessário adcionar cada item, segundo este padrão:

{
    "nome"  : "Nome do Vinho",
    "descricao" : "Descrição do Vinho",
    "foto" : "url foto vinho",
    "preco" : 570.55,
    "peso"  : 2500
}

O projeto foi realizado no linux utliznado o WSL, recomendo testar nele.

Informações Projeto Vinicola 
--------------------------------------------------------
CMD 
--------------------------------------------------------
cd vinicola 
ls
cd vinicola/
ls
code .
--------------------------------------------------------
Visual Code
--------------------------------------------------------
Servidor API (Back)
cd api
Para instalar as dependências
npm install 
npm start
--------------------------------------------------------
Servidor (FRONT)
cd vinicola
Para instalar as dependências
npm install 
npm start
--------------------------------------------------------
Versões:
node v16.15.0
npm 8.5.5
