import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowerShopApiService } from './services/flower-shop-api.service';
import { CommonModule } from '@angular/common';

interface ChaosText {
  x: number;
  y: number;
  angle: number;
}

interface Explosion {
  x: number;
  y: number;
  delay: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  hasPinged = false;
  backendText = '';

  chaosTexts: ChaosText[] = [];
  explosions: Explosion[] = [];

  constructor(private api: FlowerShopApiService) {}

  pingBackend() {
    if (this.hasPinged) return;

    this.api.ping().subscribe(res => {
      this.createExplosions();
      this.hasPinged = true;
      this.backendText = res;

      this.chaosTexts = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        angle: Math.random() * 360
      }));
    });
  }

  createExplosions() {
    this.explosions = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
  }
}
