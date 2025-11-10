import {ElementDto} from '@biit-solutions/authorization-services';

export class UserGroup extends ElementDto {
  name: string;
  description: string;
  grantedAuthorities: string[];
  applicationRoles: string[];

  public static override clone(from: UserGroup): UserGroup {
    const to: UserGroup = new UserGroup();
    UserGroup.copy(from, to);
    return to;
  }
  public static override copy(from: UserGroup, to: UserGroup): void {
    super.copy(from, to);
    to.name = from.name;
    to.description = from.description;
    to.grantedAuthorities = from.grantedAuthorities;
    to.applicationRoles = from.applicationRoles;
  }

}
