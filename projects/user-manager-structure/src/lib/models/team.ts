import {ElementDto} from '@biit-solutions/authorization-services';
import {Organization} from "./organization";

export class Team extends ElementDto {
  override id: number;
  name: string;
  description: string;
  parent: Team;
  organization: Organization;
  uniqueName: string;

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
    to.organization = from.organization ? Organization.clone(from.organization) : null;
    to.uniqueName = from.uniqueName;
  }
}
