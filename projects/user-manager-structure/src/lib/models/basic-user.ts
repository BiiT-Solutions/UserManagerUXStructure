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
    to.uuid = from.uuid;
    to.username = from.username;
    to.name = from.name;
    to.lastname = from.lastname;
    to.languageId = from.languageId;
    to.authorities = from.authorities ? from.authorities.map(GrantedAuthority.clone) : [];
    to.password = from.password;
    to.enabled = from.enabled;
  }
}
