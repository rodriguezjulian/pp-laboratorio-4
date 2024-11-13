import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  altavete() {
    this.router.navigate(['/altaveterinario']);
  }
}
