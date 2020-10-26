# Projeto requerimento para o curso Aceleração Global Dev #1

## Conceitos Avançados de performance e otimização usando Angular

### Projeto proposto

Este projeto em Angular é uma continuidade do projeto desenvolvido no curso Conceitos Avançados de performance e otimização usando Angular . Requerimentos :

### Usar o enableProdMode

Alterei environment.ts para production: true e hmr: false em starter-kit\src\environments\environment.ts )

### Tree-shakeable providers

(providedIn)

### Carregamento Tardio de recursos (Lazy Load)

Está sendo feito no about e no list example

### Change Detection

Está sendo feito no row-table nada é rerenderizado se não houver mudança no componente

- Quando o botao editar é clicado um patch altera a base de dados e o componente
  não é rerenderizado ( pois já apresenta a mudança feita )

### Cada Row da Tabela deve ser um componente

- Criei o component row table que representa cada linha da tabela 

```JS
<app-row-table \*ngFor="let user of usuarios; trackBy: trackById" [user]="user"> 
</app-row-table>
```

- Esse componente é chamado e são injetadas as informações do usuário nele.

### O componente que ter um input e deve-se usar o changeDetection on push
  
- Se uma row alterar e o por exemplo o avatar nao alterar ele não renderiza o componente de novo

### trackBy no \*ngFor

Feito dentro do list-example

### CRUD com a API do GitHub

- Foi utilizado o json server conforme sugestão do professor foram criados o post, patch, delete e na aula já haviamos criado o get

Para utilização é necessário ter o Angular instalado:

```JS
npm install -g @angular/cli
npm i @angular-devkit/build-angular
npm install -g typescript
```

Para utilizar realizar o CRUD deve-se ter o json-server instalado:

```JS
npm install -g json-server
cd src/db   (local onde o banco de dados está)
json-server --watch db.json
```