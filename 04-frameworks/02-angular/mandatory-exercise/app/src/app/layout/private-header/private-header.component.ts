import { Component } from '@angular/core';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';

@Component({
  selector: 'app-private-header',
  imports: [PrivateMenuComponent],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {

}
