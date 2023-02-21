module.exports = function(RED) {
    function QrPdf(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        console.log("Inicilizando mi plugin.");

        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("qr-pdf",QrPdf);
}