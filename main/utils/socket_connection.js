const io = require('socket.io-client')
const {readFolder, readFile, createFolder} = require('./utils/file_system')

const socket = io('http://10.0.0.18:5000', { transports : ['websocket'] })

socket.on('connect', function(){
  console.log("hi")
});

socket.on("operation", async (params) => {
  const {type, path, name} = params
  let outputRes;

  if (type === 'create') {
    outputRes = await createFolder(path, name)
  }

  if (outputRes) {
    const getFolders = await readFolder(path)

    return {data: getFolders, type: 'operation'}
  }
  return false;
})

socket.on('tweet1', async (data) => {
  let getData;

  if (data.type === 'folder') {
    getData = await readFolder(data.path);
  } else {
    getData = await readFile(data.path);
  }
  // console.log(getData)
  socket.emit('returntweet', {data: getData, type: 'read'})
});