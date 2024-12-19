# db-voluntariado-frontend
Desafio StartDB - Desenvolvimento Frontend de uma aplicação web para Voluntariado intergeracional.

## Nome: `Ana Cagliari` e `Suene Souza`

## Descrição do projeto
Este projeto é desenvolvido em React com o intuito de realizar o desafio da DB em parceria com a PUCRS.
As solicitações mínimas são:
a) página para listar uma coleção de objetos;
b) página para inserir um objeto novo;
c) página para editar um objeto;
d) transição entre duas páginas.

## Como Executar o Projeto
1. Iniciar o Backend: [Veja como neste link](https://github.com/anacagliari/db-voluntariado-backend)
   
2. Constate que o Backend está rodando.

3. Clone o repositório:
 ```
git clone https://github.com/anacagliari/db-voluntariado-frontend.git
 ```
4. Entre pasta do projeto no terminal:
```
cd exemplos/db-voluntariado-frontend
```

5. Navegue até o diretório.
```
cd db-voluntariado-frontend
```

6. Rode npm install para instalar as dependências:
```
npm install 
```


7. E em seguida, npm run dev, para iniciar a execução do projeto:
```
npm run dev
```

8. No terminal, após estar rodando, digite "o" e enter:
```
o + enter
```


## Componentes
Os componentes estão no diretório `./src/components`
- MyHeader:
  - Componente com conteúdo sobre o cabeçalho.

- MyFooter:
  - Componente com conteúdo sobre o rodapé.
## Models
Os models estão no diretório `./src/models`
- BeneficiaryDto
  - Representa os dados de um beneficiário.
- BeneficiaryResponseDto
  - Define a estrutura dos dados retornados ao consultar um beneficiário.
- SupportDto
  - Representa os dados de uma conexão de suporte.
- SupportResponse.Dto
  - Define a estrutura dos dados retornados ao consultar uma conexão de suporte.
- VolunteerDto
  - Representa os dados de um voluntário.

## Páginas
As páginas estão no diretório `./src/pages`
- About
  - Página com conteúdo sobre o link correspondente ao "Sobre"
- Beneficiary
  - Página com conteúdo sobre o link correspondente ao "Beneficiário"
- BeneficiaryRegistration
  - Modal com o formulário de cadastro do beneficiário.
- Building
  - Página com conteúdo sobre página em construção.
- Home
  - Página com conteúdo sobre o link correspondente ao "Início"
- NotFound
  - Página com conteúdo sobre erro ao digitar um caminho sem rota existente.
- SupportPortal
  - Página com conteúdo sobre as conexões do voluntário.
- Volunteers
  - Página com conteúdo sobre o link correspondente ao "Voluntário" 
- VolunteersRegistration
  - Modal com o formulário de cadastro do voluntário.

## Props
As props estão no diretório `./src/props`
- BeneficiaryRegistrationProps
  - Define as propriedades para o componente de registro de beneficiário, controlando a exibição do modal de cadastro e fornecendo uma função para fechar o modal.
- VolunteersRegistrationProps
  - Define as propriedades para o componente de registro de voluntário, controlando a exibição do modal de cadastro e fornecendo uma função para fechar o modal.

## Services
O Service está no diretório `./src/services`
- BeneficiaryService:
    - Utilizado para integrar com a API de backend.
- SupportService:
    - Utilizado para integrar com a API de backend.
- VolunteerService:
    - Utilizado para integrar com a API de backend.
