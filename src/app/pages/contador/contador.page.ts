import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.page.html',
  styleUrls: ['./contador.page.scss'],
})
export class ContadorPage implements OnInit {

  totalFlexiones: any;
  clockDisplay: string;
  reto: string;
  timeLeft: number = 60;
  interval;
  preentreno: number = 60;
  meta: number = 10;
  ejercicio: number = 60;
  descanso: number = 20;
  rounds: number = 5;
  tiempototal: string;
  tiempototalN: number;
  timeWork: number;
  timePre: number;
  timeRounds: number;
  timeRest: number;
  contarRouds: number;
  proximity: any;
  segundosDefinidos: string;
  ocultarMensaje: boolean = true
  mensajeAlerta; string;
  pause: boolean = true;

  constructor(private activeRoute: ActivatedRoute, private platform: Platform, private sensors: Sensors) {
    //constructor(private activeRoute: ActivatedRoute, private platform: Platform) {
    this.totalFlexiones = 0;
    this.proximity = 0;

    if (this.platform.is('cordova')) {
      this.initSensor();
    }
  }

  initSensor() {
    this.sensors.enableSensor("PROXIMITY")


    this.sensors.getState().then(res => {
      this.proximity = res;
      console.log()
      if (this.proximity === "0,0,0") {
        this.totalFlexiones = this.totalFlexiones + 1
        this.reproducirSonido("contar")
      }

    });
  }

  async ngOnInit() {

    this.preentreno = parseInt(this.activeRoute.snapshot.paramMap.get('preentreno'));
    this.meta = parseInt(this.activeRoute.snapshot.paramMap.get('meta'));
    this.ejercicio = parseInt(this.activeRoute.snapshot.paramMap.get('ejercicio'));
    this.rounds = parseInt(this.activeRoute.snapshot.paramMap.get('rounds'));
    this.tiempototalN = parseInt(this.activeRoute.snapshot.paramMap.get('tiempototalN'));
    this.descanso  = parseInt(this.activeRoute.snapshot.paramMap.get('descanso'));

    this.timeLeft = this.tiempototalN;
    this.contarRouds = 0;
    this.timeWork = this.ejercicio;
    this.timePre = this.preentreno;
    this.timeRest = this.descanso;
    await this.startTimer();
  }

  async startTimer() {


    this.interval = setInterval(() => {



      if (this.timeLeft > 0 && this.pause === true) {
        this.timeLeft--;
        this.fancyTimeFormat()
        //this.timeRounds = i;

        if (this.timePre > 0 ) {
          if (this.timePre === this.preentreno)
            this.reproducirSonido("saludoVegeta")


          this.ocultarMensaje = false;
          this.mensajeAlerta = "PREPARATE!!"

          this.timeFormat(this.timePre);
          this.timePre--;
        }
        else {
          //this.ocultarMensaje = true;
          this.mensajeAlerta = "Figth!!"
          if (this.timeWork > 0) {
            if (this.timeWork === this.ejercicio)
              this.contarRouds++;

            if (this.timeWork === this.ejercicio - 1)
              this.reproducirSonido("terminoRound")

         
            this.timeFormat(this.timeWork);
            this.timeWork--;

  
          } else {
            if (this.timeRest > 0) {
              this.mensajeAlerta = "DESCANSAR !!"
              if(this.timeRest == this.descanso)
              this.reproducirSonido("vegetaInutil")
              this.timeRest--;
              this.timeFormat(this.timeRest);
             
            } else {
              this.timeRest = this.descanso;
              this.timeWork = this.ejercicio;

             
            }
          }
        }
      }/* else {
        this.timeLeft = 0;
      }*/
    }, 1000);
    //}
  }

  timeFormat(duration) {
    // Hours, minutes and seconds      
    let tiempo = duration
    this.segundosDefinidos = (tiempo - (tiempo %= 60)) / 60 + (9 < tiempo ? ':' : ':0') + tiempo

  }

  public contadorFlexiones() {
    this.totalFlexiones = this.totalFlexiones + 1;
    this.reproducirSonido("contar")
  }

  pausarEntrenamiento() {
    if (this.pause === true)
      this.pause = false
    else
      this.pause = true

  }

  reproducirSonido(accion) {
    let sonido = new Audio;

    switch (accion) {
      case "contar":
        sonido.src = "assets/sonidos/iphone_whatsapp_sms.mp3"
        break;
      case "saludoVegeta":
        sonido.src = "assets/sonidos/Vegeta saludo.mp3"
        break;
      case "vegetaInutil":
        sonido.src = "assets/sonidos/eres-un-inutil.mp3"
        break;
      case "terminoRound":
        sonido.src = "assets/sonidos/boxing-bell.mp3"
        break;
      default:
        console.log("No such day exists!");
        break;
    }
    sonido.load();
    sonido.play();
  }

  fancyTimeFormat() {
    // Hours, minutes and seconds    
    let duration = this.timeLeft;
    //this.tiempototalN = duration;
    this.tiempototal = (duration - (duration %= 60)) / 60 + (9 < duration ? ':' : ':0') + duration
  }
}
