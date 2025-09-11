import { Application } from "../entities/application/application";
import {
  Injectable
} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ApplicationCacheService {
  private cachedApps: Application[] | null = null;
  private cacheTTL = 5 * 60 * 1000; // 5 минут
  private cacheTime: number = 0;

  getCache(): Application[] {
    return this.cachedApps;
  }

  setCache(data: Application[]): void {
    this.cachedApps = data;
    this.cacheTime = Date.now();
  }

  isCacheValid(): boolean {
    return this.cachedApps && (Date.now() - this.cacheTime) < this.cacheTTL;
  }
}
