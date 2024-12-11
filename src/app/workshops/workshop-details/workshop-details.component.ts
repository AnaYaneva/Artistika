import { Component, Input, OnInit } from '@angular/core';
import { WorkshopService } from '..//workshop.service';
import { Workshop } from '../../types/workshop';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.css'
})
export class WorkshopDetailsComponent implements OnInit {
  @Input() workshop!: Workshop | null;

  User = {} as User;
  item: Workshop = {} as Workshop;
  currentUser: User = {} as User;
  seller: User = {} as User;


  trustedUrL: SafeUrl = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private workshopService: WorkshopService,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {


  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workshopService.get(+id).subscribe({
        next: (workshop) => {
          this.workshop = workshop;
          if (this.workshop != null) {
            this.trustedUrL = this.sanitizer.bypassSecurityTrustResourceUrl(this.workshop.video);
          }

        },
        error: (err) => {
          console.error('Error fetching workshop details:', err);
          console.error('Error fetching workshop details:', err);
          this.workshop = null;
        },
      });
    } else {
      this.workshop = null;
    }
  }
  deleteItem(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.workshopService.delete(id).subscribe(() => {
          this.userService

        });
      }
    });
  }


}
