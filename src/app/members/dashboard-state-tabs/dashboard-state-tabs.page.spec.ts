import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardStateTabsPage } from './dashboard-state-tabs.page';

describe('DashboardStateTabsPage', () => {
  let component: DashboardStateTabsPage;
  let fixture: ComponentFixture<DashboardStateTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStateTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardStateTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
