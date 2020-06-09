import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardTabsPage } from './dashboard-tabs.page';

describe('DashboardTabsPage', () => {
  let component: DashboardTabsPage;
  let fixture: ComponentFixture<DashboardTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
