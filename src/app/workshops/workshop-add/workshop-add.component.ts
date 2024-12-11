import { Component } from '@angular/core';
import { Workshop } from '../../types/workshop';
import { CategoryType } from '../../types/category';
import { LevelType } from '../../types/levelType';
import { WorkshopService } from '../workshop.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-workshops',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css'],
})
export class WorkshopAddComponent {
  workshops: Workshop[] = [];
  newWorkshop: Partial<Workshop> = {};
  editMode: boolean = false;
  workshopToEdit: Partial<Workshop> = {};
  selectedTab: string = 'add';
  categoryTypes = Object.values(CategoryType);
  levelTypes = Object.values(LevelType);


  constructor(private workshopService: WorkshopService) {
    this.fetchWorkshops();
  }

  fetchWorkshops(): void {
    this.workshopService.getAll().subscribe({
      next: (data) => (this.workshops = data),
      error: (err) => console.error('Error fetching workshops:', err),
    });
  }

  addWorkshop(): void {
    if (!this.newWorkshop.title || !this.newWorkshop.description) {
      Swal.fire({
        title: 'Error!',
        text: 'Please provide the workshop title and description.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (!this.isValidImageUrl(this.newWorkshop.img || '')) {
      Swal.fire({
        title: 'Invalid Image URL!',
        text: 'Please provide a valid image URL. It must end with .jpg, .png, .webp, etc., or be a valid Google link.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    this.workshopService.create(this.newWorkshop as Workshop).subscribe({
      next: () => {
        this.fetchWorkshops();
        this.newWorkshop = {};

        Swal.fire({
          title: 'Success!',
          text: 'Workshop added successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add the Workshop. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.error('Error adding Workshop:', err);
      },
    });
  }

  isValidImageUrl(url: string): boolean {
    return /\.(jpeg|jpg|gif|png|webp|avif)$/.test(url) || /googleusercontent\.com/.test(url);
  }

  removeWorkshop(workshopId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to remove this workshop? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.workshopService.delete(workshopId).subscribe({
          next: () => {
            this.fetchWorkshops();
            Swal.fire({
              title: 'Deleted!',
              text: 'The workshop has been removed successfully.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          },
          error: (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to remove the workshop. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK',
            });
            console.error('Error removing workshop:', err);
          },
        });
      }
    });
  }

  startEdit(workshop: Workshop): void {
    this.editMode = true;
    this.selectedTab = 'edit';
    this.workshopToEdit = { ...workshop };
  }

  saveEdit(): void {
    if (this.workshopToEdit.id) {
      this.workshopService.update(this.workshopToEdit as Workshop).subscribe({
        next: () => {
          this.fetchWorkshops();
          this.cancelEdit();

          Swal.fire({
            title: 'Changes Saved!',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,
            timerProgressBar: true,
          });
        },
        error: (err) => {
          console.error('Error updating workshop:', err);

          Swal.fire({
            title: 'Error',
            text: 'Failed to save changes. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        },
      });
    } else {
      console.error('Error: Missing workshop ID for update.');
    }
  }

  cancelEdit(): void {
    this.editMode = false;
    this.workshopToEdit = {};
    this.selectedTab = 'add';
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;
  }

  onSelectedCategory() {

  }

  onSelectedLevel() { }
}
