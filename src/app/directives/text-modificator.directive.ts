import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextModificator]'
})
export class TextModificatorDirective implements OnInit {

  
  
  @Input() background!: string;
  @Input() str!: string;


  constructor(private element: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {
    this.str = this.renderer.createText(this.str);
  }

  private backgroundColor = "rgba(0,0,0,0.2)";
     
      @HostBinding("style.backgroundColor") get getBackgroundColor(){
          
          return this.backgroundColor;
      }
      
      @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }
      
      @HostListener("mouseenter") onMouseEnter() {
        this.backgroundColor = this.background;
        this.renderer.appendChild(this.element.nativeElement, this.str);

      }

      @HostListener("mouseleave") onMouseLeave() {
          this.backgroundColor = "";
          this.renderer.removeChild(this.element.nativeElement, this.str);
      }
}
