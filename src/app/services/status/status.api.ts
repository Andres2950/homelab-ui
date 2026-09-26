import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ServiceStatus {
  name: string;
  status: "Running" | "Stopped" | "Unknown" | "Not Implemented";
}
@Injectable({providedIn: 'root'})
export class StatusCheckerService {
  private http = inject(HttpClient);

  prettyName(name: string): string{
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  mapStatus(value: string): ServiceStatus['status'] {
    if (value === 'active') return 'Running';
    if (value === 'inactive') return 'Stopped';
    if (value === 'Not Implemented') return 'Not Implemented';
    return 'Unknown';
  }
  getStatus() {
    const url = `${environment.apiUrl}/get-statuses`;
    return this.http.get<Record<string, string>>(url).pipe(
      map(data =>
          Object.entries(data).map(([name,status]) => ({
            name: this.prettyName(name),
            status: this.mapStatus(status),
          }))
      )
    );
  }

}
