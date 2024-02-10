module.exports = [
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:03.975Z",
        "ttl": "P1M",
        "bpp_id": "ref-app-seller-staging-v2.ondc.org",
        "bpp_uri": "https://ref-app-seller-staging-v2.ondc.org"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "Axai Store",
            "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png",
            "short_desc": "Axai Store",
            "long_desc": "Axai Store",
            "images": [
              "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png"
            ]
          },
          "bpp/providers": [
            {
              "id": "545016d9-ed19-4c02-833d-f4270436ffc0",
              "descriptor": {
                "name": "Axai Store",
                "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png",
                "short_desc": "Axai Store",
                "long_desc": "Axai Store",
                "images": [
                  "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png"
                ]
              },
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:03.975Z"
              },
              "locations": [
                {
                  "id": "65408f51f1960f251e81774a",
                  "gps": "12.90936352753578,77.64333431484344",
                  "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "area_code": "560102",
                    "street": "HSR Layout",
                    "locality": "NA"
                  },
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:03.975Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        
                      ]
                    },
                    "range": {
                      "start": "0000",
                      "end": "2300"
                    }
                  },
                  "circle": {
                    "gps": "12.90936352753578,77.64333431484344",
                    "radius": {
                      "unit": "km",
                      "value": "10"
                    }
                  }
                }
              ],
              "ttl": "PT24H",
              "categories": [
                
              ],
              "items": [
                {
                  "id": "3a870428-8b92-428b-9747-b4e92eeb132b",
                  "time": {
                    "label": "enable",
                    "timestamp": "2023-11-30T12:41:32.342Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Oranges",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/4a0ea968-cabe-4623-85ec-34136d98fb66/product_image/orange_1.jpeg",
                    "short_desc": "Sourced fresh from farm",
                    "long_desc": "Sourced fresh from farm",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/4a0ea968-cabe-4623-85ec-34136d98fb66/product_image/orange_1.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/6251a95a-f289-4f4a-9a73-c5c501ede4a0/product_image/orange_2.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/110c03e8-10ee-4ef4-943f-9c86e088c107/product_image/orange_3.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "gram",
                        "value": "500"
                      }
                    },
                    "available": {
                      "count": "91"
                    },
                    "maximum": {
                      "count": "2"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "230",
                    "maximum_value": "230"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Fruits and Vegetables",
                  "location_id": "65408f51f1960f251e81774a",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": false,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT1H",
                  "@ondc/org/contact_details_consumer_care": "Axai Store,yash.bhardwaj5040@gmail.com,9546563568",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "NA",
                    "manufacturer_or_packer_address": "NA",
                    "common_or_generic_name_of_commodity": "NA",
                    "month_year_of_manufacture_packing_import": "NA"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ],
                  "@ondc/org/mandatory_reqs_veggies_fruits": {
                    "net_quantity": "undefined"
                  }
                }
              ],
              "fulfillments": [
                {
                  "contact": {
                    "phone": "9546563568",
                    "email": "yash.bhardwaj5040@gmail.com"
                  }
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65408f51f1960f251e81774a"
                    },
                    {
                      "code": "category",
                      "value": "Fruits and Vegetables"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "created_at": "2024-02-06 11:20:03.982556"
    },
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:03.897Z",
        "ttl": "P1M",
        "bpp_id": "ref-app-seller-staging-v2.ondc.org",
        "bpp_uri": "https://ref-app-seller-staging-v2.ondc.org"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "Axai Store",
            "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png",
            "short_desc": "Axai Store",
            "long_desc": "Axai Store",
            "images": [
              "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png"
            ]
          },
          "bpp/providers": [
            {
              "id": "545016d9-ed19-4c02-833d-f4270436ffc0",
              "descriptor": {
                "name": "Axai Store",
                "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png",
                "short_desc": "Axai Store",
                "long_desc": "Axai Store",
                "images": [
                  "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/b3fa428d-cc87-4035-b069-19f3dc282e2f/logo/imgonline-com-ua-shape-doGhSIiaJopa.png"
                ]
              },
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:03.897Z"
              },
              "locations": [
                {
                  "id": "65408f51f1960f251e81774a",
                  "gps": "12.90936352753578,77.64333431484344",
                  "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "area_code": "560102",
                    "street": "HSR Layout",
                    "locality": "NA"
                  },
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:03.897Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        
                      ]
                    },
                    "range": {
                      "start": "0000",
                      "end": "2300"
                    }
                  },
                  "circle": {
                    "gps": "12.90936352753578,77.64333431484344",
                    "radius": {
                      "unit": "km",
                      "value": "10"
                    }
                  }
                }
              ],
              "ttl": "PT24H",
              "categories": [
                
              ],
              "items": [
                {
                  "id": "3a870428-8b92-428b-9747-b4e92eeb132b",
                  "time": {
                    "label": "enable",
                    "timestamp": "2023-11-30T12:41:32.342Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Oranges",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/4a0ea968-cabe-4623-85ec-34136d98fb66/product_image/orange_1.jpeg",
                    "short_desc": "Sourced fresh from farm",
                    "long_desc": "Sourced fresh from farm",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/4a0ea968-cabe-4623-85ec-34136d98fb66/product_image/orange_1.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/6251a95a-f289-4f4a-9a73-c5c501ede4a0/product_image/orange_2.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/110c03e8-10ee-4ef4-943f-9c86e088c107/product_image/orange_3.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "gram",
                        "value": "500"
                      }
                    },
                    "available": {
                      "count": "91"
                    },
                    "maximum": {
                      "count": "2"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "230",
                    "maximum_value": "230"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Fruits and Vegetables",
                  "location_id": "65408f51f1960f251e81774a",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": false,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT1H",
                  "@ondc/org/contact_details_consumer_care": "Axai Store,yash.bhardwaj5040@gmail.com,9546563568",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "NA",
                    "manufacturer_or_packer_address": "NA",
                    "common_or_generic_name_of_commodity": "NA",
                    "month_year_of_manufacture_packing_import": "NA"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ],
                  "@ondc/org/mandatory_reqs_veggies_fruits": {
                    "net_quantity": "undefined"
                  }
                }
              ],
              "fulfillments": [
                {
                  "contact": {
                    "phone": "9546563568",
                    "email": "yash.bhardwaj5040@gmail.com"
                  }
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65408f51f1960f251e81774a"
                    },
                    {
                      "code": "category",
                      "value": "Fruits and Vegetables"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "created_at": "2024-02-06 11:20:03.909606"
    },
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:03.897Z",
        "ttl": "P1M",
        "bpp_id": "ref-app-seller-staging-v2.ondc.org",
        "bpp_uri": "https://ref-app-seller-staging-v2.ondc.org"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "foods",
            "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg",
            "short_desc": "foods",
            "long_desc": "foods",
            "images": [
              "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg"
            ]
          },
          "bpp/providers": [
            {
              "id": "f0ab175c-55b7-45f3-b59a-d17c546c229e",
              "descriptor": {
                "name": "foods",
                "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg",
                "short_desc": "foods",
                "long_desc": "foods",
                "images": [
                  "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg"
                ]
              },
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:03.897Z"
              },
              "locations": [
                {
                  "id": "6538f678f1960f251e2ba9bf",
                  "gps": "12.981244978482332,77.59499381107162",
                  "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "area_code": "560001",
                    "street": "Gandhi Nagar",
                    "locality": "NA"
                  },
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:03.897Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        
                      ]
                    },
                    "range": {
                      "start": "0000",
                      "end": "2300"
                    }
                  },
                  "circle": {
                    "gps": "12.981244978482332,77.59499381107162",
                    "radius": {
                      "unit": "km",
                      "value": "100"
                    }
                  }
                }
              ],
              "ttl": "PT24H",
              "categories": [
                
              ],
              "items": [
                {
                  "id": "b0f3b7c4-2bf8-44c5-a722-d3dcb48c2335",
                  "time": {
                    "label": "enable",
                    "timestamp": "2023-12-05T10:15:27.854Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Corn Chaat",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/7f7d81de-46d0-4e62-b0ac-e359ecc9ebd9/product_image/chaat.jpeg",
                    "short_desc": "Corn Chaat",
                    "long_desc": "Corn Chaat",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/7f7d81de-46d0-4e62-b0ac-e359ecc9ebd9/product_image/chaat.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/ffe1c502-16f4-44b3-a755-87e45537e9ac/product_image/dahi-papdi-chaat-01.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/5d745ecc-5aec-49aa-97f5-fd92feb97f24/product_image/papdi-chaat-2.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "unit",
                        "value": "gg"
                      }
                    },
                    "available": {
                      "count": "2"
                    },
                    "maximum": {
                      "count": "2"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "100",
                    "maximum_value": "100"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Masala & Seasoning",
                  "location_id": "6538f678f1960f251e2ba9bf",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": false,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT7H",
                  "@ondc/org/contact_details_consumer_care": "foods,foods@mailinator.com,8989898989",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "ggg",
                    "manufacturer_or_packer_address": "sss",
                    "common_or_generic_name_of_commodity": "ssss",
                    "month_year_of_manufacture_packing_import": "08/2022"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                }
              ],
              "fulfillments": [
                {
                  "contact": {
                    "phone": "8989898989",
                    "email": "foods@mailinator.com"
                  }
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "6538f678f1960f251e2ba9bf"
                    },
                    {
                      "code": "category",
                      "value": "Masala & Seasoning"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "created_at": "2024-02-06 11:20:04.986061"
    },
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:03.975Z",
        "ttl": "P1M",
        "bpp_id": "ref-app-seller-staging-v2.ondc.org",
        "bpp_uri": "https://ref-app-seller-staging-v2.ondc.org"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "foods",
            "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg",
            "short_desc": "foods",
            "long_desc": "foods",
            "images": [
              "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg"
            ]
          },
          "bpp/providers": [
            {
              "id": "f0ab175c-55b7-45f3-b59a-d17c546c229e",
              "descriptor": {
                "name": "foods",
                "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg",
                "short_desc": "foods",
                "long_desc": "foods",
                "images": [
                  "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/460f8bc4-898d-47c1-87c4-0e0b92b08e46/logo/chaat.jpeg"
                ]
              },
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:03.975Z"
              },
              "locations": [
                {
                  "id": "6538f678f1960f251e2ba9bf",
                  "gps": "12.981244978482332,77.59499381107162",
                  "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "area_code": "560001",
                    "street": "Gandhi Nagar",
                    "locality": "NA"
                  },
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:03.975Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        
                      ]
                    },
                    "range": {
                      "start": "0000",
                      "end": "2300"
                    }
                  },
                  "circle": {
                    "gps": "12.981244978482332,77.59499381107162",
                    "radius": {
                      "unit": "km",
                      "value": "100"
                    }
                  }
                }
              ],
              "ttl": "PT24H",
              "categories": [
                
              ],
              "items": [
                {
                  "id": "b0f3b7c4-2bf8-44c5-a722-d3dcb48c2335",
                  "time": {
                    "label": "enable",
                    "timestamp": "2023-12-05T10:15:27.854Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Corn Chaat",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/7f7d81de-46d0-4e62-b0ac-e359ecc9ebd9/product_image/chaat.jpeg",
                    "short_desc": "Corn Chaat",
                    "long_desc": "Corn Chaat",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/7f7d81de-46d0-4e62-b0ac-e359ecc9ebd9/product_image/chaat.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/ffe1c502-16f4-44b3-a755-87e45537e9ac/product_image/dahi-papdi-chaat-01.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/5d745ecc-5aec-49aa-97f5-fd92feb97f24/product_image/papdi-chaat-2.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "unit",
                        "value": "gg"
                      }
                    },
                    "available": {
                      "count": "2"
                    },
                    "maximum": {
                      "count": "2"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "100",
                    "maximum_value": "100"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Masala & Seasoning",
                  "location_id": "6538f678f1960f251e2ba9bf",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": false,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT7H",
                  "@ondc/org/contact_details_consumer_care": "foods,foods@mailinator.com,8989898989",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "ggg",
                    "manufacturer_or_packer_address": "sss",
                    "common_or_generic_name_of_commodity": "ssss",
                    "month_year_of_manufacture_packing_import": "08/2022"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                }
              ],
              "fulfillments": [
                {
                  "contact": {
                    "phone": "8989898989",
                    "email": "foods@mailinator.com"
                  }
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "6538f678f1960f251e2ba9bf"
                    },
                    {
                      "code": "category",
                      "value": "Masala & Seasoning"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "created_at": "2024-02-06 11:20:05.004005"
    },
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "bpp_id": "non-prod.b2cseller.ondc.traversetec.co",
        "bpp_uri": "https://non-prod.b2cseller.ondc.traversetec.co/b2c",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:04.000Z",
        "ttl": "PT30S"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "F1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "Seller NP",
            "symbol": "https://sellerNP.com/images/np.png",
            "short_desc": "Seller Marketplace",
            "long_desc": "Seller Marketplace",
            "images": [
              "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_514893.jpg?ts=1699464886"
            ]
          },
          "bpp/providers": [
            {
              "id": "P1",
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:04.000Z"
              },
              "fulfillments": [
                {
                  "id": "F1",
                  "type": "Delivery",
                  "contact": {
                    "phone": "9886098860",
                    "email": "abc@xyz.com"
                  }
                },
                {
                  "id": "F2",
                  "type": "Self-Pickup",
                  "contact": {
                    "phone": "9886098860",
                    "email": "abc@xyz.com"
                  }
                }
              ],
              "descriptor": {
                "name": "Kolekar Super Market",
                "symbol": "https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg",
                "short_desc": "Janardast Store 1",
                "long_desc": "Super Store 1",
                "images": [
                  "https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg"
                ]
              },
              "ttl": "P1D",
              "locations": [
                {
                  "id": "L1",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:04.000Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        "2023-08-15"
                      ],
                      "frequency": "PT4H",
                      "times": [
                        "1100",
                        "1900"
                      ],
                      "range": {
                        "start": "1100",
                        "end": "2100"
                      }
                    }
                  },
                  "gps": "12.967555,77.749666",
                  "address": {
                    "locality": "Jayanagar",
                    "street": "Jayanagar 4th Block",
                    "city": "Bengaluru",
                    "area_code": "560076",
                    "state": "KA"
                  },
                  "circle": {
                    "gps": "12.967555,77.749666",
                    "radius": {
                      "unit": "km",
                      "value": "3"
                    }
                  }
                }
              ],
              "categories": [
                {
                  "id": "V1",
                  "descriptor": {
                    "name": "Variant Group 1"
                  },
                  "tags": [
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "variant_group"
                        }
                      ]
                    },
                    {
                      "code": "attr",
                      "list": [
                        {
                          "code": "name",
                          "value": "item.quantity.unitized.measure"
                        },
                        {
                          "code": "seq",
                          "value": "1"
                        }
                      ]
                    }
                  ]
                }
              ],
              "items": [
                {
                  "id": "FM_54",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:04.000Z"
                  },
                  "descriptor": {
                    "name": "Morker Plain Atta",
                    "code": "1:1234567891234",
                    "symbol": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_514893.jpg",
                    "short_desc": "Morker Plain Atta",
                    "long_desc": "Morker Plain Atta",
                    "images": [
                      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_514893.jpg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "kilogram",
                        "value": "1"
                      }
                    },
                    "available": {
                      "count": "99"
                    },
                    "maximum": {
                      "count": "99"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "65.00",
                    "maximum_value": "65.0"
                  },
                  "category_id": "Foodgrains",
                  "fulfillment_id": "F1",
                  "location_id": "L1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/return_window": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/time_to_ship": "PT45M",
                  "@ondc/org/available_on_cod": false,
                  "@ondc/org/contact_details_consumer_care": "kalpeshmorker,kalpeshmorker@abc.com,18004254444",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "ITC",
                    "manufacturer_or_packer_address": "ITC Quality Care Cell,P.O Box No.592,Bangalore-560005",
                    "common_or_generic_name_of_commodity": "Morker Ashirwad Atta",
                    "net_quantity_or_measure_of_commodity_in_pkg": "1kg",
                    "month_year_of_manufacture_packing_import": "01/2023"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "Energy(KCal)-(per 100kg) 420,(per serving 50g)250;Protein(g)-(per 100kg) 12,(per serving 50g) 6",
                    "additives_info": "Preservatives,Artificial Colours",
                    "brand_owner_FSSAI_license_no": "12345678901234",
                    "other_FSSAI_license_no": "12345678901234",
                    "importer_FSSAI_license_no": "12345678901234"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "image",
                      "list": [
                        {
                          "code": "type",
                          "value": "back_image"
                        },
                        {
                          "code": "url",
                          "value": "https://sellerNP.com/images/i1_back_image.png"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "veg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "L1"
                    },
                    {
                      "code": "category",
                      "value": "Foodgrains"
                    },
                    {
                      "code": "type",
                      "value": "10"
                    },
                    {
                      "code": "val",
                      "value": "3"
                    },
                    {
                      "code": "unit",
                      "value": "km"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.2.0",
        "bap_id": "paraslabs.com",
        "bap_uri": "https://paraslabs.com/api/",
        "transaction_id": "252cc06b-3a38-4b70-bbf7-985650ea1c0e",
        "message_id": "4dd7f79c-31ba-4dd2-b0b5-147b3bc39975",
        "timestamp": "2024-02-06T11:20:03.897Z",
        "ttl": "P1M",
        "bpp_id": "ref-app-seller-staging-v2.ondc.org",
        "bpp_uri": "https://ref-app-seller-staging-v2.ondc.org"
      },
      "message": {
        "catalog": {
          "bpp/fulfillments": [
            {
              "id": "1",
              "type": "Delivery"
            },
            {
              "id": "2",
              "type": "Self-Pickup"
            },
            {
              "id": "3",
              "type": "Delivery and Self-Pickup"
            }
          ],
          "bpp/descriptor": {
            "name": "Toy Box",
            "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/386abad7-9feb-4c06-9d09-ffed710f50df/logo/promo-region.jpg.jpeg",
            "short_desc": "Toy Box",
            "long_desc": "Toy Box",
            "images": [
              "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/386abad7-9feb-4c06-9d09-ffed710f50df/logo/promo-region.jpg.jpeg"
            ]
          },
          "bpp/providers": [
            {
              "id": "2b53e9fb-9571-4dfa-9c84-cc9551f21a45",
              "descriptor": {
                "name": "Toy Box",
                "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/386abad7-9feb-4c06-9d09-ffed710f50df/logo/promo-region.jpg.jpeg",
                "short_desc": "Toy Box",
                "long_desc": "Toy Box",
                "images": [
                  "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/386abad7-9feb-4c06-9d09-ffed710f50df/logo/promo-region.jpg.jpeg"
                ]
              },
              "time": {
                "label": "enable",
                "timestamp": "2024-02-06T11:20:03.897Z"
              },
              "locations": [
                {
                  "id": "65a779202960cf2596b9d0f3",
                  "gps": "12.983335898915145,77.60358095169069",
                  "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "area_code": "560051",
                    "street": "Shivaji Nagar",
                    "locality": "NA"
                  },
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T11:20:03.897Z",
                    "days": "1,2,3,4,5,6,7",
                    "schedule": {
                      "holidays": [
                        
                      ]
                    },
                    "range": {
                      "start": "0000",
                      "end": "2300"
                    }
                  },
                  "circle": {
                    "gps": "12.983335898915145,77.60358095169069",
                    "radius": {
                      "unit": "km",
                      "value": "150"
                    }
                  }
                }
              ],
              "ttl": "PT24H",
              "categories": [
                {
                  "id": "BepT44",
                  "parent_category_id": "",
                  "descriptor": {
                    "name": "May Flowers ",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/c5e6880d-170c-41b2-b45b-94107dc38099/menu_image/uCRwxX2hPujnsQZBtDvbAo.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/08e25d72-8ade-4cfb-9381-efb4b1d5d5db/menu_image/chamomile-in-pot-1590956372.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/312ba389-0a62-4bac-971b-1b6204f5fa7f/menu_image/edible-flowers-on-salad-shutterstock-com_18099.jpg.jpeg"
                    ]
                  },
                  "tags": [
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "custom_menu"
                        }
                      ]
                    },
                    {
                      "code": "timing",
                      "list": [
                        {
                          "code": "day_from",
                          "value": "1"
                        },
                        {
                          "code": "day_to",
                          "value": "5"
                        },
                        {
                          "code": "time_from",
                          "value": "1000"
                        },
                        {
                          "code": "time_to",
                          "value": "0600"
                        }
                      ]
                    },
                    {
                      "code": "display",
                      "list": [
                        {
                          "code": "rank",
                          "value": "1"
                        }
                      ]
                    }
                  ]
                }
              ],
              "items": [
                {
                  "id": "322c269a-08dc-4ee5-a753-0e2bf6946d5a",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-06T05:55:02.512Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Green Apple",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/35dc50fe-b64a-4b17-aef0-cd6a000fde7e/product_image/OIP.jpeg",
                    "short_desc": "Apple",
                    "long_desc": "Apple",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/35dc50fe-b64a-4b17-aef0-cd6a000fde7e/product_image/OIP.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/ce710a2d-08a7-4339-9fd4-5d2af00a89a5/product_image/apple-background_519183-7849.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/043a5ffb-64ea-4cab-8659-05ee613a8104/product_image/OIP (1).jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "kilogram",
                        "value": "100"
                      }
                    },
                    "available": {
                      "count": "555544"
                    },
                    "maximum": {
                      "count": "5"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "122",
                    "maximum_value": "122"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Fruits and Vegetables",
                  "location_id": "65a779202960cf2596b9d0f3",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "P0D",
                  "@ondc/org/contact_details_consumer_care": "Toy Box,infoline.helpzone@gmail.com,9747940333",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "Ashif",
                    "manufacturer_or_packer_address": "Building No12, floor no 23",
                    "common_or_generic_name_of_commodity": "Common",
                    "month_year_of_manufacture_packing_import": "01/2017"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ],
                  "@ondc/org/mandatory_reqs_veggies_fruits": {
                    "net_quantity": "undefined"
                  }
                },
                {
                  "id": "5f4fb316-153f-4c2d-802e-f23317cbe2c5",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-05T11:19:00.094Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Black Forest",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/df479e3a-13d1-4ff9-9a47-838f3bd01571/product_image/Classic-Black-Forest-Cake-Cherry-Chocolate-Delight.jpg.jpeg",
                    "short_desc": "Black Forest",
                    "long_desc": "Black Forest",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/df479e3a-13d1-4ff9-9a47-838f3bd01571/product_image/Classic-Black-Forest-Cake-Cherry-Chocolate-Delight.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/7afa8e5e-193a-4826-8059-2dae8203eab6/product_image/Black-Forest-scaled-e1639810324908.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/369c0fc7-7410-4400-809a-c873c87f32d3/product_image/black-forest-gateau-560.jpg.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "kilogram",
                        "value": "1"
                      }
                    },
                    "available": {
                      "count": "1499"
                    },
                    "maximum": {
                      "count": "53"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "525",
                    "maximum_value": "525"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Bakery, Cakes & Dairy",
                  "location_id": "65a779202960cf2596b9d0f3",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT2H",
                  "@ondc/org/contact_details_consumer_care": "Toy Box,infoline.helpzone@gmail.com,9747940333",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "NA",
                    "manufacturer_or_packer_address": "NA",
                    "common_or_generic_name_of_commodity": "NA",
                    "month_year_of_manufacture_packing_import": "NA"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "Black Forest",
                    "additives_info": "Black Forest",
                    "brand_owner_FSSAI_license_no": "22222222222222",
                    "other_FSSAI_license_no": "12222222222222",
                    "importer_FSSAI_license_no": "12222222222222",
                    "imported_product_country_of_origin": "IND"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "fe91c6f4-7a21-4321-93cd-cf3d233c0e43",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-01-25T06:39:49.071Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "Egg-Qwy",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/60e26be7-3df6-4cae-bfab-46e5c5d34dda/product_image/product-jpeg.jpg.jpeg",
                    "short_desc": "Egg-Qwy",
                    "long_desc": "Egg-Qwy",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/60e26be7-3df6-4cae-bfab-46e5c5d34dda/product_image/product-jpeg.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/85f15ac4-25c2-43bf-a725-244584c23d8d/product_image/image1.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/394a404e-8099-4c37-8d4e-c7eafe6528f1/product_image/dal.webp"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "unit",
                        "value": "1"
                      }
                    },
                    "available": {
                      "count": "1"
                    },
                    "maximum": {
                      "count": "1"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "1",
                    "maximum_value": "1"
                  },
                  "category_ids": [
                    
                  ],
                  "category_id": "Eggs, Meat & Fish",
                  "location_id": "65a779202960cf2596b9d0f3",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "P0D",
                  "@ondc/org/contact_details_consumer_care": "Toy Box,infoline.helpzone@gmail.com,9747940333",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "QWY",
                    "manufacturer_or_packer_address": "test",
                    "common_or_generic_name_of_commodity": "dsssd",
                    "month_year_of_manufacture_packing_import": "01/2024"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "NA",
                    "additives_info": "NA",
                    "brand_owner_FSSAI_license_no": "NA",
                    "other_FSSAI_license_no": "NA",
                    "importer_FSSAI_license_no": "NA"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "IND"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "8f70d57d-9d7e-4e6d-a1b3-ef79a347ced8",
                  "time": {
                    "label": "enable",
                    "timestamp": "2024-02-05T11:19:00.089Z"
                  },
                  "parent_item_id": "",
                  "descriptor": {
                    "name": "May Flowers",
                    "symbol": "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/95433143-8824-45a8-9726-b73f1feb114d/product_image/edible-flowers-on-salad-shutterstock-com_18099.jpg.jpeg",
                    "short_desc": "May flowers",
                    "long_desc": "May's birth month flowers are the Hawthorn and Lily of the Valley. These fragrant flowers are a symbol of innocence and purity. Lily of the Valley bursts into bloom with a fresh scent, and Hawthorn is also said to bring good luck to those who find them",
                    "images": [
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/95433143-8824-45a8-9726-b73f1feb114d/product_image/edible-flowers-on-salad-shutterstock-com_18099.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/f70d115d-6a1d-4be5-8b0e-4f0d4486aff0/product_image/0598162001626652664.webp",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/3e7383ac-a603-482b-b1d8-c259db17f8ae/product_image/uCRwxX2hPujnsQZBtDvbAo.jpg.jpeg",
                      "https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/82cc4fab-6668-495c-9e1e-3b709a91bea3/product_image/chamomile-in-pot-1590956372.jpg.jpeg"
                    ]
                  },
                  "quantity": {
                    "unitized": {
                      "measure": {
                        "unit": "gram",
                        "value": "100"
                      }
                    },
                    "available": {
                      "count": "7997"
                    },
                    "maximum": {
                      "count": "6000"
                    }
                  },
                  "price": {
                    "currency": "INR",
                    "value": "578.02",
                    "maximum_value": "578.02"
                  },
                  "category_ids": [
                    "BepT44:1"
                  ],
                  "category_id": "Water",
                  "location_id": "65a779202960cf2596b9d0f3",
                  "fulfillment_id": "1",
                  "@ondc/org/returnable": true,
                  "@ondc/org/cancellable": true,
                  "@ondc/org/available_on_cod": true,
                  "@ondc/org/time_to_ship": "PT1H",
                  "@ondc/org/seller_pickup_return": true,
                  "@ondc/org/return_window": "PT20H",
                  "@ondc/org/contact_details_consumer_care": "Toy Box,infoline.helpzone@gmail.com,9747940333",
                  "@ondc/org/statutory_reqs_packaged_commodities": {
                    "manufacturer_or_packer_name": "Maya May Flower",
                    "manufacturer_or_packer_address": "Maya Nagar Vazhuthakkad Trivandrum",
                    "common_or_generic_name_of_commodity": "May Flower",
                    "month_year_of_manufacture_packing_import": "01/2024"
                  },
                  "@ondc/org/statutory_reqs_prepackaged_food": {
                    "nutritional_info": "Calories: 23; Carbs: 4 grams; Fat: 0 grams; Protein: 1.5 grams.",
                    "additives_info": "dible flowers contribute to increasing the appearance of food.that are eventually beneficial to consumers' health.",
                    "brand_owner_FSSAI_license_no": "545465445455",
                    "other_FSSAI_license_no": "545465445455",
                    "importer_FSSAI_license_no": "34354546564545"
                  },
                  "tags": [
                    {
                      "code": "origin",
                      "list": [
                        {
                          "code": "country",
                          "value": "GBR"
                        }
                      ]
                    },
                    {
                      "code": "type",
                      "list": [
                        {
                          "code": "type",
                          "value": "item"
                        }
                      ]
                    },
                    {
                      "code": "veg_nonveg",
                      "list": [
                        {
                          "code": "nonveg",
                          "value": "yes"
                        }
                      ]
                    }
                  ]
                }
              ],
              "fulfillments": [
                {
                  "contact": {
                    "phone": "9747940333",
                    "email": "infoline.helpzone@gmail.com"
                  }
                }
              ],
              "tags": [
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65a779202960cf2596b9d0f3"
                    },
                    {
                      "code": "category",
                      "value": "Fruits and Vegetables"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                },
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65a779202960cf2596b9d0f3"
                    },
                    {
                      "code": "category",
                      "value": "Bakery, Cakes & Dairy"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                },
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65a779202960cf2596b9d0f3"
                    },
                    {
                      "code": "category",
                      "value": "Eggs, Meat & Fish"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                },
                {
                  "code": "serviceability",
                  "list": [
                    {
                      "code": "location",
                      "value": "65a779202960cf2596b9d0f3"
                    },
                    {
                      "code": "category",
                      "value": "Water"
                    },
                    {
                      "code": "type",
                      "value": "12"
                    },
                    {
                      "code": "unit",
                      "value": "country"
                    },
                    {
                      "code": "value",
                      "value": "IND"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "created_at": "2024-02-06 11:20:10.682083"
    }
  ];