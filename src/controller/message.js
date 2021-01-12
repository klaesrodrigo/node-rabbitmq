const { connChannel, connection } = require('../../config/amqp')
const sendMessage = (req, res) => {

    connChannel().then(channel => {
        const queue = 'hello';
        const msg = req.body.message;

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    })

    res.send('ok!')
}

module.exports = {
    sendMessage
}