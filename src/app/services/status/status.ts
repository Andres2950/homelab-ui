import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCheckerService, ServiceStatus } from './status.api'


@Component({
  selector: 'app-status',
  imports: [CommonModule],
  templateUrl: './status.html',
  styleUrl: './status.css',
})

export class Status {
  private status_checker: StatusCheckerService = inject(StatusCheckerService);
  services$ = this.status_checker.getStatus();
}
