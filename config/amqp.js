const connection = () => require('amqplib').connect("amqp://localhost")

const connChannel = () => connection().then(conn => conn.createChannel())

module.exports = { 
    connection,
    connChannel
}