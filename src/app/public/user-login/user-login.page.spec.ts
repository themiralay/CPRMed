import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLoginPage } from './user-login.page';

describe('UserLoginPage', () => {
  let component: UserLoginPage;
  let fixture: ComponentFixture<UserLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
