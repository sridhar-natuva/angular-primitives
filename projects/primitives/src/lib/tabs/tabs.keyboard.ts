import { FocusKeyManager } from '@angular/cdk/a11y';
import { TabTriggerDirective } from './tab-trigger.directive';

export class TabsKeyboardController {
    private triggers: readonly TabTriggerDirective[] = [];
    private keyManager!: FocusKeyManager<TabTriggerDirective>;

    init(triggers: readonly TabTriggerDirective[]): void {
        this.triggers = triggers;

        this.keyManager = new FocusKeyManager(triggers)
            .withHorizontalOrientation('ltr')
            .withWrap()
            .skipPredicate(item => item.disabled);
    }

    handleKeydown(event: KeyboardEvent): void {
        this.keyManager.onKeydown(event);
    }

    setActiveById(id: string): void {
        const index = this.triggers.findIndex(t => t.tabId === id);

        if (index >= 0) {
            this.keyManager.setActiveItem(index);
        }
    }

}
