export interface AuthVerifyResponse {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: Result;
}

export interface Result {
  response: Tokens;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
