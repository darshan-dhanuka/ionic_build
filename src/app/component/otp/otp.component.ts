import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/toast.service';
import { RegisterService } from 'src/app/pages/register/register.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  @Input() phone: string;
  validationMessages: any;
  submitted = false;
  otpForm: FormGroup;
  constructor(
    private modelCtrl: ModalController,
    private toastService: ToastService, private registerService: RegisterService,
    private formBuilder: FormBuilder,
    navParams: NavParams) {
    console.log(navParams.get('phone'));
    this.phone = navParams.get('phone');
  }
  get f() { return this.otpForm.controls; }
  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      otp_text: new FormControl('', [Validators.required])
    });
    this.validationMessages = {
      'otp_text': [
        { type: 'required', message: 'OTP is required.' }
      ]
    }
  }

  async sendOtp() {
    const phone = this.phone;
    if (phone) {
      if (this.toastService.checkNetwork()) {
        let loading = await this.toastService.presentLoading();
        this.registerService.sendOtp({ "phone": phone }).then(async (result: any) => {
          loading.dismiss();
          this.toastService.presentToast(result.msg);
        }).catch(e => {
          loading.dismiss();
          console.log(e);
        });
      }
    } else {
      this.toastService.presentToast("Please enter phone number");
    }
  }

  async submitOtp(otpForm: FormGroup) {
    debugger
    this.submitted = true;
    if (otpForm.invalid) {
      return;
    }
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.registerService.verifyOtp({
        otp_text: otpForm.value.otp_text,
        phone1: this.phone
      }).then((result: any) => {
        loading.dismiss();
        if (result.errorcode == 0) {
          this.modelCtrl.dismiss();
        } else {
          this.toastService.presentToast(result.msg);
        }
        console.log(result)
      }).catch(e => {
        loading.dismiss();
      });
    }
  }
}
