const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "frontend/src/contracts"),
  networks: {
    //to use custom networks, type: truffle console --network dev
    dev: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "0.0.0.0",
      port: 10000,
      network_id: "5777"
    }
  }
};
