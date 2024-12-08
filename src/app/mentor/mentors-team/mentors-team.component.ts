import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-mentors-team',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe],
  templateUrl: './mentors-team.component.html',
  styleUrl: './mentors-team.component.css'
})
export class MentorsTeamComponent implements OnInit {
  mentors: User[] = [];
  isLoading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.apiService.getWorkshops().subscribe((workshops) => {
    // this.mentors = mentors;
    this.isLoading = false;
    // });
  }
}
