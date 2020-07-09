pragma solidity >=0.4.21 <0.7.0;

contract MyStringStore {
    string public myString = "Team Cyrus";
    function set(string memory x) public {
        myString = x;
    }
}