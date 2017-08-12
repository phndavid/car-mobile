import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: 'admin', password: 'password' };

  constructor(private navCtrl: NavController,
     private alertCtrl: AlertController,
     private loadingCtrl: LoadingController) {
  }


  login() {
    this.showLoading();
    if (this.registerCredentials.email === 'admin' && this.registerCredentials.password === 'password') {
      this.navCtrl.setRoot('TabsPage');
    } else {
      this.showError("Error de autenticación!");
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
