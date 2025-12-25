import { Directive } from '@angular/core';
import { TabsState } from './tabs.state';

@Directive({
    selector: '[apTabs]',
    standalone: true,
    exportAs: 'apTabs',
    providers: [
        TabsState,
        // {
        //     provide: TABS_STATE_TOKEN,
        //     useExisting: TabsState
        // }
    ]
})
export class TabsDirective {
    constructor(public readonly state: TabsState) {
    }
}
