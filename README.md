# PUCRS_HotwheelsCRUD

**Hotwheels CRUD**

Projeto desenvolvido para a matéria de Desenvolvimento FrontEnd do curso de
Análise e Desenvolvimento de Sistemas da **PUCRS** (Pontifícia Univerdade
Católica do Rio Grande do Sul).
O intuito desse projeto é a realização de um **CRUD** (CREATE, READ, UPDATE
AND DELETE) de Hotwheels, no qual é possível visualizar, adicionar, editar e
excluir carros.

**Tecnologias utilizadas**

• React

• Express 

• Postman

• Axios

• Tailwind CSS (framework de CSS)

# API REST

A API utilizada (localizada na pasta hothweelsapi) foi disponibilizada pelo professor da disciplina sendo executada em um servidor **Express.js** e usando um **JSON** para armazenar os dados base para serem consumidos pelo projeto, tendo sido adicionadas algumas rotas para que o projeto funcionasse por completo.

# Como rodar o projeto

**Clone o respositório**

```
git clone git@github.com:francatti/PUCRS_HotwheelsCRUD.git
```

**Acesse a pasta da API**
```
cd hotwheelsapi

```

**Instale as dependências e rode a API**
```
npm install
npm start
```

**Faça o mesmo no CRUD**

```
cd hotwheelscrud
npm install
npm start
```

**A API estará disponível em http://localhost:5000**

**O projeto estará disponível em http://localhost:3000**

# Estruturação das pastas

**hotwheelsapi:** pasta que contém a API do projeto.

**hotwheelscrud:** pasta que contém o CRUD do projeto.

**public:** pasta que contém os arquivos públicos do projeto.

**src:** pasta que contém os arquivos do projeto.

**components:** pasta que contém os componentes do projeto.

**CarsEdit:** pasta que contém os componentes relacionados à edição e adição dos carros.

**NavBar:** pasta que contém o componente da barra de navegação e uma hook que auxilia a trocar o title da página atual.

**hooks:** pasta que contém os hooks do projeto.

**pages:** pasta que contém as páginas do projeto.

**App.jsx:** arquivo que contém o componente principal do projeto.

**index.js:** arquivo que contém a renderização do projeto.

**tailwind.config.js:** arquivo que contém a configuração do Tailwind CSS.

**README.md:** arquivo que contém a documentação do projeto (este arquivo).

**package.json:** arquivo que contém as dependências do projeto.

# Função de cada página

• Home: página inicial do projeto.

• About/Sobre: página que contém informações sobre o projeto.

• CarsList: página em que é possível visualizar os carros já adicionados, bem
como excluí-los e editá-los.

• AddCar: página em que é possível adicionar um novo carro.

• Car: página em que é possível visualizar o carro em específico e editá-lo.

# Função de cada componente

• Navbar: barra de navegação do projeto

• CarEdit: componente que permite a edição do carro que já consta na lista.

• CarAdd: componente que permite a adição de um novo carro.
