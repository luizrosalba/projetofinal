# Projeto requerimento para o curso Aceleração Global Dev #1

## Conceitos Avançados de performance e otimização usando Angular

## Projeto proposto

Este projeto em Angular é uma continuidade do projeto desenvolvido no curso Conceitos Avançados de performance e otimização usando Angular

## Instalação

- Clonar o projeto

```JS
- git clone https://github.com/luizrosalba/projetofinal.git
```

- Para utilização é necessário ter o Angular instalado:

```JS
npm install -g @angular/cli
npm i @angular-devkit/build-angular
npm install -g typescript
```

- Para utilizar realizar o CRUD deve-se ter o json-server instalado:

```JS
npm install -g json-server
na raiz do projeto
cd db   (local onde o banco de dados está)
json-server --watch db.json
```

- Retornar a pasta raiz do projeto do projeto e iniciar o npm

```
npm start
```

## Requerimentos do Projeto

### Usar o enableProdMode

Alterei environment.ts para production: true e hmr: false em starter-kit\src\environments\environment.ts Dessa maneira o ProdMode foi ativado.

### Tree-shakeable providers

Tree Shakeable Providers são uma maneira de definir serviçoes e outros, utilizadas pelo Angular para melhorar a performace.

```JS
@Injectable({
  providedIn: 'root',
})
```

Neste projeto utilizamos o Injectable nos componentes list-example, post-list e row-table.

### Carregamento Tardio de recursos (Lazy Load)

Está sendo feito nos módulos about, no list example e no post-list

```JS
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'list-example',
    loadChildren: () => import('./list-example/list-example.module').then((m) => m.ListExampleModule),
  },
  {
    path: 'post-list',
    loadChildren: () => import('./post-list/post-list.module').then((m) => m.PostListModule),
  },
```

Ao fazer o import com preloadingStrategy: PreloadAllModules todos os modulos estão sendo carregados após o main uma vez que são módulos pequenos.

imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], /// carrega o modulos apos carregar o main

### Change Detection

Está sendo feito no componente row-table nada é rerenderizado se não houver mudança no campo específico do componente. Quando o botao editar é clicado um patch altera a base de dados e o componente não é rerenderizado ( a mudança já foi feita visualmente)

```Js
@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

O Componente list-example recebe os dados do user via get e repassa para o componente row table.

```HTML
<table>
  <thead>
    <th>Lista de Usuários</th>
  </thead>
  <tbody>
    <app-row-table *ngFor="let user of usuarios; trackBy: trackById" [user]="user"> </app-row-table>
  </tbody>
</table>
```

O componente row-table declara uma variável input user. Que recebe o user do list-example. A linha só é rerenderizada quando o componente é deletado e não quando o user é editado.

```
  @Input() user: Object;
```

### Cada Row da Tabela deve ser um componente

- Criei o component row table que representa cada linha da tabela. O Componente list-example recebe os dados do user via get e repassa para o componente row table.

```JS
<app-row-table \*ngFor="let user of usuarios; trackBy: trackById" [user]="user">
</app-row-table>
```

### O componente que ter um input e deve-se usar o changeDetection on push

- Se uma row alterar e o por exemplo o avatar nao alterar ele não renderiza o componente de novo

```JS
  @Input() user: Object;
```

O componente row-table declara uma variável input user. Que recebe o user do list-example. A linha só é rerenderizada quando o componente é deletado e não quando o user é editado.

### Utilizar o trackBy no \*ngFor

em cada ngDoCheck para a diretiva ngForof , o angular verifica se o objeto mudou. Ele utiliza um diff que usa a função trackBy para comparação. Neste projeto , foi feito dentro do list-example
e estamos usando trackBy pelo id do user.

```JS
<app-row-table \*ngFor="let user of usuarios; trackBy: trackById" [user]="user">
</app-row-table>
```

### CRUD com a API do GitHub

- Foi utilizado o json server conforme sugestão do professor foram criados o post, patch, delete e na aula já haviamos criado o get

```
  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  deleteUsers(id: number): Observable<{}> {
    return this.httpClient
      .delete(routes.users() + `/${id}`, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }

  patchUsers(user: Object): Observable<{}> {
    let id = user['id'];
    let login = user['login'];
    let html_url = user['html_url'];
    let type = user['type'];
    let body = `login=${login}&html_url=${html_url}&type=${type}`;

    return this.httpClient
      .patch(routes.users() + `/${id}`, body, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }
```
