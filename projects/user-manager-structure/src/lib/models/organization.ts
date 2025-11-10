import {ElementDto} from '@biit-solutions/authorization-services';

export class Organization extends ElementDto {
  name: string;
  description: string;

  public static override clone(from: Organization): Organization {
    const to: Organization = new Organization();
    Organization.copy(from, to);
    return to;
  }
  public static override copy(from: Organization, to: Organization): void {
    super.copy(from, to);
    to.name = from.name;
    to.description = from.description;
  }
}
