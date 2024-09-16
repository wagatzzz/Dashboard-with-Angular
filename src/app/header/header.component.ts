import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCaretDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FontAwesomeModule]
})
export class HeaderComponent {
  faUser = faUser;
  faCaretDown = faCaretDown;
  faChevronDown = faChevronDown;
}
