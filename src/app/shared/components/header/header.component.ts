import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  onLogout() {
    this.authenticationService.logoutUser();
  }
}
