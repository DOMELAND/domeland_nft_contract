# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

…or create a new repository on the command line
echo "# domeland_nft_contract" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DOMELAND/domeland_nft_contract.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/DOMELAND/domeland_nft_contract.git
git branch -M main
git push -u origin main

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


# how to deploy hardhat arbitrum and verify

https://docs.arbitrum.io/for-devs/quickstart-solidity-hardhat    #quick deploy

https://blog.chain.link/how-to-verify-smart-contract-on-etherscan-hardhat/      # hardhat ethscan cli verify、

https://hardhat.org/hardhat-runner/docs/guides/deploying.    


https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify

https://betterprogramming.pub/how-to-setup-your-hardhat-environment-af70b39c16d1.  #  auto verify

https://hicoldcat.com/posts/blockchain/how-to-become-a-web3-developer-in-2023/      # solidity development refer


https://docs.arbitrum.io/for-devs/quickstart-solidity-hardhat


# cli flow

npm install @openzeppelin/contracts
npm install --save-dev @nomicfoundation/hardhat-toolbox

#### // modify hardhat.config.ts
npx hardhat compile
npx hardhat run scripts/deploy.js --network arbitrumOne

#### // npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1”.  

npx hardhat verify --network arbitrumOne 0x0E5B4f50b4c09caF0441C0fe77E2b65xxxxxxx

