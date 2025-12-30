import { Directive } from '@angular/core';
import { TabList } from '@angular/aria/tabs';

@Directive({
    selector: '[apTabList]',
    standalone: true,
    hostDirectives: [{
        directive: TabList
    }]
})
export class TabListDirective { }