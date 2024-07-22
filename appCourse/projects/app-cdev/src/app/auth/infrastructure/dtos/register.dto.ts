export interface IResponseRegister {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: {
    response: {
      tokens: {
        accessToken: string;
        refreshToken: string;
      };
      secret: string;
      qrCode: string;
    };
  };
}

export class RegisterInfo {
  qrCode!: string;
  secret!: string;
  accessToken!: string;
  refreshToken!: string;
}

export class RegisterDto {
  static fromDataToRequest(data: IResponseRegister): RegisterInfo {
    const registerInfo = new RegisterInfo();
    registerInfo.qrCode = data.result.response.qrCode;
    registerInfo.secret = data.result.response.secret;
    registerInfo.accessToken = data.result.response.tokens.accessToken;
    registerInfo.refreshToken = data.result.response.tokens.refreshToken;

    return registerInfo;
  }
}
