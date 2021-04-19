import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {DisplayInfo, getDisplayInfo} from '../uitil';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-unoptimized',
  templateUrl: './unoptimized.component.html',
  styleUrls: ['./unoptimized.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnoptimizedComponent implements OnInit {
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
