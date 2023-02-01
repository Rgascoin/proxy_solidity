// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProxyLearn is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ProxyLearn", "PRXL") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://i0.wp.com/blog.openzeppelin.com/wp-content/uploads/2019/06/bg_dark_4.png?w=1680&ssl=1";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function getVersion() public pure returns (uint8) {
        return 1;
    }
}