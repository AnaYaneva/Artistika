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
      message: 'I started as a complete beginner, and the courses on [Your Website Name] have transformed my skills. The step-by-step instructions and supportive community have been invaluable. Highly recommended!',
      name: 'Jane D., Beginner Artist'
    },
    {
      message: 'The advanced techniques and professional tips I learned here have really boosted my confidence. The instructors are top-notch and the feedback on my work has been incredibly helpful.',
      name: 'Michael S., Aspiring Professional '
    },
    {
      message: 'I love the flexibility of being able to learn at my own pace. The variety of courses available means theres always something new to try.This site has reignited my passion for art!',
      name: 'Lisa R., Hobbyist '
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

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
