import { Component, Input, OnInit } from '@angular/core';
import { WorkshopService } from '..//workshop.service';
import { Workshop } from '../../types/workshop';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.css'
})
export class WorkshopDetailsComponent implements OnInit {
  @Input() workshop!: Workshop | null;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private workshopService: WorkshopService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workshopService.get(+id).subscribe({
        next: (workshop) => {
          this.workshop = workshop;
        },
        error: (err) => {
          console.error('Error fetching workshop details:', err);
          this.workshop = null;
        },
      });
    } else {
      this.workshop = null;
    }
  }

  onBookNow(id: number): void {
    if (this.workshop) {
      this.router.navigate(['/book', id], { state: { workshop: this.workshop } });
    } else {
      console.error('Workshop details are not available for booking.');
    }
  }
}
