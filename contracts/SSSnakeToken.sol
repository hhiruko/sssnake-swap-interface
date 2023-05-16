// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SSSnakeToken is ERC20 {
  constructor() ERC20("SSSnake Token", "SSS") {
    _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
  }
}