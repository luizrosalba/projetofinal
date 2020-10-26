import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() ChangeDetectionExample: string; /// o componente só sera renderizado novamente se essa variavel mudar
  /// output de baixo para cima e input de cima para baixo
  menuHidden = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {}

  get username(): string | null {
    return null;
  }
}
