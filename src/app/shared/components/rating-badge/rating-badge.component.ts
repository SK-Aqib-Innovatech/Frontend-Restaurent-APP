import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-1">
      <svg class="w-4 h-4" [class.text-primary]="rating >= 4" [class.text-muted]="rating < 4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
      <span class="text-sm font-bold" [class.text-primary]="rating >= 4" [class.text-muted]="rating < 4">
        {{ rating }}
      </span>
      <span class="text-xs text-muted" *ngIf="count">
        ({{ formatCount(count) }})
      </span>
    </div>
  `,
  styles: []
})
export class RatingBadgeComponent {
  @Input() rating = 0;
  @Input() count?: number;

  formatCount(count: number): string {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k+`;
    }
    return `${count}+`;
  }
}
