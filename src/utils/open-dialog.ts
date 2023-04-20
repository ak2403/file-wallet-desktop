export const openDialogWindow = async () => {
  // @ts-ignore
  const { canceled, filePaths = [] } = await window.bridge.dialog('showOpenDialog', {
    title: 'Select destination folder',
    buttonLabel: 'select path',
    properties: ['openDirectory'],
  });

  return { canceled, filePath: filePaths[0] };
};
