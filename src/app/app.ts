import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { homelabIcons, homelabLinks } from './homelab-links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIcon],
  providers: [provideIcons(homelabIcons)],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly links = homelabLinks;
}
