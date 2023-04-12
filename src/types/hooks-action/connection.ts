export type ConnectionRequestPayload = {
  deviceName: string;
};

export type ConnectionRequestResponse = {
  message: string;
};

export type SendConnectionRequest = {
  isSuccess: boolean;
  errorMessage?: string;
};
