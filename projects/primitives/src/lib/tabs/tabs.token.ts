// tabs.token.ts
import { InjectionToken, Signal } from '@angular/core';

export interface ITabsController {
    register(panel: any): void;
    unregister(panel: any): void;
    select(panel: any): void;
    activeId: Signal<string | null>;
}

export const TABS_STATE_TOKEN = new InjectionToken<ITabsController>('TABS_STATE_TOKEN');