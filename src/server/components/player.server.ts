import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

@Component()
export class PlayerComponent extends BaseComponent<{}, Player> implements OnStart {
	onStart() {
		print(`Wow! I'm attached to ${this.instance.Name}`);
	}
}
