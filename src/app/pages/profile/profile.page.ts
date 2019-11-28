import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastService } from 'src/app/toast.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder) { }
  loginUser: any = {
    userId: 0
  };
  loginUserProfile: any = {
    "hashtag_id": "",
    "email": "",
    "mobile": "",
    "gender": "",
    "address": "",
    "user_id": 0
  }
  imageUrl = "";
  validationMessages: any;
  editProfileForm: FormGroup;
  selectedSagment = "persnolinformation";
  isEdit: boolean = false;
  submitted = false;


  async ngOnInit() {

    this.editProfileForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      hashtagId: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
    this.validationMessages = {
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'email', message: 'Please enter valid email.' }
      ],
      'hashtagId': [
        { type: 'required', message: 'Hashtag id is required.' }
      ],
      'contact': [
        { type: 'required', message: 'Mobile is required.' }
      ],
      'address': [
        { type: 'required', message: 'Address is required.' }
      ]
    }
    if (this.toastService.getLoginUser()) {
      this.loginUser = await this.toastService.getLoginUser();
      let loginType = await this.toastService.getLoginUser();
      this.getLoginUserProfile(this.loginUser.userId);
    } else {
      this.router.navigate([''])
    }
  }

  async getLoginUserProfile(userId: any) {

    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.profileService.getUserProfile({
        "user_id": userId
      }).then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          this.loginUserProfile = data;
        }
        console.log(data);
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }

  getImageUrl(url) {
    if (this.toastService.checkLiveUrl(url)) {
      return url;
    } else {
      return environment.imageUrl + url;
    }
  }

  get f() { return this.editProfileForm.controls; }

  isEditTrue() {
    if (this.isEdit == false) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

  submitProfile(editProfileForm) {
    this.submitted = true;
    if (editProfileForm.invalid) {
      alert("error")
    } else {
      this.isEdit = false;
    }
  }

  segmentChanged(event) {
    this.selectedSagment = event.detail.value;
  }
}
