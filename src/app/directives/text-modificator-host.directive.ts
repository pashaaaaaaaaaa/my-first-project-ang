import { Directive, ElementRef, Input,  OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'}
  })
  export class TextModificatorHostDirective implements OnInit {
    
    private backgroundColor = "rgba(0,0,0,0.2)";
    @Input() background!: string;
    @Input() str!: string;
  
  constructor(private element: ElementRef, private renderer: Renderer2){}
    
  ngOnInit(): void {
    this.str = this.renderer.createText(this.str);
  }
  
   onMouseEnter() {
    this.backgroundColor = this.background;
    this.renderer.appendChild(this.element.nativeElement, this.str);
    }
  
   onMouseLeave() {
    this.backgroundColor = "";
    this.renderer.removeChild(this.element.nativeElement, this.str);
    }
  }