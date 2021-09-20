import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
 ViewChild,
 ElementRef,
 ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native, Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', { static: true}) header: ElementRef;
  @ContentChild('contentParagraph', { static : true }) paragraph: ElementRef;

  constructor() { 
    console.log('constructor Called.')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngInit Called');
    console.log('textContent: ' + this.header.nativeElement.textContent);
    console.log('\n Text Content of paragrath: ' + this.paragraph.nativeElement.textContent);
    console.log('\n')
  }

  ngDoCheck(){
    console.log('ngDoCheck Called');
  }

  // Called only once
  ngAfterContentInit(){ 
    console.log('ngAfterContentInit Called');
    console.log('\n Text Content of paragrath: ' + this.paragraph.nativeElement.textContent);
    console.log('\n')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCheck Called')
  }
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit Called');
    console.log('textContent: ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
