import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.page.html',
  styleUrls: ['./lista-series.page.scss'],
})
export class ListaSeriesPage implements OnInit {

  public capitulos = [];
  public serie: string = "";
  public titulo: string = "";



  constructor(private navCtrl: NavController, private activeRoute: ActivatedRoute) {
    this.serie = this.activeRoute.snapshot.paramMap.get('id');
    this.capitulos = [
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567065409983007&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20874491_1567080853314796_7924502999454449664_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFazmHgKlQBeF_8hR-xrvNIoLs9d3GRGHOguz13cZEYc0EVLE-buL3lB3tUFe7g30uyowE5-mmGdoT1R5-scMEc&_nc_ohc=tkkJ_FycU7wAX_gJNBu&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCj0_K4LzQd3dcxP7LeCDai3rskZkkH3X07x8JdHcpOoA&oe=6371842B",
        "duracion": "25:32",
        "titulo": "Capítulo :  1      EL  GALÁCTICO",
        "capitulo": "1"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567223043300577&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20884612_1567232716632943_8447565127741341696_n.jpg?stp=dst-jpg_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFJuGL4658Jkzvb_rATFM8okMfNzeqh_LKQx83N6qH8splRigpxJwRYcNquacQnlSUAfcknfMxntP_MnfJ4AYDy&_nc_ohc=n1qIB3wWa8wAX8uvwH8&_nc_ht=scontent.fscl7-1.fna&oh=00_AfDMpJDRJ5jxO8cRRWvMotbuFU6uO55EqTjXjJDqto4C9w&oe=6371EBE0",
        "duracion": "22:05",
        "titulo": "Capítulo :  2      EL  GALÁCTICO",
        "capitulo": "2"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567249219964626&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20881069_1567271683295713_8389436872853553152_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeE8_EGq8hbPbTy8t3NAB6yNxUbyV3-lPIzFRvJXf6U8jD90nVsvHyUo-BY5aa3fZCFT8W0Y7uLox8hf_oREiDIK&_nc_ohc=I1t-bOVCNzIAX_ANKY7&_nc_ht=scontent.fscl7-1.fna&oh=00_AfAWz6L5OOVz8ScQkzutT5yV7Bam_8WDbBO3ZuduijqjgA&oe=63719C3C",
        "duracion": "21:51",
        "titulo": "Capítulo :  3     EL  GALÁCTICO",
        "capitulo": "3"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567274999962048&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20874561_1567280009961547_3784104455381712896_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGR0W6KulxYXr1qXnTxuschIWu-Ss0EpoMha75KzQSmg7hNyI7Pyr-tQ6LTVAe8o3weJuUfCWXTIwsdTbKe4U-U&_nc_ohc=uE1PY6J-tOgAX_-mEKV&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCi8LIyrWpBXJYXa23-k7uh76mHv_XA70j-itgVcs5_tA&oe=6372DD80",
        "duracion": "21:31",
        "titulo": "Capítulo :  4      EL  GALÁCTICO",
        "capitulo": "4"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567727103250171&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20884482_1567733726582842_7408829499111899136_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeEplvS2fn_vqdBrkDrbduK_ox5LlUCZ11-jHkuVQJnXXzjQYnzhATyC5chIZcJfuCB4cXDPYmEExgkS1IEcklD7&_nc_ohc=OzhYmzbKYvAAX8ts5P3&_nc_ht=scontent.fscl7-1.fna&oh=00_AfALkL29TKxLFq_i5tSYJy4GzMkVFwLjUDqM6QCpIuEpGQ&oe=63714482",
        "duracion": "21:28",
        "titulo": "Capítulo :  5      EL  GALÁCTICO",
        "capitulo": "5"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1567741566582058&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/20874552_1567747319914816_8996653254603440128_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeHgtVKRImRflo3kno2fyan0qCqB61ivqgmoKoHrWK-qCRKjfzlTClV3IBZlZOSdkcse-K9ZRN2zWNaeVzf4thK0&_nc_ohc=RnLeJoqnvSUAX8qZUgh&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCjxq6kdIL7RSPRBlUVHiBXu-UlJUGzeO-osGTLF41eEw&oe=6372566E",
        "duracion": "22:26",
        "titulo": "Capítulo :  6      EL  GALÁCTICO",
        "capitulo": "6"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1791783140844565&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27601391_1791816574174555_127181759820333056_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeEhwoV9GKPnqZPiEKZWPbIXrR00WemS96WtHTRZ6ZL3pbjMkxsFWZu4iTnaLpl_gjdbNAebGSKJwuwGUqVQUkLe&_nc_ohc=Bibq19p2TJ4AX8PJLg7&tn=W9LjzN50tv102z6y&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCPMq8wBgo3doFjVPDA6HRE3z3GGzTeRqbhgZBtIelQ3w&oe=6371C343",
        "duracion": "22:30",
        "titulo": "Capitulo :  7    EL  GALACTICO",
        "capitulo": "7"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1791948377494708&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27852107_1791950414161171_7439118549081128960_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFjFuEjRV7IXPtoRGtOUPPD5DHZN14voijkMdk3Xi-iKKT5yM5EgpBC23ucXSNtQITEMHnPs421OkOEJIsWNaOp&_nc_ohc=-YIBrX9hVq0AX-fTMG9&_nc_oc=AQkHvTs0Z4i4AG7wYREQ3NhV1IqlqKE74xPZc4riRUvoI6xZig4RM6sBZfL4-j_yABwezqX5waO_zm5lGM9tvl7B&_nc_ht=scontent.fscl7-1.fna&oh=00_AfDGyaeC2VgoKB8S1zKpPzRw6bMeW-Bft69sSWdio6KxcQ&oe=637213C6",
        "duracion": "22:26",
        "titulo": "Capitulo :  8    EL  GALÁCTICO",
        "capitulo": "8"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1791979440824935&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27599589_1791988754157337_6165315258647838720_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFxLRSY2Vl5pWH7RqnE_xKgQnqmfK4brC5CeqZ8rhusLgMjRas4wiI0FDoMjY9G7UkenmgBSjxeHTS2UD5-GV0y&_nc_ohc=jI3sPl4PcrwAX-xuEV1&_nc_ht=scontent.fscl7-1.fna&oh=00_AfAOyWd8hyoTx4xkN89OiqB_81wjR6YmpzNX1MZb_rErVQ&oe=637100D4",
        "duracion": "22:22",
        "titulo": "Capitulo :  9    EL  GALÁCTICO",
        "capitulo": "9"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792210454135167&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27852716_1792227947466751_1833300180342931456_n.jpg?stp=dst-jpg_s552x414&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeEF388Xm13Q2laZnspVzTkkAkL8xlOodOMCQvzGU6h04xEcEZ2Goy18F3uRIta5SnBOGDdFabRftn2EL0t6dKU_&_nc_ohc=777jL_ShTbkAX-BG-x5&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCJy6LXp_FH5JDvg9PtBS97_epJqZUkRSW1LBEf_sDbFg&oe=63726464",
        "duracion": "22:33",
        "titulo": "Capitulo :  10    EL  GALÁCTICO",
        "capitulo": "10"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792241274132085&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27863195_1792259500796929_8583249359439659008_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFtKfVudzh5GkWSC0bfX2Ln3Yv44qGKvO7di_jioYq87ptofh7ClKT--R7guDGsei9kAelQoZGe4BSR-dSgz1A9&_nc_ohc=tXG5vAQhJpUAX8sX2Wh&_nc_oc=AQnAUIwXXGwFCLIH7hZINhO7pwuBant9VClQkZypvdZODuFMtHDzQ0IZKQqJuW5xxzuESWfUm9dBShRxax3qlGdp&_nc_ht=scontent.fscl7-1.fna&oh=00_AfB9E1bKtQgw_EMtMoT1tvwHn8EVkWcdNqmevEttW73NOg&oe=6372A8BB",
        "duracion": "22:33",
        "titulo": "Capitulo :  11   EL  GALÁCTICO",
        "capitulo": "11"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792270090795870&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27866394_1792302470792632_1852527086774779904_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGu1HisBuurwGYjfTueLR2yIRBcEkeE4E4hEFwSR4TgTiQ4ich5Uzh4QKG1AN_N6RU1MUq5jLWPuBoqIt8KuI1S&_nc_ohc=71Ik3sNRLncAX-RsQuM&_nc_ht=scontent.fscl7-1.fna&oh=00_AfAmBLThYpf2chFpb6-ijDuBwxcnY0C-mQn2NsyOWZEj4g&oe=6372DC30",
        "duracion": "22:35",
        "titulo": "Capitulo :  12    EL  GALÁCTICO",
        "capitulo": "12"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792507350772144&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27852480_1792518364104376_4435427771849637888_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGVVsduGrgw7dVM_4_T8rt4ExBqsbZhYtkTEGqxtmFi2Vr9Z7CP_UxcUpGEIqMxS4HjX1_SKcXNGLOK2msz0kd7&_nc_ohc=-s9qo4gedhUAX-semox&_nc_ht=scontent.fscl7-1.fna&oh=00_AfDdGK1b4Kd3YNVgAMvriwr9_Y69xuzPoNG5oyWmj1PMhA&oe=6371B876",
        "duracion": "22:01",
        "titulo": "Capitulo :  13     EL  GALÁCTICO",
        "capitulo": "13"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792588104097402&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27852743_1792616000761279_7939346831631187968_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGUdLGspzdWFbmeoDqdrfwNmV5Tw9m9jlKZXlPD2b2OUqUUetQLZP0EglDiclMWIN8eZ6ZlVmtkx0OeR-oB8WTs&_nc_ohc=S1v-lwDJ-_gAX-kG9iW&tn=W9LjzN50tv102z6y&_nc_ht=scontent.fscl7-1.fna&oh=00_AfBcnqA67-Ks6QWt8EqXb0OTbcrzZQEHLqNph--mM-H8oQ&oe=63720D7B",
        "duracion": "22:03",
        "titulo": "Capitulo :  14    EL  GALÁCTICO",
        "capitulo": "14"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792656617423884&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27855672_1792667287422817_5910153974601744384_n.jpg?stp=dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGONSKcdcpjq14aYdUEVnWQcnUTqAip8KVydROoCKnwpVe1YtJB2oPJftSyTSI9ydgDsIylNERHT788rtK8q9_2&_nc_ohc=JbEfPcJ3f_cAX_x8Qpu&tn=W9LjzN50tv102z6y&_nc_ht=scontent.fscl7-1.fna&oh=00_AfD6-dao37CHdJjzG2dtFnbjH0mybL4VcOjn6szuVHr1-Q&oe=6372D638",
        "duracion": "22:06",
        "titulo": "Capitulo :  15   EL  GALÁCTICO",
        "capitulo": "15"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792681804088032&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27596227_1792696324086580_1652580708285153280_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFj8b9O_w6EjF2bnoEGYGl7iQm4YTCHsoyJCbhhMIeyjGQgyzsXQxOCTjdiKq-Y1UsKVAaC6V7lvWzCi9FNHVTG&_nc_ohc=dR9jsLv0Nf4AX9hYFCv&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCCKvLeIs2egfksYSWeiutO3TpfnK8ImFfDUA8hBi_W_Q&oe=6371367E",
        "duracion": "21:38",
        "titulo": "Capitulo :  16   EL  GALÁCTICO",
        "capitulo": "16"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792749447414601&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27598170_1792754007414145_6011209602979332096_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGvViIp2uFHtsF5fPKTQpgpW2yZMtLB5_xbbJky0sHn_F42kh0DCrkPbJ6vEo4YPNGBSLlHFiK8RNgSeiamU51V&_nc_ohc=zt3F5CV1NxUAX8XESYa&_nc_ht=scontent.fscl7-1.fna&oh=00_AfD2kiL2UpEkAZBXw60PkiVf_u0DhIPY3ROiqs5VS_pN4A&oe=6371148D",
        "duracion": "22:26",
        "titulo": "Capitulo :  17   EL  GALÁCTICO",
        "capitulo": "17"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792759954080217&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27853987_1792777904078422_17188179945717760_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeEmfKudConZ54EgO6GiV9tCh6C9hBerDoSHoL2EF6sOhG7YqIQHxLF8uS0r152VDj2fvtx5yhvYs2vuZkXfvlWL&_nc_ohc=msKZd4Pk0HYAX-Xp9_s&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCOyCGFj-jBD79SDKSJyOoraTcZ_eTtkxHby_XVKqixQw&oe=63720B83",
        "duracion": "22:19",
        "titulo": "Capitulo :  18   EL  GALÁCTICO",
        "capitulo": "18"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792814620741417&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27866382_1792932707396275_9055937980975284224_n.jpg?stp=dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGhWuARqAmqvER7PGtA0gxlGktFAVc9HUwaS0UBVz0dTMJSQIclsJ5NDT2V0sxxvs5pB7q2olgZILXeH2VxijpR&_nc_ohc=ZPR57zaM8t4AX9eE1Vk&tn=W9LjzN50tv102z6y&_nc_ht=scontent.fscl7-1.fna&oh=00_AfBedoelFT54A2I6AmA0geNwLGuiI9Au9xPcArBwlfX7lw&oe=6372B74B",
        "duracion": "22:27",
        "titulo": "Capitulo :  19   EL  GALÁCTICO",
        "capitulo": "19"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1792981897391356&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/28756566_1792995760723303_7915773040338665472_n.jpg?stp=dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeG3HUXIjpJQZybuVasOHRlOqJhQAaSMRH-omFABpIxEf7o7ZSRIbLZ-wYh3GYHAJq9DWz9kwirUgFTLEtakjlIo&_nc_ohc=IGGFY0Cet5IAX-MwNBQ&_nc_oc=AQmF4ek2x80EzNcKKWgSjEojLXJuOvzeoxV5xsi4ukS4YUI5t0H3Km4WUFiI55wbzmdfTxG-47KQMXh-W60PZ9Cm&_nc_ht=scontent.fscl7-1.fna&oh=00_AfBfZBEYGlG90MkfAWqmZEIc9a9BEzlYu1PCb3FMfdCEMg&oe=637135BF",
        "duracion": "21:57",
        "titulo": "Capitulo :  20   EL  GALÁCTICO",
        "capitulo": "20"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1793007490722130&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27862397_1793014587388087_3348969305600425984_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFq86asTJdK3ZZSQiVbgCG8bY39RPllLX1tjf1E-WUtfZm8xvA1CN2PMcSt4vDUolxuYK8ZsuNXzSDkSQKTfYqX&_nc_ohc=33VMX3pfgB0AX9QpqY0&_nc_ht=scontent.fscl7-1.fna&oh=00_AfCqREUW9H9NIcdxGo_2yRXoOdCIlkGbpH0vC7mU3WAM9w&oe=63711C10",
        "duracion": "22:34",
        "titulo": "Capitulo :  21   EL  GALÁCTICO",
        "capitulo": "21"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1793025637386982&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27600602_1793030130719866_1538479370149036032_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeE_sS6khoBufN7RzxRx-kDvYJAo8Q1K0i5gkCjxDUrSLj_xXJds1May4VNWpkDhoYXBdfCy7vLoIToFSak8cOfH&_nc_ohc=-IvgKArC6h4AX8b4AOl&_nc_ht=scontent.fscl7-1.fna&oh=00_AfDEMNyiHHlJafQs0CqcrF_fr3vmkedVqwrtR9kJtJJugA&oe=6371606C",
        "duracion": "22:30",
        "titulo": "Capitulo :  22   EL  GALÁCTICO",
        "capitulo": "22"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1793041690718710&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/28770256_1793045964051616_7792882820430430208_n.jpg?stp=dst-jpg_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeFdF5NzjNlvIsKVMr5phldL4wvXCopGzyfjC9cKikbPJ5NtBSLqKjRCEfnpuKSzBSyvN2G0cGY0alUaxaBFrRE9&_nc_ohc=-6XSK8OWI5oAX8B1b7M&_nc_ht=scontent.fscl7-1.fna&oh=00_AfD0aTvj7eQN7DxvKQ1nFQmHfRlpckNu5UDFjdg27vguFg&oe=6371E4FC",
        "duracion": "22:27",
        "titulo": "Capitulo :  23   EL  GALÁCTICO",
        "capitulo": "23"
      },
      {
        "serie": "EL  GALÁCTICO",
        "video": "https://www.facebook.com/plugins/video.php?height=373&href=https://www.facebook.com/watch/?v=1793422477347298&show_text=false&width=560&t=0",
        "imagen": "https://scontent.fscl7-1.fna.fbcdn.net/v/t15.5256-10/27856190_1793432267346319_6064060090384646144_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeGMakYpBC301HdYeNqGG7elOc6xiHsNCI45zrGIew0IjseDyIAbnr31uiB71cKSVssjLZSzt1tR5O0qc3G8U6hV&_nc_ohc=QmZB6DzBLbUAX9Vp-Un&tn=W9LjzN50tv102z6y&_nc_ht=scontent.fscl7-1.fna&oh=00_AfBhkPWd4fJMyEpdQQ2F01U1lCqaYWrwLsstqeNjsREdag&oe=63719FE3",
        "duracion": "22:22",
        "titulo": "Capitulo : 24   EL  GALÁCTICO",
        "capitulo": "24"
      }
    ]
    console.log(this.serie)
    console.log(this.capitulos)
   
  }

  ngOnInit() {
    this.capitulos = this.capitulos.filter(x => x.serie == this.serie);
    console.log(this.capitulos)

  }

  public verSerie(video) {
    this.navCtrl.navigateForward(['ver-serie', this.serie,video]);
  }

}
