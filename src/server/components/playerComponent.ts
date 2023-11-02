import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

@Component()
export class PlayerComponent extends BaseComponent<{}, Player> implements OnStart {
	cash = 0;
	onStart() {
		print(`Wow! I'm attached to ${this.instance.Name}`);
	}
}
