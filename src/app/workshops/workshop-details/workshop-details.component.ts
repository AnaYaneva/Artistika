import { Component, Input, OnInit } from '@angular/core';
import { WorkshopService } from '..//workshop.service';
import { Workshop } from '../../types/workshop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.css'
})
export class WorkshopDetailsComponent implements OnInit {
  @Input() workshop!: Workshop | null;

  User = {} as User;
  item: Workshop = {} as Workshop;
  currentUser: User = {} as User;
  seller: User = {} as User;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private workshopService: WorkshopService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workshopService.get(+id).subscribe({
        next: (workshop) => {
          this.workshop = workshop;
          // this.workshop = workshop;
          // this.userService.getOne(workshop.userId).subscribe((user) => {
          //   this.seller = user;
          //   let userId = this.userService.getCurrentUserIdFromJwt();
          //   if (userId) {
          //     this.userService.getOne(userId).subscribe((user) => {
          //       this.currentUser = user;
          //       // let find = user.likedItems.find((i) => i === this.item.id);
          //       // this.isUserAlreadyLiked = !!find;
          //     });
          //   }
          // });
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
          // .getAllWhereFurnitureIsLiked(id)
          //   .subscribe((users) => {
          //     users.forEach((user) => {
          //       let index = user.likedItems.indexOf(id);
          //       user.likedItems.splice(index, 1);
          //       const updatedUser: UpdateLikedItems = {
          //         likedItems: user.likedItems,
          //       };
          //       this.userService
          //         .update(user.id, updatedUser)
          //         .subscribe((user: User) => { });
          //     });
          //   });
          // this.toastrService.success('Your deletion was successfully!');
          // this.router.navigate(['/dashboard']);
        });
      }
    });
  }

  // isLoggedIn() {
  //   return !!this.userService.getJwtToken();
  // }

  // isOwner(): boolean {
  //   let userId = this.userService.getCurrentUserIdFromJwt();
  //   if (userId) {
  //     return this.item.userId === userId;
  //   } else {
  //     return false;
  //   }
  // }

  // likeItem(itemId: number) {
  //   debugger;
  //   let likedItems = this.currentUser.likedItems;
  //   likedItems.push(itemId);
  //   this.currentUser.likedItems = likedItems;

  //   // @ts-ignore
  //   delete this.currentUser.password;

  //   this.userService
  //     .update(this.currentUser.id, this.currentUser)
  //     .subscribe((user) => {
  //       this.currentUser = user;
  //       this.isUserAlreadyLiked = true;
  //       this.toastrService.success('Furniture was added to your likes!');
  //     });
  // }

  // removeLikeItem(itemId: number) {
  //   let likedItems = this.currentUser.likedItems;
  //   likedItems = likedItems.filter((id) => id !== itemId);
  //   this.currentUser.likedItems = likedItems;

  //   // @ts-ignore
  //   delete this.currentUser.password;

  //   this.userService
  //     .update(this.currentUser.id, this.currentUser)
  //     .subscribe((user) => {
  //       this.isUserAlreadyLiked = false;
  //       this.toastrService.success('Furniture was removed from your likes!');
  //     });
  // }


}
