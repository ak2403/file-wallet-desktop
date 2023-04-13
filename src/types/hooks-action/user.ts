export type UserLoginPayload = {
  user: {
    email: string;
  };
};

export type ErrorMessage = {
  name: string;
  message: string;
};

export type AuthenticateUserResponse = {
  success: boolean;
  errors?: ErrorMessage[];
};
