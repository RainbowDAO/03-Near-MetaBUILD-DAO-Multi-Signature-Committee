# Getting Started
## **Dependencies**

- Linux , Mac or Windows
- node ≥ 14
- truffle v5.4.22
## test-net-contract

test-network:aurora

### address

#### DaoFactory
0x829C1A191f33C02a92711665c4348c7d933E757A
#### ERC20Factory
0x20613AbF20ab1Fb3eE2200471E02A6fafCbddc84



## **Installing**

```bash
git clone https://github.com/RainbowDAO/03-Near-MetaBUILD-DAO-Multi-Signature-Committee.git
cd 03-Near-MetaBUILD-DAO-Multi-Signature-Committee/
npm install
```

## **Prepare some ETH**
You may need 1 ~ 3 ETH in your wallet.


## **Compile  Contracts**
```cd Solidity-version-contract-for-Aurora```

```truffle compile```
## **Deploy  Contracts**


You will deploy 2 factory contracts
- ERC20Factory
- DaoFactory

To deploy the contracts,First write your private key in the .secret ,second open truffle-config.js . Then change the defaultNetwork accordingly. Then run ```truffle migrate --network mainnet```
,or deploy on your own network,run ```truffle migrate --network your network```



