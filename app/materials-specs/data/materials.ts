import { MaterialsData } from '../types';

export const materialCategoryOrder = [
  'all',
  'metal',
  'glass',
  'plastic',
  'composites',
  'stone',
  'tile',
  'rubber',
  'foam'
] as const;

export const materialCategories: MaterialsData = {
  metal: {
    name: 'Metal',
    materials: [
      {
        name: 'Aluminum',
        thicknesses: [
          {
            value: { imperial: '0.031"', metric: '0.8mm' },
            cutSpeed: {
              Sj700: { imperial: '16.2 ipm', metric: '411 mmpm' },
              sj450: { imperial: '12.1 ipm', metric: '307 mmpm' },
              sj150: { imperial: '5.6 ipm', metric: '142 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '1.5 sec',
              sj150: '2 sec'
            }
          },
          {
            value: { imperial: '0.063"', metric: '1.6mm' },
            cutSpeed: {
              Sj700: { imperial: '8.0 ipm', metric: '203 mmpm' },
              sj450: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj150: { imperial: '3.1 ipm', metric: '79 mmpm' }
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: '6 sec'
            }
          },
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '4.0 ipm', metric: '102 mmpm' },
              sj450: { imperial: '3.0 ipm', metric: '76 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '4 sec',
              sj450: '6 sec',
              sj150: null
            }
          },
          {
            value: { imperial: '0.250"', metric: '6.4mm' },
            cutSpeed: {
              Sj700: { imperial: '2.0 ipm', metric: '51 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '8 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Brass',
        thicknesses: [
          {
            value: { imperial: '0.032"', metric: '0.8mm' },
            cutSpeed: {
              Sj700: { imperial: '12.0 ipm', metric: '305 mmpm' },
              sj450: { imperial: '9.0 ipm', metric: '229 mmpm' },
              sj150: { imperial: '4.2 ipm', metric: '107 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '3 sec'
            }
          },
          {
            value: { imperial: '0.063"', metric: '1.6mm' },
            cutSpeed: {
              Sj700: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj450: { imperial: '4.5 ipm', metric: '114 mmpm' },
              sj150: { imperial: '2.1 ipm', metric: '53 mmpm' }
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: '6 sec'
            }
          },
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '3.0 ipm', metric: '76 mmpm' },
              sj450: { imperial: '2.3 ipm', metric: '58 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '4 sec',
              sj450: '6 sec',
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Copper',
        thicknesses: [
          {
            value: { imperial: '0.032"', metric: '0.8mm' },
            cutSpeed: {
              Sj700: { imperial: '10.0 ipm', metric: '254 mmpm' },
              sj450: { imperial: '7.5 ipm', metric: '191 mmpm' },
              sj150: { imperial: '3.5 ipm', metric: '89 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '3 sec'
            }
          },
          {
            value: { imperial: '0.063"', metric: '1.6mm' },
            cutSpeed: {
              Sj700: { imperial: '5.0 ipm', metric: '127 mmpm' },
              sj450: { imperial: '3.8 ipm', metric: '97 mmpm' },
              sj150: { imperial: '1.8 ipm', metric: '46 mmpm' }
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: '6 sec'
            }
          }
        ]
      },
      {
        name: 'Mild Steel',
        thicknesses: [
          {
            value: { imperial: '0.030"', metric: '0.8mm' },
            cutSpeed: {
              Sj700: { imperial: '14.0 ipm', metric: '356 mmpm' },
              sj450: { imperial: '10.5 ipm', metric: '267 mmpm' },
              sj150: { imperial: '4.9 ipm', metric: '124 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '1.5 sec',
              sj150: '2 sec'
            }
          },
          {
            value: { imperial: '0.060"', metric: '1.5mm' },
            cutSpeed: {
              Sj700: { imperial: '7.0 ipm', metric: '178 mmpm' },
              sj450: { imperial: '5.3 ipm', metric: '135 mmpm' },
              sj150: { imperial: '2.5 ipm', metric: '64 mmpm' }
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: '6 sec'
            }
          },
          {
            value: { imperial: '0.120"', metric: '3.0mm' },
            cutSpeed: {
              Sj700: { imperial: '3.5 ipm', metric: '89 mmpm' },
              sj450: { imperial: '2.6 ipm', metric: '66 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '4 sec',
              sj450: '6 sec',
              sj150: null
            }
          },
          {
            value: { imperial: '0.250"', metric: '6.4mm' },
            cutSpeed: {
              Sj700: { imperial: '1.8 ipm', metric: '46 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '8 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Stainless Steel',
        thicknesses: [
          {
            value: { imperial: '0.024"', metric: '0.6mm' },
            cutSpeed: {
              Sj700: { imperial: '12.0 ipm', metric: '305 mmpm' },
              sj450: { imperial: '9.0 ipm', metric: '229 mmpm' },
              sj150: { imperial: '4.2 ipm', metric: '107 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '3 sec'
            }
          },
          {
            value: { imperial: '0.047"', metric: '1.2mm' },
            cutSpeed: {
              Sj700: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj450: { imperial: '4.5 ipm', metric: '114 mmpm' },
              sj150: { imperial: '2.1 ipm', metric: '53 mmpm' }
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: '6 sec'
            }
          },
          {
            value: { imperial: '0.105"', metric: '2.7mm' },
            cutSpeed: {
              Sj700: { imperial: '3.0 ipm', metric: '76 mmpm' },
              sj450: { imperial: '2.3 ipm', metric: '58 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '4 sec',
              sj450: '6 sec',
              sj150: null
            }
          },
          {
            value: { imperial: '0.250"', metric: '6.4mm' },
            cutSpeed: {
              Sj700: { imperial: '1.5 ipm', metric: '38 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '8 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      }
    ]
  },
  glass: {
    name: 'Glass',
    materials: [
      {
        name: 'Borosilicate Glass',
        thicknesses: [
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '4.5 ipm', metric: '114 mmpm' },
              sj450: { imperial: '3.4 ipm', metric: '86 mmpm' },
              sj150: { imperial: '1.6 ipm', metric: '41 mmpm' }
            },
            pierceTime: {
              Sj700: '3 sec',
              sj450: '5 sec',
              sj150: '8 sec'
            }
          }
        ]
      },
      {
        name: 'Soda Lime Glass',
        thicknesses: [
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '5.0 ipm', metric: '127 mmpm' },
              sj450: { imperial: '3.8 ipm', metric: '97 mmpm' },
              sj150: { imperial: '1.8 ipm', metric: '46 mmpm' }
            },
            pierceTime: {
              Sj700: '3 sec',
              sj450: '5 sec',
              sj150: '8 sec'
            }
          }
        ]
      }
    ]
  },
  plastic: {
    name: 'Plastic',
    materials: [
      {
        name: 'Acrylic',
        thicknesses: [
          {
            value: { imperial: '0.118"', metric: '3.0mm' },
            cutSpeed: {
              Sj700: { imperial: '8.0 ipm', metric: '203 mmpm' },
              sj450: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj150: { imperial: '2.8 ipm', metric: '71 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '4 sec'
            }
          },
          {
            value: { imperial: '0.236"', metric: '6.0mm' },
            cutSpeed: {
              Sj700: { imperial: '4.0 ipm', metric: '102 mmpm' },
              sj450: { imperial: '3.0 ipm', metric: '76 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: null
            }
          },
          {
            value: { imperial: '0.472"', metric: '12.0mm' },
            cutSpeed: {
              Sj700: { imperial: '2.0 ipm', metric: '51 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '4 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Polycarbonate',
        thicknesses: [
          {
            value: { imperial: '0.118"', metric: '3.0mm' },
            cutSpeed: {
              Sj700: { imperial: '7.0 ipm', metric: '178 mmpm' },
              sj450: { imperial: '5.3 ipm', metric: '135 mmpm' },
              sj150: { imperial: '2.5 ipm', metric: '64 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '4 sec'
            }
          },
          {
            value: { imperial: '0.236"', metric: '6.0mm' },
            cutSpeed: {
              Sj700: { imperial: '3.5 ipm', metric: '89 mmpm' },
              sj450: { imperial: '2.6 ipm', metric: '66 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: null
            }
          }
        ]
      }
    ]
  },
  composites: {
    name: 'Composites',
    materials: [
      {
        name: 'Carbon Fiber',
        thicknesses: [
          {
            value: { imperial: '0.063"', metric: '1.6mm' },
            cutSpeed: {
              Sj700: { imperial: '10.0 ipm', metric: '254 mmpm' },
              sj450: { imperial: '7.5 ipm', metric: '191 mmpm' },
              sj150: { imperial: '3.5 ipm', metric: '89 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '4 sec'
            }
          },
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '5.0 ipm', metric: '127 mmpm' },
              sj450: { imperial: '3.8 ipm', metric: '97 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '2 sec',
              sj450: '3 sec',
              sj150: null
            }
          }
        ]
      },
      {
        name: 'G10/FR4',
        thicknesses: [
          {
            value: { imperial: '0.062"', metric: '1.6mm' },
            cutSpeed: {
              Sj700: { imperial: '8.0 ipm', metric: '203 mmpm' },
              sj450: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj150: { imperial: '2.8 ipm', metric: '71 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '4 sec'
            }
          }
        ]
      }
    ]
  },
  stone: {
    name: 'Stone',
    materials: [
      {
        name: 'Granite',
        thicknesses: [
          {
            value: { imperial: '0.375"', metric: '9.5mm' },
            cutSpeed: {
              Sj700: { imperial: '1.0 ipm', metric: '25 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '6 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Marble',
        thicknesses: [
          {
            value: { imperial: '0.375"', metric: '9.5mm' },
            cutSpeed: {
              Sj700: { imperial: '1.2 ipm', metric: '30 mmpm' },
              sj450: null,
              sj150: null
            },
            pierceTime: {
              Sj700: '6 sec',
              sj450: null,
              sj150: null
            }
          }
        ]
      }
    ]
  },
  tile: {
    name: 'Tile',
    materials: [
      {
        name: 'Ceramic Tile',
        thicknesses: [
          {
            value: { imperial: '0.236"', metric: '6.0mm' },
            cutSpeed: {
              Sj700: { imperial: '3.0 ipm', metric: '76 mmpm' },
              sj450: { imperial: '2.2 ipm', metric: '56 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '3 sec',
              sj450: '4 sec',
              sj150: null
            }
          }
        ]
      },
      {
        name: 'Porcelain Tile',
        thicknesses: [
          {
            value: { imperial: '0.236"', metric: '6.0mm' },
            cutSpeed: {
              Sj700: { imperial: '2.5 ipm', metric: '64 mmpm' },
              sj450: { imperial: '1.9 ipm', metric: '48 mmpm' },
              sj150: null
            },
            pierceTime: {
              Sj700: '3 sec',
              sj450: '4 sec',
              sj150: null
            }
          }
        ]
      }
    ]
  },
  rubber: {
    name: 'Rubber',
    materials: [
      {
        name: 'Natural Rubber',
        thicknesses: [
          {
            value: { imperial: '0.125"', metric: '3.2mm' },
            cutSpeed: {
              Sj700: { imperial: '6.0 ipm', metric: '152 mmpm' },
              sj450: { imperial: '4.5 ipm', metric: '114 mmpm' },
              sj150: { imperial: '2.1 ipm', metric: '53 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '2 sec',
              sj150: '4 sec'
            }
          }
        ]
      }
    ]
  },
  foam: {
    name: 'Foam',
    materials: [
      {
        name: 'EVA Foam',
        thicknesses: [
          {
            value: { imperial: '0.236"', metric: '6.0mm' },
            cutSpeed: {
              Sj700: { imperial: '12.0 ipm', metric: '305 mmpm' },
              sj450: { imperial: '9.0 ipm', metric: '229 mmpm' },
              sj150: { imperial: '4.2 ipm', metric: '107 mmpm' }
            },
            pierceTime: {
              Sj700: '1 sec',
              sj450: '1 sec',
              sj150: '2 sec'
            }
          }
        ]
      }
    ]
  }
};