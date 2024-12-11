// // import { Component, Input, OnInit } from '@angular/core';
// // import { UserService } from '..//user.service';
// // import { Workshop } from '../../types/workshop';
// // import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// // import { CommonModule } from '@angular/common';
// // import { User } from '../../types/user';
// // import Swal from 'sweetalert2';
// // import { BrowserModule, DomSanitizer, SafeUrl } from '@angular/platform-browser';
// // import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';

// // @Component({
// //   selector: 'app-workshop-details',
// //   standalone: true,
// //   imports: [CommonModule, RouterLink],
// //   templateUrl: './user-details.component.html',
// //   styleUrl: './user-details.component.css'
// // })
// // export class WorkshopDetailsComponent implements OnInit {
// //   @Input() workshop!: Workshop | null;

// //   User = {} as User;
// //   item: Workshop = {} as Workshop;
// //   currentUser: User = {} as User;
// //   seller: User = {} as User;


// //   trustedUrL: SafeUrl = '';

// //   constructor(private router: Router,
// //     private route: ActivatedRoute,
// //     private userService: UserService,
// //     private sanitizer: DomSanitizer
// //   ) {


// //   }


// //   ngOnInit(): void {
// //     // const scriptTag = document.createElement('script');
// //     // scriptTag.src = "https://www.youtube.com/iframe_api";
// //     // document.body.appendChild(scriptTag);
// //     const id = this.route.snapshot.paramMap.get('id');
// //     if (id) {
// //       this.workshopService.get(+id).subscribe({
// //         next: (workshop) => {
// //           this.workshop = workshop;
// //           if (this.workshop != null) {
// //             this.trustedUrL = this.sanitizer.bypassSecurityTrustResourceUrl(this.workshop.video);
// //           }
// //           // this.workshop = workshop;
// //           // this.userService.getOne(workshop.userId).subscribe((user) => {
// //           //   this.seller = user;
// //           //   let userId = this.userService.getCurrentUserIdFromJwt();
// //           //   if (userId) {
// //           //     this.userService.getOne(userId).subscribe((user) => {
// //           //       this.currentUser = user;
// //           //       // let find = user.likedItems.find((i) => i === this.item.id);
// //           //       // this.isUserAlreadyLiked = !!find;
// //           //     });
// //           //   }
// //           // });
// //         },
// //         error: (err) => {
// //           console.error('Error fetching workshop details:', err);
// //           console.error('Error fetching workshop details:', err);
// //           this.workshop = null;
// //         },
// //       });
// //     } else {
// //       this.workshop = null;
// //     }
// //   }
// //   deleteItem(id: number) {
// //     Swal.fire({
// //       title: 'Are you sure?',
// //       text: "You won't be able to revert this!",
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonColor: '#3085d6',
// //       cancelButtonColor: '#d33',
// //       confirmButtonText: 'Yes, delete it!',
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         this.workshopService.delete(id).subscribe(() => {
// //           this.userService
// //           // .getAllWhereFurnitureIsLiked(id)
// //           //   .subscribe((users) => {
// //           //     users.forEach((user) => {
// //           //       let index = user.likedItems.indexOf(id);
// //           //       user.likedItems.splice(index, 1);
// //           //       const updatedUser: UpdateLikedItems = {
// //           //         likedItems: user.likedItems,
// //           //       };
// //           //       this.userService
// //           //         .update(user.id, updatedUser)
// //           //         .subscribe((user: User) => { });
// //           //     });
// //           //   });
// //           // this.toastrService.success('Your deletion was successfully!');
// //           // this.router.navigate(['/dashboard']);
// //         });
// //       }
// //     });
// //   }

// //   // isLoggedIn() {
// //   //   return !!this.userService.getJwtToken();
// //   // }

// //   // isOwner(): boolean {
// //   //   let userId = this.userService.getCurrentUserIdFromJwt();
// //   //   if (userId) {
// //   //     return this.item.userId === userId;
// //   //   } else {
// //   //     return false;
// //   //   }
// //   // }

// //   // likeItem(itemId: number) {
// //   //   debugger;
// //   //   let likedItems = this.currentUser.likedItems;
// //   //   likedItems.push(itemId);
// //   //   this.currentUser.likedItems = likedItems;

// //   //   // @ts-ignore
// //   //   delete this.currentUser.password;

// //   //   this.userService
// //   //     .update(this.currentUser.id, this.currentUser)
// //   //     .subscribe((user) => {
// //   //       this.currentUser = user;
// //   //       this.isUserAlreadyLiked = true;
// //   //       this.toastrService.success('Furniture was added to your likes!');
// //   //     });
// //   // }

// //   // removeLikeItem(itemId: number) {
// //   //   let likedItems = this.currentUser.likedItems;
// //   //   likedItems = likedItems.filter((id) => id !== itemId);
// //   //   this.currentUser.likedItems = likedItems;

// //   //   // @ts-ignore
// //   //   delete this.currentUser.password;

// //   //   this.userService
// //   //     .update(this.currentUser.id, this.currentUser)
// //   //     .subscribe((user) => {
// //   //       this.isUserAlreadyLiked = false;
// //   //       this.toastrService.success('Furniture was removed from your likes!');
// //   //     });
// //   // }


// // }
// import { Component, OnInit } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { emailValidator } from '../../utils/email.validator';
// // import { DOMAINS } from '../../constants';
// import { ProfileDetails } from '../../types/user';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './user-details.component.html',
//   styleUrl: './user-details.component.css',
// })
// export class ProfileComponent implements OnInit {
//   isEditMode: boolean = false;

//   profileDetails: ProfileDetails = {
//     email: '',
//     username: '',
//     img: '',
//   };

//   form = new FormGroup({
//     username: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     email: new FormControl('', [Validators.required, emailValidator()]),
//     img: new FormControl(''),
//   });

//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//     const { username, email, img } = this.userService.user!;
//     this.profileDetails = { username, email, img };

//     this.form.setValue({
//       username,
//       email,
//       img
//     });
//   }

//   toggleEditMode() {
//     this.isEditMode = !this.isEditMode;
//   }

//   handleSaveProfile() {
//     if (this.form.invalid) {
//       return;
//     }

//     this.profileDetails = this.form.value as ProfileDetails;

//     const { username, email, img } = this.profileDetails;

//     this.userService.updateProfile(username, email, img).subscribe(() => {
//       this.toggleEditMode();
//     });
//   }

//   onCancel(event: Event) {
//     event.preventDefault();
//     this.toggleEditMode();
//   }
// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User, UserUpdate } from '../../types/user';
// import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class ProfileComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    // private toastrService: ToastrService,
  ) {

  }

  user: User = {} as User;
  profileForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    password: [''],
    isAdmin: [false],
    id: [0],
    likedItems: [null],
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getOne(userId).subscribe((user: User) => {
        this.user = user;
        this.profileForm.setValue(user);
      });
    });
  }

  onSubmit() {
    const editedUser: UserUpdate = {
      username: this.profileForm.value.username || this.user.username,
      email: this.profileForm.value.email || this.user.email,
      img: this.profileForm.value.img || this.user.img,
      // id: this.profileForm.value.id || this.user.id,
    } as UserUpdate;
    this.userService.update(this.user.id, editedUser).subscribe(
      (newUser) => {
        this.user = newUser;
      },
      (error) => {
        Swal.fire('Error', 'Profile was not updated successful!', 'error');
      },
    );
    Swal.fire('Success', 'Profile was updated successful!');
    this.router.navigate([`/`]);
  }

  deleteProfile(userId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your account and furniture will be deleted forever!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(userId).subscribe(
          () => {
            Swal.fire('Success', 'Profile was deleted!');
            this.userService.removeJwtToken();
            this.router.navigate(['/']);
          },
          (error) => {
            Swal.fire('Error while deleting profile!', 'error');
          },
        );
      }
    });
  }
}