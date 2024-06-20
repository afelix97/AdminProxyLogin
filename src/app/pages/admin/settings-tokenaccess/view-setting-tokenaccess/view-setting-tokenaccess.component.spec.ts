import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSettingTokenaccessComponent } from './view-setting-tokenaccess.component';

describe('ViewSettingTokenaccessComponent', () => {
  let component: ViewSettingTokenaccessComponent;
  let fixture: ComponentFixture<ViewSettingTokenaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSettingTokenaccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSettingTokenaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
