import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursohttpComponent } from './cursohttp.component';

describe('CursohttpComponent', () => {
  let component: CursohttpComponent;
  let fixture: ComponentFixture<CursohttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursohttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursohttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
