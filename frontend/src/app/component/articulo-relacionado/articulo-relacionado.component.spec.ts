import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloRelacionadoComponent } from './articulo-relacionado.component';

describe('ArticuloRelacionadoComponent', () => {
  let component: ArticuloRelacionadoComponent;
  let fixture: ComponentFixture<ArticuloRelacionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloRelacionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloRelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
