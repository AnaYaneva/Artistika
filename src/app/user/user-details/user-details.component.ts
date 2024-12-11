import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User, UserUpdate } from '../../types/user';
// import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class ProfileComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
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