# SSSnakeSwap Exchange

<b>Certificate Owner Address: 0x1Ddb100BE9b37465a8ad2F4aBAe2159F39ec6e62</b>


<b>Contract Addresses:</b>

WBNB: 0x4D5aE0BcB98aa75b95a5155c9d82aC096c6381a9\
BUSD: 0x5b95468E0fB5D92421ABA1eB7b57ffFB9CAE8b25\
SSS: 0xF63acf39D2992adC4849ee3898598e4A593F9332

Factory: 0xf926EEc8551E6aBfF9B114E2b83877FC48961F22\
INIT_CODE_HASH: 0xcc1cd9597ab332c01fe4134170f9df06e8343758529927f903b2a47af3ca3e8a\
Router01: 0x981d5b5374698A322CcDF820763C47BA01EBdEe5\
Router: 0xEA0A81D12eE15c163420bB51C8145Fb05cAbbB13



<b>Update the Project:</b>
    <ul>
      <li>Go to the file "<b>src/constants/index.ts</b>", update the value for <b>ROUTER_ADDRESS</b>.</li>
      <li>Go to the file "<b>src/state/swap/hooks.ts</b>", update the values.</li>
      <li>Open the 4 files "<b>node_modules/@pancakeswap-libs/sdk/dist/constants.d.ts</b>", "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.development.js</b>" and "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.production.min.js</b>", <b>node_modules/@pancakeswap-libs/sdk/dist/sdk.esm.js</b>", update the values for two variables: FACTORY_ADDRESS and INIT_CODE_HASH.</li>
      <li>update the WBNB address in 3 files "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.development.js</b>", <b>node_modules/@pancakeswap-libs/sdk/dist/sdk.esm.js</b>" and "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.production.min.js</b>".</li>
    </ul>

