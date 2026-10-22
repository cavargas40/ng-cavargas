import * as THREE from 'three';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as EFFECT from '../effects/anaglyph-effect';

@Injectable({
  providedIn: 'root',
})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private effect: any;
  private spheres: THREE.Mesh[] = [];

  private mouseX = 0;
  private mouseY = 0;

  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public init(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas = canvas.nativeElement;
    this.spheres = [];

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    this.camera.position.z = 3;
    this.camera.setFocalLength(6);

    const path = '/assets/images/textures/pisa/';
    const format = '.png';
    const urls = [
      path + 'px' + format,
      path + 'nx' + format,
      path + 'py' + format,
      path + 'ny' + format,
      path + 'pz' + format,
      path + 'nz' + format,
    ];

    const textureCube = new THREE.CubeTextureLoader().load(urls);
    this.scene = new THREE.Scene();
    this.scene.background = textureCube;
    const geometry = new THREE.SphereGeometry(0.1, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      envMap: textureCube,
    });

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = Math.random() * 10 - 5;
      mesh.position.y = Math.random() * 10 - 5;
      mesh.position.z = Math.random() * 10 - 5;

      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

      this.scene.add(mesh);
      this.spheres.push(mesh);
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    const width = window.innerWidth - 10 || 2;
    const height = window.innerHeight - 10 || 2;

    this.effect = new EFFECT.AnaglyphEffect(this.renderer);
    this.effect.setSize(width, height);
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  onDocumentMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX - this.windowHalfX) / 100;
    this.mouseY = (event.clientY - this.windowHalfY) / 100;
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('mousemove', (event) => {
        this.onDocumentMouseMove(event);
      });

      window.addEventListener('resize', () => {
        this.onWindowResize();
      });
    });
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    const timer = 0.0001 * Date.now();

    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;

    this.camera.lookAt(this.scene.position);

    for (let i = 0, il = this.spheres.length; i < il; i++) {
      const sphere = this.spheres[i];

      sphere.position.x = 5 * Math.cos(timer + i);
      sphere.position.y = 5 * Math.sin(timer + i * 1.1);
    }

    this.effect.render(this.scene, this.camera);
  }
}
