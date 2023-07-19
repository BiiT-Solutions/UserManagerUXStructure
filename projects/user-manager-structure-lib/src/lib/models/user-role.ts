import {Group} from "./group";
import {Application} from "./application";
import {Role} from "./role";
import {ElementDto, User} from "authorization-services-lib";

export class UserRole extends ElementDto {
  group: Group;
  application: Application;
  user: User;
  role: Role;

  public static override clone(from: UserRole): UserRole {
    const to: UserRole = new UserRole();
    UserRole.copy(from, to);
    return to;
  }
  public static override copy(from: UserRole, to: UserRole): void {
    super.copy(from, to);
    to.group = from.group;
    to.application = from.application;
    to.user = from.user;
    to.role = from.role;
  }
}
