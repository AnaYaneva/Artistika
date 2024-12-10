import { Component, OnInit } from '@angular/core';
import { WorkshopDetailsComponent } from '../workshops/workshop-details/workshop-details.component';
import { Router, RouterLink } from '@angular/router';
import { Workshop } from '../types/workshop';
import { WorkshopService } from '../workshops/workshop.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { User } from '../types/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    WorkshopDetailsComponent,
    CommonModule,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredWorkshops: Workshop[] = [];
  featuredMentors: User[] = [];
  testimonials = [
    {
      message: 'This workshop rental service made my trip unforgettable! Highly recommend.',
      name: 'John Doe'
    },
    {
      message: 'Amazing experience. The workshop was in perfect condition and the service was top-notch.',
      name: 'Jane Smith'
    },
    {
      message: 'I will definitely use this service again. Excellent customer support.',
      name: 'Emily Johnson'
    }
  ];

  constructor(private userService: UserService, private workshopService: WorkshopService, private router: Router) {

  }


  ngOnInit(): void {
    this.workshopService.getAll().subscribe((items) => {
      this.featuredWorkshops = items;
    });
    this.userService.getAll().subscribe((items) => {
      this.featuredMentors = items;
    });
  }

  scrollToWorkshops(): void {
    const workshopSection = document.querySelector('#featured-workshops');
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  viewWorkshop(workshop: Workshop): void {
    this.router.navigate(['/workshop-details', workshop.id]);
  }

  scrollToMentors(): void {
    const mentorSection = document.querySelector('#featured-mentors');
    if (mentorSection) {
      mentorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  viewMentor(mentor: User): void {
    this.router.navigate(['/mentor-details', mentor.id]);
  }


}
