export type FileInformation = {
  exists: boolean;
  stats?: {
    fileType: string | null;
    size: number;
  };
};

export type DialogFileInformation = FileInformation & {
  canceled: boolean;
  errored?: boolean;
};
