import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-communicado',
  templateUrl: './communicado.page.html',
  styleUrls: ['./communicado.page.scss'],
})
export class CommunicadoPage implements OnInit {
  public data: any;
  public dataOrigen: any;
  public lista: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private storage: LocalStorageService,
    public navCtrl: NavController
  ) { }

  async ngOnInit() {
    this.data = this.dataOrigen.data;
    console.log(this.data)
    if (await this.existeSerieEnFavoritos())
      this.lista = true
  }

  public async existeSerieEnFavoritos() {

    let getStorage = await this.storage.getObject('misFavoritos', true)
    if (getStorage && getStorage.length > 0)
      getStorage = getStorage.filter(x => x.titulo == this.data.titulo);

    if (getStorage && getStorage.length > 0)
      return true
    else
      return false
  }

  salir() {
    this.modalCtrl.dismiss()
  }

  async agregarLista() {

    let getStorage = await this.storage.getObject('misFavoritos', true)
    console.log(getStorage)
    if (getStorage) {

      if (await this.existeSerieEnFavoritos()) {
        const index = getStorage.findIndex((obj) => obj.titulo === this.data.titulo)
        console.log(index)
        getStorage.splice(index, 1);
        this.storage.setObject('misFavoritos', getStorage, true)
        this.lista = false;
      }
      else {
        getStorage.push(this.data)
        this.storage.setObject('misFavoritos', getStorage, true)
        this.lista = true;
      }

    }
    else {
      let misFavoritos: any[] = []
      //misFavoritos.length
      misFavoritos.push(this.data)
      this.storage.setObject('misFavoritos', misFavoritos, true)
      this.lista = true;
    }
    this.dataOrigen.reiniciarButtonCallback()
  }


  public verSerie(titulo, video) {
    this.modalCtrl.dismiss()
    this.navCtrl.navigateForward(['ver-serie', titulo, video]);
  }

  public irAListaVideo(id) {
    this.modalCtrl.dismiss()
    this.navCtrl.navigateForward(['lista-series', id]);
  }

  public async share() {

    await Share.share({
      title: 'Friki Series Animadas',
      text: 'Descarga la app Friki series animadas',
      url: 'https://play.google.com/store/apps/details?id=io.frikiSeries',
      dialogTitle: 'App Friki series',
    });
  }
}
