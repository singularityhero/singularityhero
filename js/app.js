"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  getMinted();
  $(function () {
    $('.accordion__item .accordion__title-wrap').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $('.accordion__content').slideUp(400);
        $('.accordion__item .accordion__title-wrap').removeClass('active');
        $('.accordion__item').removeClass('active');
      }

      $this.toggleClass('active');
      $this.parent().toggleClass('active');
      $this.next().slideToggle();
    });
  });
  var $root = $('html, body');
  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $('.js-burger').removeClass('active');
    $('.js-nav').removeClass('active');
    $('body').removeClass('overflow');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
}); // timer
// setInterval(function () {
//   var date = new Date()
//   var format = [
//     ('0' + date.getHours()).substr(-2),
//     ('0' + date.getMinutes()).substr(-2),
//     ('0' + date.getSeconds()).substr(-2),
//   ].join(':')
//   document.getElementById('timer').innerHTML = format
// }, 500)
// burger

if (document.querySelector('.js-burger')) {
  var BURGER = document.querySelector('.js-burger');
  var NAV = document.querySelector('.js-nav');
  var BODY = document.querySelector('body');
  var OVERFLOW = 'overflow';
  var ACTIVE = 'active';
  BURGER.addEventListener('click', function () {
    BURGER.classList.toggle(ACTIVE);
    NAV.classList.toggle(ACTIVE);
    BODY.classList.toggle(OVERFLOW);
  });
} // WEB 3


$(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
  return regeneratorRuntime.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return tryConnect();

        case 2:
          $(function () {
            $('.connect-button').on('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return tryConnect();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
            $('.mint-button').on('click', /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val().toString();

                        if (totalToMint) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 4:
                        _context2.next = 6;
                        return mint(totalToMint);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());
            $('.input-wrap-right').on('click', /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint) {
                          totalToMint = 1;
                        } else if (+totalToMint + 1 > 25) {
                          totalToMint = 25;
                        } else totalToMint++;

                        $('.mint-input').val(+totalToMint);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
            $('.input-wrap-left').on('click', /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint || +totalToMint - 1 < 1) {
                          totalToMint = 1;
                        } else totalToMint--;

                        $('.mint-input').val(+totalToMint);

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }());
          });
          $('.mint-input').on('input', /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
              var totalToMint;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      e.preventDefault();
                      totalToMint = $('.mint-input').val();

                      if (totalToMint < 1) {
                        $('.mint-input').val(1);
                      }

                      if (totalToMint > 25) {
                        $('.mint-input').val(25);
                      }

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            return function (_x5) {
              return _ref6.apply(this, arguments);
            };
          }());

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
})));

var tryConnect = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var account, accountEllipsis;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return connectMetamask();

          case 2:
            account = _context7.sent;

            if (account) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt("return");

          case 5:
            accountEllipsis = account ? "".concat(account.substring(0, 5), "...").concat(account.substring(account.length - 5)) : null;
            $('.connect-button').text(accountEllipsis);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function tryConnect() {
    return _ref7.apply(this, arguments);
  };
}();

function getAccounts() {
  return _getAccounts.apply(this, arguments);
}

function _getAccounts() {
  _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var _window, _window$ethereum, acc;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (window.ethereum) {
              _context8.next = 2;
              break;
            }

            return _context8.abrupt("return");

          case 2:
            _context8.prev = 2;
            _context8.next = 5;
            return (_window = window) === null || _window === void 0 ? void 0 : (_window$ethereum = _window.ethereum) === null || _window$ethereum === void 0 ? void 0 : _window$ethereum.request({
              method: "eth_requestAccounts"
            });

          case 5:
            acc = _context8.sent;
            return _context8.abrupt("return", acc);

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](2);
            return _context8.abrupt("return", []);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 9]]);
  }));
  return _getAccounts.apply(this, arguments);
}

function connectMetamask() {
  return _connectMetamask.apply(this, arguments);
}

function _connectMetamask() {
  _connectMetamask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var result, acc;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!window.ethereum) {
              _context9.next = 19;
              break;
            }

            _context9.prev = 1;
            _context9.next = 4;
            return getAccounts();

          case 4:
            result = _context9.sent;

            if (!(Array.isArray(result) && result.length > 0)) {
              _context9.next = 10;
              break;
            }

            acc = result[0];
            return _context9.abrupt("return", acc);

          case 10:
            return _context9.abrupt("return", false);

          case 11:
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", false);

          case 17:
            _context9.next = 20;
            break;

          case 19:
            return _context9.abrupt("return", false);

          case 20:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));
  return _connectMetamask.apply(this, arguments);
}

var cost = "67000000000000000";
var contractAddress = "0xa914ac9eda58c6ecd2e9c525555d49675da5d6a7";

var getMinted = function getMinted() {
  var web3 = new Web3(new Web3.providers.HttpProvider( // "https://rinkeby.infura.io/v3/2d4f413e764740ef89d5596033efec3f"
  "https://mainnet.infura.io/v3/f63b077506c14876b59282a00b9c2fed"));
  var contract = new web3.eth.Contract(abi, contractAddress);
  contract.methods.totalSupply().call().then(function (result) {
    console.log(result);
    $('.total-minted').text("".concat(result, " / 10000"));
  });
  setInterval(function () {
    contract.methods.totalSupply().call().then(function (result) {
      console.log(result);
      $('.total-minted').text("".concat(result, " / 10000"));
    });
  }, 10000);
};

function mint(_x6) {
  return _mint.apply(this, arguments);
}

function _mint() {
  _mint = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(totalToMint) {
    var web3, contract, transactionParameters, _window2, _window2$ethereum;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (window.ethereum) {
              _context10.next = 2;
              break;
            }

            return _context10.abrupt("return");

          case 2:
            web3 = new Web3(new Web3.providers.HttpProvider( // "https://rinkeby.infura.io/v3/2d4f413e764740ef89d5596033efec3f"
            "https://mainnet.infura.io/v3/f63b077506c14876b59282a00b9c2fed")); // eslint-disable-next-line @typescript-eslint/no-unused-vars

            contract = new web3.eth.Contract(abi, contractAddress);
            _context10.t0 = contractAddress;
            _context10.next = 7;
            return getAccounts();

          case 7:
            _context10.t1 = _context10.sent[0];
            _context10.t2 = bigInt(cost).multiply(bigInt(totalToMint)).toString(16);
            _context10.t3 = contract.methods.mintHeroes(totalToMint).encodeABI();
            transactionParameters = {
              to: _context10.t0,
              from: _context10.t1,
              value: _context10.t2,
              data: _context10.t3
            };
            _context10.prev = 11;
            _context10.next = 14;
            return (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$ethereum = _window2.ethereum) === null || _window2$ethereum === void 0 ? void 0 : _window2$ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters]
            });

          case 14:
            _context10.next = 19;
            break;

          case 16:
            _context10.prev = 16;
            _context10.t4 = _context10["catch"](11);
            console.log(_context10.t4);

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[11, 16]]);
  }));
  return _mint.apply(this, arguments);
}

var abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipSaleState",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "numberOfTokens",
    "type": "uint256"
  }],
  "name": "mintHeroes",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "reserveHeroes",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }, {
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "baseURI",
    "type": "string"
  }],
  "name": "setBaseURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "baseURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "heroesPrice",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "MAX_HEROES",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "maxHeroesPurchase",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "PROV",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "saleIsActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenOfOwnerByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}];