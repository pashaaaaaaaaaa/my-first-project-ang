import {Directive, HostListener, HostBinding, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextRainbowColor]'
})
export class TextRainbowColorDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {
  }
  @HostBinding("class") cls = "rainbow";

}
