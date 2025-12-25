import { Directive, OnInit, OnDestroy, input, inject, Input, HostBinding } from '@angular/core';
import { TabsState } from './tabs.state';

@Directive({
    selector: '[apTabPanel]',
    standalone: true,
    exportAs: 'apTabPanel',
    host: {
        'role': 'tabpanel',
        '[attr.aria-labelledby]': '`ap-tab-${id}`',
        '[style.display]': 'isActive() ? "block" : "none"',
        '[attr.aria-hidden]': '!isActive()'
    }
})
export class TabPanelDirective implements OnInit, OnDestroy {
    @Input({ required: true }) id!: string;
    @Input() disabled = false;
    private state = inject(TabsState);

    ngOnInit(): void {
        this.state.register({
            id: this.id,
            disabled: this.disabled
        });
    }

    ngOnDestroy(): void {
        this.state.unregister(this.id);
    }

    isActive(): boolean {
        return this.state.activeId() === this.id;
    }
}
