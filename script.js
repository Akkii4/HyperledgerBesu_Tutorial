const Migrations = artifacts.require('Migrations');

module.exports = async done => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  const migrations = await Migrations.deployed();
  await migrations.setCompleted(10);
  const data = await migrations.last_completed_migration();
  console.log(data.toString());

  done();
}

