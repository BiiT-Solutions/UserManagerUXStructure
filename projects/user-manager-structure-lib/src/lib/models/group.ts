import {ElementDto} from "authorization-services-lib";
import {Application} from "./application";

export class Group extends ElementDto {
  override id: number;
  name: string;
  description: string;
  parent: Group;
  application: Application;
  uniqueName: string;
  uniqueId: string;

  public static override clone(from: Group): Group {
    const to: Group = new Group();
    Group.copy(from, to);
    return to;
  }
  public static override copy(from: Group, to: Group): void {
    super.copy(from, to);
    to.id = from.id;
    to.name = from.name;
    to.description = from.description;
    to.parent = from.parent ? Group.clone(from.parent) : null;
    to.application = from.application ? Application.clone(from.application) : null;
    to.uniqueName = from.uniqueName;
    to.uniqueId = from.uniqueId;
  }
}
