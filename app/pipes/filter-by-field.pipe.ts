import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  standalone: true,
  pure: true
})
export class FilterByFieldPipe implements PipeTransform {
  transform<T extends Record<string, any>>(items: T[] | null | undefined, field: keyof T | string, query: string | null | undefined): T[] {
    if (!Array.isArray(items)) return [];
    if (!query) return items;
    const q = String(query).toLowerCase().trim();
    const key: string = String(field);
    return items.filter((it) => String((it as any)[key] ?? '').toLowerCase().includes(q));
  }
}
