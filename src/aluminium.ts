import { Aluminium, Transfer } from "../generated/Aluminium/Aluminium";
import { User } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
    let contract = Aluminium.bind(event.address);

    let to = new User(event.params.to.toHex());
    to.al = contract.balanceOf(event.params.to);
    to.save();

    let from = new User(event.params.from.toHex());
    from.al = contract.balanceOf(event.params.from);
    from.save();
}
