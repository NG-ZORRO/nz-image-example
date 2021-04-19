import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {DisplayInfo, getDisplayInfo} from '../uitil';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-optimized',
  templateUrl: './optimized.component.html',
  styleUrls: ['./optimized.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent implements OnInit {
  displayInfo: DisplayInfo | null = null;
  constructor(private platform: Platform) { }

  ngOnInit(): void {
    this.refreshDisplayInfo();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.refreshDisplayInfo();
  }

  refreshDisplayInfo(): void {
   if (this.platform.isBrowser) {
     this.displayInfo = getDisplayInfo();
   }
  }

}
