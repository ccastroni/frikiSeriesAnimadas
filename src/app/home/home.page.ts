import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { isPlatform, ModalController, NavController } from '@ionic/angular';
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

  public listHome = []
  private series = []
  private peliculas = []
  public misFavoritos = []
  public segmentModel = "series";
  slideOpts = {
    slidesPerView: 2.5,
  };
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  private mensajeModal: any;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private modalCtrl: ModalController, private storage: LocalStorageService) {


    //StatusBar.setOverlaysWebView({ overlay: false });
    if (isPlatform('mobile')) {
      
      let my_color_variable: string = '#222428'

      const setStatusBarStyleDark = async () => {
        await StatusBar.setBackgroundColor({ color: my_color_variable.toString() })
      };
      //const color = BackgroundColorOptions()
      //await StatusBar.setBackgroundColor({color:'#222428'})

       // in my project config service

      StatusBar.setBackgroundColor({
        color: my_color_variable.toString()
        ,
      });

      const hideStatusBar = async () => {
        await StatusBar.show();
      };

    }

  }

  async ngOnInit() {

    await this.buscarFavoritos();

    const db = getDatabase();
    const starCountRef = ref(db, 'home');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //updateStarCount(postElement, data);
      this.filtrarCategoriaHome(data)
      console.log(data)
      this.listHome = this.series;
    });

  }

  private filtrarCategoriaHome(data: any) {
    this.series = data.filter(x => x.tipo == 'serie')
    this.peliculas = data.filter(x => x.tipo == 'pelicula')
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
      url: 'https://play.google.com/store/apps/details?id=io.frikiSeries',
      dialogTitle: 'App Friki series',
    });
  }

  async abrirModal(info) {

    this.mensajeModal = await this.modalCtrl.create({
      component: CommunicadoPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.4,
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

  segmentChange(opcion) {
    const segmentSelect = opcion.detail.value
    if (segmentSelect === 'series')
      this.listHome = this.series
    else
      this.listHome = this.peliculas
  }

}