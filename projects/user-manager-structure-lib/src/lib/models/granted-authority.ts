export class GrantedAuthority {
  authority: string;

  public static clone(grantedAuthority: GrantedAuthority): GrantedAuthority {
    const clonedGrantedAuthority: GrantedAuthority = new GrantedAuthority();
    GrantedAuthority.copy(grantedAuthority, clonedGrantedAuthority);
    return clonedGrantedAuthority;
  }
  public static copy(from: GrantedAuthority, to: GrantedAuthority): void {
    to.authority = from.authority;
  }
}
