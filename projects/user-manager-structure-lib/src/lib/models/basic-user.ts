import {ElementDto} from "./element-dto";

export class BasicUser extends ElementDto {
  uuid: string;
  username: string;
  firstName: string;
  lastName: string;

  public static override copy(from: BasicUser, to: BasicUser): void {
    super.copy(from, to);
    to.uuid = from.uuid;
    to.username = from.username;
    to.firstName = from.firstName;
    to.lastName = from.lastName;
  }

  public static override clone(from: BasicUser): BasicUser {
    const to: BasicUser = new BasicUser();
    BasicUser.copy(from, to);
    return to;
  }
}
