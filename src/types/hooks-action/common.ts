export type ErrorMessage = {
  name?: string;
  message: string;
};

export type ApiDispatchResponse = {
  success: boolean;
  errors?: ErrorMessage[];
};
