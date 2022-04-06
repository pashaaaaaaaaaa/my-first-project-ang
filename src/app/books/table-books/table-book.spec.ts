import { TableBookService } from './table-book.service';
import { TableBooksComponent } from './table-book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('TableBookComponent', () => {
    let service: TableBookService;
    let component: TableBooksComponent;
    let fixture: ComponentFixture<TableBooksComponent>;
    let spy: jasmine.Spy;

    beforeEach(async()=>{
        TestBed.configureTestingModule({
            declarations: [TableBooksComponent],
            providers: [TableBookService]
        })
        .compileComponents()
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(TableBooksComponent)
        component = fixture.componentInstance
        fixture.detectChanges()

    })

    it('should create', ()=>{
        expect(component).toBeTruthy()
    })

    it('вызов функции calculateTotal(),для проверки ', async () => {
        spyOn(component, 'calculateTotal')//тут с помощью ребят сделал 
        component.calculateTotal();
        expect(component.calculateTotal).toHaveBeenCalled();
      })
});