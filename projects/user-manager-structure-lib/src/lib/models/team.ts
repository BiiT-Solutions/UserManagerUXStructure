import {ElementDto} from "authorization-services-lib";
import {Application} from "./application";

export class Team extends ElementDto {
  override id: number;
  name: string;
  description: string;
  parent: Team;
  application: Application;
  uniqueName: string;
  uniqueId: string;

  public static override clone(from: Team): Team {
    const to: Team = new Team();
    Team.copy(from, to);
    return to;
  }
  public static override copy(from: Team, to: Team): void {
    super.copy(from, to);
    to.id = from.id;
    to.name = from.name;
    to.description = from.description;
    to.parent = from.parent ? Team.clone(from.parent) : null;
    to.application = from.application ? Application.clone(from.application) : null;
    to.uniqueName = from.uniqueName;
    to.uniqueId = from.uniqueId;
  }
}
