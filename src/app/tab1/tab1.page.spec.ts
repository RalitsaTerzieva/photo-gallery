import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    })

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ion-header element', () => {
    const ionHeaderElement = fixture.nativeElement.querySelector('ion-header');
    expect(ionHeaderElement).toBeTruthy();
  });

  it('should have ion-content element', () => {
    const ionContentElement = fixture.nativeElement.querySelector('ion-content');
    expect(ionContentElement).toBeTruthy();
  });
});
