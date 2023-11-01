import { Service, OnStart } from "@flamework/core";

@Service()
export class GameloopService implements OnStart {
    tick(): void {
        spawn(() => {
            task.wait(5);
            
        })
    }
	onStart(): void {}
}
