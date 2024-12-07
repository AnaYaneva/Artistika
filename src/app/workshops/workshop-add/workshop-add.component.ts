import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-workshop-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './workshop-add.component.html',
  styleUrl: './workshop-add.component.css'
})
export class WorkshopAddComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  addTheme(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }

    const { themeName, postText } = ngForm.value;

    // this.apiService.createTheme(themeName, postText).subscribe(() => {
    //   this.router.navigate(['/themes']);
    // });
  }
}
