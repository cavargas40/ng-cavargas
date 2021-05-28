import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: MouseEvent) {
  //   this.engineService.onDocumentMouseMove(e);
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(e) {
  //   this.engineService.onWindowResize();
  // }


  public constructor(private engineService: EngineService) {
  }

  public ngOnInit(): void {
    this.engineService.init(this.rendererCanvas);
    this.engineService.animate();
  }
}
