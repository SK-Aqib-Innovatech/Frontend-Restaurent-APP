import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-1">
      <i
        class="fa-solid fa-star w-4 h-4 text-xs flex items-center justify-center"
        [class.text-primary]="rating >= 4"
        [class.text-muted]="rating < 4"
      ></i>
      <span
        class="text-sm font-bold"
        [class.text-primary]="rating >= 4"
        [class.text-muted]="rating < 4"
      >
        {{ rating }}
      </span>
      <span class="text-xs text-muted" *ngIf="count"> ({{ formatCount(count) }}) </span>
    </div>
  `,
  styles: [],
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
