import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Extension } from '../../models/extension.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  extensions: Extension[] = [
    {
      id: 1,
      name: '  DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      icon: 'assets/images/devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 2,
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 3,
      name: '  SpeedBoost',
      description:
        '  Optimizes browser resource usage to accelerate page loading.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 4,
      name: '    JSONWizard',
      description:
        '  Formats, validates, and prettifies JSON responses in-browser.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 5,
      name: '    TabMaster Pro',
      description: '  Organizes browser tabs into groups and sessions.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 6,
      name: '   ViewportBuddy',
      description:
        '   Simulates various screen resolutions directly within the browser.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 7,
      name: '   Markup Notes',
      description:
        '    Enables annotation and notes directly onto webpages for collaborative debugging.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 8,
      name: '  GridGuides',
      description:
        '  Overlay customizable grids and alignment guides on any webpage.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 8,
      name: '  Palette Picker',
      description: '  Instantly extracts color palettes from any webpage.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 8,
      name: '  LinkChecker',
      description: '  Scans and highlights broken links on any page.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 8,
      name: '   DOM Snapshot',
      description: '  Capture and export DOM structures quickly.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
    {
      id: 8,
      name: '  ConsolePlus',
      description:
        '  Enhanced developer console with advanced filtering and logging.',
      icon: 'devlens-icon.png',
      color: '#4CAF50',
      active: true,
    },
  ];

  remove(id: number){
    this.extensions = this.extensions.filter(e => e.id !== id);
    this.saveToStorage();
  }

  toggleActive(ext: Extension){
    ext.active = !ext.active;
    this.saveToStorage();
  }

  trackById(index: number, item: Extension){
    return item.id;
  }

  saveToStorage() {
    localStorage.setItem('extensions', JSON.stringify(this.extensions));
  }

  loadFromStorage(){
    const raw = localStorage.getItem('extensions');
    if(raw){
      try {
        this.extensions = JSON.parse(raw);
      } catch { }
    }
  }

  ngOnInit(){
    this.loadFromStorage();
  }

}
