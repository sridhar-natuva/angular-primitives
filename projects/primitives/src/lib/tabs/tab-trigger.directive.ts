import { Directive, ElementRef, Host, HostBinding, HostListener, inject, Input, input } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';
import { TabsState } from './tabs.state';
import { TabsDirective } from './tabs.directive';

@Directive({
    selector: '[apTabTrigger]',
    standalone: true,
    host: {
        'role': 'tab',
        '[attr.aria-selected]': 'state.activeId() === tabId',
        '[attr.aria-disabled]': 'disabled',
        '(click)': 'activate()'
    }
})
export class TabTriggerDirective implements FocusableOption {
    @Input({ required: true }) tabId: string = '';
    @Input() disabled = false;
    state = inject(TabsState);
    el = inject(ElementRef<HTMLElement>);
    // constructor(@Host() private tabs: TabsDirective) { }
    activate(): void {
        this.state.select(this.tabId);
    }

    focus(): void {
        this.el.nativeElement.focus();
    }

    // @HostListener('keydown', ['$event'])
    // onKeydown(event: KeyboardEvent) {
    //     this.tabs.handleKeydown(event);
    // }

    @HostBinding('attr.tabindex')
    tabindex = '-1';

    @HostBinding('attr.id')
    get id() {
        return `ap-tab-${this.tabId}`;
    }

    @HostBinding('attr.aria-controls')
    get controls() {
        return `ap-panel-${this.tabId}`;
    }


    setActive(isActive: boolean): void {
        this.tabindex = isActive ? '0' : '-1';
    }
}
