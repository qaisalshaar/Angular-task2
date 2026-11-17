import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Product } from './components/product/product';

@Component({
  selector: 'app-root',
  imports: [Home, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task2');
}
