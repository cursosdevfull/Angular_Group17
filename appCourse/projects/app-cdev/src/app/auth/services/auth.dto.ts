export class AuthDto {
  static fromResponseToRequest(response: any) {
    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    };
  }
}
