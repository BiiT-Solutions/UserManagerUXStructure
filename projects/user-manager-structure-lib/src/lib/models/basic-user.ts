import {ElementDto} from "authorization-services-lib";
import {GrantedAuthority} from "./granted-authority";

export class BasicUser extends ElementDto {
  override id: number;
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  languageId: string;
  authorities: GrantedAuthority[];
  password: string;
  enabled: boolean;

  public static override clone(from: BasicUser): BasicUser {
    const to: BasicUser = new BasicUser();
    BasicUser.copy(from, to);
    return to;
  }
  public static override copy(from: BasicUser, to: BasicUser): void {
    super.copy(from, to);
    from.uuid = to.uuid;
    from.username = to.username;
    from.name = to.name;
    from.lastname = to.lastname;
    from.languageId = to.languageId;
    from.authorities = to.authorities ? to.authorities.map(GrantedAuthority.clone) : [];
    from.password = to.password;
    from.enabled = to.enabled;
  }
}
