import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private register: RegistrationService,
              private router: Router,
              public navCtrl: NavController,
              public toastController: ToastController) {}

  terms: '';

    select = {
    title: '',
    lecName: '',
    lecSurname: '',
    email: '',
    password: '',
    subjCode: [],
    lecNum: ''
  };

  department: any;
  modules: any;

  logForm() {
    console.log(this.select);
    this.register.registerLecture(this.select)
    .subscribe(data => {
      data = this.select;
      console.log('===================================================');
      console.log(data);

      this.displayToast();
    },
      error => {});

  }

  ngOnInit() {
    this.displayDepartment();
  }

  displayDepartment(){
    this.register.getDepartments()
    .subscribe(data => {
      this.department = data;
      for (let k = 0; k < this.department.length; k++){
      console.log(this.department[k]);

      }
      console.log(this.department);
    });
  }

  onDropdownChange(deptCode){
    console.log(deptCode);
    this.register.getModules(deptCode)
    .subscribe(data => {
      console.log(data);
      this.selectModules(data);
      this.modules = data;

    },
      error => {
        console.log('modules cannot get modules');
      });
  }

  selectModules(ev){

    for (let k = 0; k < ev.length; k++){
      console.log(ev[k]);
      this.select.subjCode[k] = ev[k];
    }
  }

  displayToast() {
    this.toastController.create({
      message: 'Account created successfully!',
      position: 'top',
      cssClass: 'toast-custom-class',
      duration: 2000
    }).then((toast) => {
      toast.present();
      this.navCtrl.navigateBack('/login');
    });
  }

}
