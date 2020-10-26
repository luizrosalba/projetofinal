import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { RowService } from './row-service.service';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowTableComponent implements OnInit {
  @Input() user: Object;
  displayElement = true;
  // @Input() avatar: string; /// somente o campo alterado sera renderizado novamente
  // @Input() login: string; /// somente o campo alterado sera renderizado novamente
  // @Input() id: number; /// somente o campo alterado sera renderizado novamente
  // @Input() html_url: string; /// somente o campo alterado sera renderizado novamente
  // @Input() type: string; /// somente o campo alterado sera renderizado novamente

  constructor(private rowService: RowService) {}

  ngOnInit(): void {}

  clickDelete(id: number) {
    alert('Usuário ' + this.user['id'] + ' deletado');
    this.rowService.deleteUsers(id).subscribe((user) => {
      this.user = user;
    });
    this.displayElement = false;
  }

  clickEditar(user: Object) {
    this.rowService.patchUsers(user).subscribe((user) => {
      this.user = user;
    });
    alert('Usuário ' + user['login'] + ' editado');
  }
}

// @Input() usuarios: Object;
// @Input() data: Observable<any>;
// usuarios: Object[] = [];
