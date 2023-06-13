// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Token{
    string public name = "FLAME Original Token";
    string public symbol = "FOT";

    uint256 public totalSupply = 1000000;
    
    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough token");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }


}