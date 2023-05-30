export const SAMPLE_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"_state","type":"uint256"},
				{"name":"root_","type":"address"},
				{"name":"codeNft","type":"cell"},
				{"name":"codeIndex","type":"cell"},
				{"name":"codeIndexBasis","type":"cell"},
				{"name":"json","type":"string"}
			],
			"outputs": [
			]
		},
		{
			"name": "mint",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "onDeployWallet",
			"inputs": [
				{"name":"_wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAcceptTokensTransfer",
			"inputs": [
				{"name":"tokenRoot","type":"address"},
				{"name":"amount","type":"uint128"},
				{"name":"sender","type":"address"},
				{"name":"senderWallet","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "addSessionKeys",
			"inputs": [
				{"name":"hashes","type":"uint256[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "setStateBySessionKey",
			"inputs": [
				{"name":"key","type":"string"},
				{"name":"_state","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setStateByOwner",
			"inputs": [
				{"name":"_state","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setStateByAnyone",
			"inputs": [
				{"name":"_state","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "getDetails",
			"inputs": [
			],
			"outputs": [
				{"name":"state","type":"uint256"}
			]
		},
		{
			"name": "indexBasisCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"code","type":"cell"}
			]
		},
		{
			"name": "indexBasisCodeHash",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"hash","type":"uint256"}
			]
		},
		{
			"name": "resolveIndexBasis",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"indexBasis","type":"address"}
			]
		},
		{
			"name": "indexCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"code","type":"cell"}
			]
		},
		{
			"name": "indexCodeHash",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"hash","type":"uint256"}
			]
		},
		{
			"name": "getJson",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"json","type":"string"}
			]
		},
		{
			"name": "totalSupply",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"count","type":"uint128"}
			]
		},
		{
			"name": "nftCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"code","type":"cell"}
			]
		},
		{
			"name": "nftCodeHash",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"codeHash","type":"uint256"}
			]
		},
		{
			"name": "nftAddress",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"id","type":"uint256"}
			],
			"outputs": [
				{"name":"nft","type":"address"}
			]
		},
		{
			"name": "supportsInterface",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"interfaceID","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "state",
			"inputs": [
			],
			"outputs": [
				{"name":"state","type":"uint256"}
			]
		},
		{
			"name": "sessions",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"created","type":"uint64"}],"name":"sessions","type":"map(uint256,tuple)"}
			]
		}
	],
	"data": [
		{"key":1,"name":"nonce","type":"uint256"},
		{"key":2,"name":"owner","type":"uint256"}
	],
	"events": [
		{
			"name": "StateChange",
			"inputs": [
				{"name":"_state","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "ThankYou",
			"inputs": [
				{"name":"sender","type":"address"},
				{"name":"amount","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "NewWallet",
			"inputs": [
				{"name":"some","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "NftCreated",
			"inputs": [
				{"name":"id","type":"uint256"},
				{"name":"nft","type":"address"},
				{"name":"owner","type":"address"},
				{"name":"manager","type":"address"},
				{"name":"creator","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "NftBurned",
			"inputs": [
				{"name":"id","type":"uint256"},
				{"name":"nft","type":"address"},
				{"name":"owner","type":"address"},
				{"name":"manager","type":"address"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"_supportedInterfaces","type":"optional(cell)"},
		{"name":"_codeNft","type":"cell"},
		{"name":"_totalSupply","type":"uint128"},
		{"name":"_json","type":"string"},
		{"name":"_codeIndex","type":"cell"},
		{"name":"_codeIndexBasis","type":"cell"},
		{"name":"_indexDeployValue","type":"uint128"},
		{"name":"_indexDestroyValue","type":"uint128"},
		{"name":"_deployIndexBasisValue","type":"uint128"},
		{"name":"_remainOnNft","type":"uint128"},
		{"name":"nonce","type":"uint256"},
		{"name":"owner","type":"uint256"},
		{"name":"root","type":"address"},
		{"name":"wallet","type":"address"},
		{"name":"state","type":"uint256"},
		{"components":[{"name":"created","type":"uint64"}],"name":"sessions","type":"map(uint256,tuple)"}
	]
} as const;