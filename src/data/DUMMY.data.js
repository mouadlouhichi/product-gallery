const DUMMY = [
  {
    'productId': 1,
    'productName': 'chocolate Ilise',
    'productImage':
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'productPrice': '234.67',
    'productSalePrice': '234.67',
    'rating': 4,
    'categories': ['workspace'],
    'description':
      'Amet mollit pariatur non officia tempor mollit minim occaecat Lorem ex sint dolor.',
  },
  {
    'productId': 1001,
    'productName': 'salmon Delinda',
    'productImage':
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    'productStock': 66,
    'productPrice': '429.62',
    'productSalePrice': '206.46',
    'rating': 2,
    'categories': ['dining room', 'workspace'],
    'description':
      'Irure in aliquip minim ullamco cillum elit quis magna in ad voluptate.',
  },
  {
    'productId': 1002,
    'productName': 'chocolate Dagmar',
    'productImage':
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'productStock': 58,
    'productPrice': '269.67',
    'productSalePrice': '269.67',
    'rating': 4,
    'categories': ['workspace'],
    'description':
      'Reprehenderit occaecat ad sint nostrud commodo labore nostrud magna proident sint esse.',
  },
  {
    'productId': 1003,
    'productName': 'plum Mattie',
    'productImage':
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
    'productStock': 74,
    'productPrice': '328.45',
    'productSalePrice': '328.45',
    'rating': 2,
    'categories': ['bedroom', 'kitchen set'],
    'description':
      'Id consequat aute enim dolor ullamco reprehenderit dolor ut culpa Lorem non.',
  },
  {
    'productId': 1004,
    'productName': 'tan Nelia',
    'productImage':
      'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    'productStock': 85,
    'productPrice': '273.36',
    'productSalePrice': '93.98',
    'rating': 4,
    'categories': ['dining room', 'workspace'],
    'description':
      'Laboris nulla minim sunt consectetur ex proident incididunt.',
  },
  {
    'productId': 1005,
    'productName': 'bronze Misti',
    'productImage':
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
    'productStock': 24,
    'productPrice': '346.96',
    'productSalePrice': '346.96',
    'rating': 3,
    'categories': ['bedroom', 'kitchen set', 'living room'],
    'description': 'Cillum Lorem fugiat fugiat dolore.',
  },
  {
    'productId': 1006,
    'productName': 'rose Nesta',
    'productImage':
      'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    'productStock': 34,
    'productPrice': '278.85',
    'productSalePrice': '278.85',
    'rating': 1,
    'categories': ['dining room', 'workspace'],
    'description':
      'Consequat labore dolore est excepteur et incididunt incididunt ea excepteur ipsum Lorem enim.',
  },
  {
    'productId': 1007,
    'productName': 'peach Georgiana',
    'productImage':
      'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'productStock': 55,
    'productPrice': '155.06',
    'productSalePrice': '155.06',
    'rating': 4,
    'categories': ['bedroom', 'kitchen set'],
    'description': 'Laborum adipisicing reprehenderit anim dolore est.',
  },
  {
    'productId': 1008,
    'productName': 'sapphire Petronella',
    'productImage':
      'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'productStock': 36,
    'productPrice': '441.59',
    'productSalePrice': '441.59',
    'rating': 5,
    'categories': ['bedroom', 'kitchen set'],
    'description':
      'Non fugiat ipsum sit officia cillum nulla mollit Lorem ex est dolor.',
  },
  {
    'productId': 1009,
    'productName': 'indigo Fiona',
    'productImage':
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    'productStock': 49,
    'productPrice': '407.21',
    'productSalePrice': '44.24',
    'rating': 1,
    'categories': ['workspace'],
    'description': 'Ipsum excepteur laborum tempor aliqua laborum ea ipsum.',
  },
  {
    'productId': 1010,
    'productName': 'plum Veriee',
    'productImage':
      'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
    'productStock': 12,
    'productPrice': '421.21',
    'productSalePrice': '421.21',
    'rating': 4,
    'categories': ['living room', 'dining room'],
    'description':
      'Ea Lorem minim officia ad ipsum incididunt et dolor occaecat Lorem non.',
  },
  {
    'productId': 1011,
    'productName': 'red Lissy',
    'productImage':
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    'productStock': 45,
    'productPrice': '187.19',
    'productSalePrice': '88.24',
    'rating': 2,
    'categories': ['dining room'],
    'description': 'Quis sit est ad occaecat nulla consectetur.',
  },
  {
    'productId': 1012,
    'productName': 'copper Dionne',
    'productImage':
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    'productStock': 27,
    'productPrice': '203.28',
    'productSalePrice': '44.42',
    'rating': 3,
    'categories': ['bedroom', 'kitchen set', 'living room'],
    'description':
      'Velit in aliqua anim occaecat ut laborum commodo nostrud ipsum duis sunt officia deserunt.',
  },
  {
    'productId': 1013,
    'productName': 'indigo Lizzie',
    'productImage':
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'productStock': 97,
    'productPrice': '282.22',
    'productSalePrice': '96.37',
    'rating': 4,
    'categories': ['living room', 'dining room', 'workspace'],
    'description':
      'Cupidatat reprehenderit esse aute excepteur laboris incididunt consectetur exercitation cillum cillum sit esse.',
  },
  {
    'productId': 1091,
    'productName': 'indigo Steffie',
    'productImage':
      'https://images.unsplash.com/photo-1555487505-8603a1a69755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'productStock': 3,
    'productPrice': '18201.33',
    'productSalePrice': '18201.33',
    'categories': ['living room', 'dining room', 'workspace'],
    'description':
      'Cupidatat reprehenderit esse aute excepteur laboris incididunt consectetur exercitation cillum cillum sit esse.',

    'rating': 4,
  },
  {
    'productId': 1092,
    'productName': 'ivory Ofilia',
    'productImage':
      'https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'productStock': 74,
    'productPrice': '49212.53',
    'productSalePrice': '13287.38',
    'rating': 4,
    'categories': ['living room', 'dining room', 'workspace'],
    'description':
      'Cupidatat reprehenderit esse aute excepteur laboris incididunt consectetur exercitation cillum cillum sit esse.',
  },
];

export default DUMMY;
