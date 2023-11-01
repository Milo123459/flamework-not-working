import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { TowerKind, TowerLevel } from "server/types/enums";

interface Attributes {
	kind: TowerKind;
	player: Player;
}

export class TowerComponent extends BaseComponent<Attributes, Model> implements OnStart {
	level: TowerLevel = TowerLevel.Level1;
	onStart() {
		print(`Wow! I'm attached to... ${this.instance.Name}`);
	}

	cycle() {
		switch (this.attributes.kind) {
			case TowerKind.Farm:
                
				break;
		}
	}
}
