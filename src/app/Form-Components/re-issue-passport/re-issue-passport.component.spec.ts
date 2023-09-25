import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReIssuePassportComponent } from './re-issue-passport.component';

describe('ReIssuePassportComponent', () => {
  let component: ReIssuePassportComponent;
  let fixture: ComponentFixture<ReIssuePassportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReIssuePassportComponent]
    });
    fixture = TestBed.createComponent(ReIssuePassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
