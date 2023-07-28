import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    })

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ion-header element', () => {
    const ionHeaderElement = fixture.nativeElement.querySelector('ion-header');
    expect(ionHeaderElement.textContent.trim()).toBe('Images')
  });

  it('should have ion-content element', () => {
    const ionContentElement = fixture.nativeElement.querySelector('ion-content');
    expect(ionContentElement.textContent).toContain('Gallery')
  });
});
