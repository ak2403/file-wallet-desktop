import { Children } from 'react';

type ErrorWrapperType = {
  children: React.ReactNode;
  errorMessage: string;
};

const ErrorWrapper: React.FC<ErrorWrapperType> = ({ children, errorMessage }) => {
  const childElements = Children.map(children, (child) => child);

  return (
    <>
      {childElements}
      {errorMessage ? <p>{errorMessage}</p> : ''}
    </>
  );
};

export { ErrorWrapper };
