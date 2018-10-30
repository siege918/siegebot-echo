module.exports = {
	echo: echo
}

function echo(message, config)
{
	return new Promise(function(resolve) {
		echoPromise(message, config, resolve);
	});
}

function echoPromise(message, config, callback) {
    message.channel.send(config.text);
    callback(config.text);
}