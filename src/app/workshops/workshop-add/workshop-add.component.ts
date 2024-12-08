import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-workshop-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './workshop-add.component.html',
  styleUrl: './workshop-add.component.css'
})
export class WorkshopAddComponent {
  // categories: string[] = ['Watercolor', 'Acrilyc', 'Soft Pastels'];
  // defaultcategory: string = 'Watercolor';

  // levels: string[] = ['Watercolor', 'Acrilyc', 'Soft Pastels'];
  // defaultlevel: string = 'Watercolor';


  // categoriesForm: FormGroup;
  // levelForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    // this.categoriesForm = new FormGroup({
    //   category: new FormControl(null)
    // });
    // this.categoriesForm.controls['category'].setValue(this.defaultcategory, { onlySelf: true });

    // this.levelForm = new FormGroup({
    //   level: new FormControl(null)
    // });
    // this.levelForm.controls['level'].setValue(this.defaultlevel, { onlySelf: true });
  }


  addWorkshop(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }

    const { refPhoto, finalPhoto, video, title, description } = ngForm.value;

    // this.apiService.createWorkshop(refPhoto, finalPhoto, video, title, description).subscribe(() => {
    //   this.router.navigate(['/workshops']);
    // });
  }
}
