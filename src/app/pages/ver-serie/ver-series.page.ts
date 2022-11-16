import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-edit',
  templateUrl: './ver-series.page.html',
  styleUrls: ['./ver-series.page.scss'],
})
export class VerseriesPage implements OnInit {

  vidUrl: SafeResourceUrl
  public urlVideo: string;
  public serie: string;
  constructor(private activeRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {

    this.urlVideo = this.activeRoute.snapshot.paramMap.get('video');

    this.serie = this.activeRoute.snapshot.paramMap.get('serie');
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.urlVideo)


  }

  ngOnInit() {

  }


}
