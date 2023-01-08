const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

const port = normalizePort(process.env.PORT || '3000')
app.set('port',port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log('rodando na porta ' + port)

//funcao do express para normalizar porta
function normalizePort(val){
  const port = parseInt(val,10)

  if(isNaN(port)){
    return val
  }
  
  if(port>=0){
    return port
  }
  return false
}
//funcao do express para gerenciar erros de servidor, verificar documentacao para lista de erros
function onError(error){
  if (error.syscall !== 'listen'){
    throw error
  }

  const bind = typeof port === 'strig' ?
    'Pipe' + port :
    'Port' + port 

  switch (error.code){
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}
//debug
function onListening(){
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port
  debug ('Listening on ' + bind)
}
