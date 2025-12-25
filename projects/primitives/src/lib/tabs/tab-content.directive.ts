import { Directive, Input, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { TabsState } from './tabs.state';

@Directive({
    selector: '[apTabContent]'
})
export class TabContentDirective {
    @Input({ required: true }) tabId!: string;
    private state = inject(TabsState);
    constructor(
        template: TemplateRef<unknown>,
        vcr: ViewContainerRef
    ) {
        effect(() => {
            vcr.clear();

            if (this.state.activeId() === this.tabId) {
                vcr.createEmbeddedView(template);
            }
        });
    }
}
