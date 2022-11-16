import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { ModalController, NavController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { getDatabase, ref, onValue } from "firebase/database";
import { CommunicadoPage } from '../pages/communicado/communicado.page';
import { LocalStorageService } from '../services/local-storage.service';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public series = []
  public misFavoritos = []
  public segmentModel = "series";
  slideOpts = {
    slidesPerView: 2.5,
  };
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  private mensajeModal: any;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private modalCtrl: ModalController, private storage: LocalStorageService) {

    StatusBar.setOverlaysWebView({ overlay: true });

    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
  }
  
  async ngOnInit() {

    await this.buscarFavoritos();

    const db = getDatabase();
    const starCountRef = ref(db, 'home');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //updateStarCount(postElement, data);
      console.log(data)
      this.series = data;
    });

  }

  private async buscarFavoritos() {
    let getStorage = await this.storage.getObject('misFavoritos', true);
    //if (getStorage && getStorage.length > 0)
    this.misFavoritos = getStorage;
  }

  public async share() {

    await Share.share({
      title: 'Friki Series Animadas',
      text: 'Aplicación de tus series animadas de la infancia de acero xD.',
      url: 'http://ionicframework.com/',
      dialogTitle: 'App Friki series',
    });
  }

  async abrirModal(info) {
        
    this.mensajeModal = await this.modalCtrl.create({
      component: CommunicadoPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      cssClass: 'custom-modal',
      componentProps: {
        dataOrigen: {
          data: info,
          reiniciarButtonCallback: async () => {
            await this.buscarFavoritos();
          }
        }
      }
    })
    await this.mensajeModal.present();

  }

  async closeModal() {
    await this.mensajeModal.dismiss();
  }

}