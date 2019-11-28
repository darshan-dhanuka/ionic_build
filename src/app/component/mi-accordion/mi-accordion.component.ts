import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './mi-accordion.component.html',
  styleUrls: ['./mi-accordion.component.scss'],
})
export class MiAccordionComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  description: string;

  @Input()
  icon: string;

  @Input()
  isMenuOpen: boolean = false;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  openWatchPage() {
    this.router.navigate(['/home/tabs/watch']);
  }

  ngOnInit() {
  }

  public toggleAccordion(name): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.change.emit(name);
  }

  public broadcastName(name: string): void {
  
    this.change.emit(name);
  }

}
