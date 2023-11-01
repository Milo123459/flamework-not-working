import { Service, OnStart, Dependency } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Components } from "@flamework/components";
import { PlayerComponent } from "server/components/player.server";

@Service()
export class PlayersService implements OnStart {
	onStart(): void {
		Players.PlayerAdded.Connect((player) => this.playerAdded(player));
	}

	playerAdded(player: Player): void {
		Dependency<Components>().addComponent<PlayerComponent>(player);
	}
}
