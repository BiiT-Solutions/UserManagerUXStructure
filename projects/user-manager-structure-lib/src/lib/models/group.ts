export class Group {
  name: string;
  subGroups: Group[] = [];
  parent: Group;

  public static copy (from: Group, to: Group): void {
    to.name = from.name;
    to.subGroups = from.subGroups;
    to.parent = from.parent;
  }
  public static clone (from: Group): Group {
    const to: Group = new Group();
    Group.copy(from, to);
    return to;
  }
}
