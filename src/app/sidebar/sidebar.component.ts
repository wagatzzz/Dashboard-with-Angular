import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faDashboard, faBoxOpen, faTags, faShoppingCart, faReceipt, faUsers, faUserTie, faPaintBrush, faChevronDown, faChevronUp, faChartLine, faCog, faGift } from '@fortawesome/free-solid-svg-icons'; // Import icons

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, FontAwesomeModule]  
})

export class SidebarComponent {
  isSidebarOpen = false;
  isSubmenuOpen = false;
  isOrdersSubmenuOpen = false;
  isCostingSubmenuOpen = false; 
  isExpensesSubmenuOpen = false;
  isEmployeesSubmenuOpen = false;
  isReferEarnSubmenuOpen = false;

   
   faDashboard = faDashboard;
   faBoxOpen = faBoxOpen;
   faTags = faTags;
   faShoppingCart = faShoppingCart;
   faReceipt = faReceipt;
   faUsers = faUsers;
   faUserTie = faUserTie;
   faPaintBrush = faPaintBrush;
   faChartLine = faChartLine;
   faCog = faCog;
   faGift = faGift;
   faChevronDown = faChevronDown;
   faChevronUp = faChevronUp;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
  toggleOrdersSubmenu() {
    this.isOrdersSubmenuOpen = !this.isOrdersSubmenuOpen;
  }
  toggleCostingSubmenu() {
    this.isCostingSubmenuOpen = !this.isCostingSubmenuOpen;
  }
  toggleExpensesSubmenu() {
    this.isExpensesSubmenuOpen = !this.isExpensesSubmenuOpen;
  }
  toggleEmployeesSubmenu() {
    this.isEmployeesSubmenuOpen = !this.isEmployeesSubmenuOpen;
  }
  toggleReferEarnSubmenu() {
    this.isReferEarnSubmenuOpen = !this.isReferEarnSubmenuOpen;
  }
}
