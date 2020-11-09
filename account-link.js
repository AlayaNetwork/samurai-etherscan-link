const prefixForNetwork = require('./prefix-for-network')

module.exports = function (address, network) {
  const net = parseInt(network)
  /*const prefix = prefixForNetwork(network)
  if (prefix !== '' && prefix.startsWith('alaya')) {
    prefix = 'rinkeby'
  }*/
  if (net === 201018) {
    return 'https://scan.alaya.network/address-detail?address=' + address
  } else {
    return 'https://scanbeta.alaya.network/address-detail?address=' + address
  }
}

