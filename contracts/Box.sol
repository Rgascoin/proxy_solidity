// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Box {
    uint256 private value;

    event ValueUpdated(uint256 _newValue, address indexed _caller);

    function store(uint256 _newValue) public {
        value = _newValue;
        emit ValueUpdated(_newValue, msg.sender);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }
}