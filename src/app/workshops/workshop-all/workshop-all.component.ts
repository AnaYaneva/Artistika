import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workshop } from '../../types/workshop';
import { WorkshopService } from '../workshop.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { CategoryType } from '../../types/category';
import { LevelType } from '../../types/levelType';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-workshop-all',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './workshop-all.component.html',
  styleUrl: './workshop-all.component.css'
})
export class WorkshopAllComponent implements OnInit {
  searchForm: FormGroup;
  workshops: Workshop[] = [];
  filteredWorkshops: Workshop[] = [];
  workshopMentors: User[] = [];
  selectedMentor: string = '';
  categoryTypes = Object.values(CategoryType);
  levelTypes = Object.values(LevelType);
  currentUser: User = {} as User;
  seller: User = {} as User;
  isUserAlreadyLiked: boolean = false;


  constructor(private fb: FormBuilder, private workshopService: WorkshopService, private router: Router, private userService: UserService) {
    this.searchForm = this.fb.group({
      mentor: [''],
      categoryType: [''],
      levelType: ['']
    });
    this.loadWorkshops();
  }

  ngOnInit(): void {
    this.workshopService.getAll().subscribe((workshops: Workshop[]) => {
      this.workshops = workshops;
      this.filteredWorkshops = workshops;

    });
  }


  loadWorkshops(): void {
    this.workshopService.getAll().subscribe((workshops) => {
      this.workshops = workshops;
    });
  }


  onSearch(): void {
    const { mentor, categoryType, levelType } = this.searchForm.value;
    this.filteredWorkshops = this.workshops.filter(workshop =>
      (!categoryType || workshop.categoryType === categoryType) &&
      (!levelType || workshop.levelType === levelType)
    );
  }

  resetFilters(): void {
    this.searchForm.reset();
    this.filteredWorkshops = [...this.workshops];
  }

  viewDetails(id: number) {
    this.router.navigate(['/workshop-details', id]);
  }
}