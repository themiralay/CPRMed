import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardSimulatorTabsPage } from './dashboard-simulator-tabs.page';

describe('DashboardSimulatorTabsPage', () => {
  let component: DashboardSimulatorTabsPage;
  let fixture: ComponentFixture<DashboardSimulatorTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSimulatorTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSimulatorTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
