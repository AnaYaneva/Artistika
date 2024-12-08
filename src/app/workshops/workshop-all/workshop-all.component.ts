import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Workshop } from '../../types/workshop';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-workshop-all',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe],
  templateUrl: './workshop-all.component.html',
  styleUrl: './workshop-all.component.css'
})
export class WorkshopAllComponent implements OnInit {
  workshops: Workshop[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getWorkshops().subscribe((workshops) => {
    // this.workshops = workshops;
    this.isLoading = false;
    // });
  }
}
