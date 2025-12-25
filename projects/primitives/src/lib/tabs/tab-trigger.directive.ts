import { Directive, HostListener, inject, Input, input } from '@angular/core';
import { TabsState } from './tabs.state';

@Directive({
    selector: '[apTabTrigger]',
    standalone: true,
    host: {
        '(click)': 'activate()'
    }
})
export class TabTriggerDirective {
    @Input({ required: true }) tabId!: string;
    private state = inject(TabsState);
    // }
    activate(): void {
        console.log('TabTriggerDirective activating tab:', this.tabId);
        this.state.select(this.tabId);
    }
}
