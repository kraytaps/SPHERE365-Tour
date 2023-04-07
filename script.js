TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3, this.camera_A8C41FF8_B8D2_ABA4_41BF_E8D6DB624FA7); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_BB1D9EA7_AD42_4CED_4196_1273E95FDF7B",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "yaw": 88.41,
        "pitch": -1.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_0_HS_4_0.png"
          }
         ]
        },
        "yaw": 88.41,
        "hfov": 5.87,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.51
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "class": "ImageResourceLevel",
          "width": 4096,
          "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_B9554CF9_AD42_4C65_41DF_10F4DA7958B2",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": 89.01,
           "pitch": -2.11
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 78,
              "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_0_HS_2_0.png"
             }
            ]
           },
           "yaw": 89.01,
           "hfov": 6.9,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.11
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD, this.camera_B7DDB13D_B8D2_B49D_41DD_2303C15C11B9); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_B921173F_AD47_BDDD_41D9_474BBBFEF5C6",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "yaw": -86.95,
           "pitch": -7.94
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 117,
              "class": "ImageResourceLevel",
              "width": 118,
              "url": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_0_HS_3_0.png"
             }
            ]
           },
           "yaw": -86.95,
           "hfov": 10.29,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -7.94
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3",
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD",
       "yaw": -86.95,
       "distance": 1,
       "backwardYaw": 88.41
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "class": "ImageResourceLevel",
             "width": 4096,
             "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88, this.camera_B69E609F_B8D2_B59C_41E3_CA82F6439F6A); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_BEB48980_AD4E_74A3_41E4_5B3C91F29111",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 59,
                 "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -176.52,
              "pitch": 1.6
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 117,
                 "class": "ImageResourceLevel",
                 "width": 118,
                 "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_0_HS_0_0.png"
                }
               ]
              },
              "yaw": -176.52,
              "hfov": 10.38,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 1.6
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3, this.camera_B6A3D096_B8D2_B46C_41DA_51895871E72E); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_B988F952_AD46_B5A7_41DC_B16223C6BE6F",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 59,
                 "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -90.45,
              "pitch": -1.84
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 117,
                 "class": "ImageResourceLevel",
                 "width": 118,
                 "url": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_0_HS_1_0.png"
                }
               ]
              },
              "yaw": -90.45,
              "hfov": 10.38,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.84
             }
            ]
           }
          ]
         }
        ],
        "id": "panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04",
        "pitch": 0,
        "hfovMax": 120,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3",
          "yaw": -90.45,
          "distance": 1,
          "backwardYaw": 89.01
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "class": "ImageResourceLevel",
                "width": 4096,
                "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445, this.camera_A8E59FDF_B8D2_AB9D_41D0_D9876B824225); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "id": "overlay_B825984F_B79B_8F6D_41CE_146766123BCC",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 59,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -92.17,
                 "pitch": -5.89
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 117,
                    "class": "ImageResourceLevel",
                    "width": 118,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_0_0.png"
                   }
                  ]
                 },
                 "yaw": -92.17,
                 "hfov": 10.33,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.89
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913, this.camera_A8ECAFD7_B8D2_ABED_41D1_A664F50B294A); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_B825B84F_B79B_8F6D_41BB_05EE2CE2C7D8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 59,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -175.15,
                 "pitch": -5.89
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 117,
                    "class": "ImageResourceLevel",
                    "width": 118,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_1_0.png"
                   }
                  ]
                 },
                 "yaw": -175.15,
                 "hfov": 10.33,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.89
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04, this.camera_A8DF2FE8_B8D2_ABA3_41E4_81783FD7F0E6); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "id": "overlay_B825D84F_B79B_8F6D_41E3_AEA7F926A16E",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 59,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -7.61,
                 "pitch": -5.34
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 117,
                    "class": "ImageResourceLevel",
                    "width": 118,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_2_0.png"
                   }
                  ]
                 },
                 "yaw": -7.61,
                 "hfov": 10.34,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.34
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C, this.camera_A8C86FF0_B8D2_ABA3_41AA_D377D0D08190); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "id": "overlay_B825E84F_B79B_8F6D_41E5_B0CDA9E79B75",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.31,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 59,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 108.25,
                 "pitch": -6.71
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 117,
                    "class": "ImageResourceLevel",
                    "width": 118,
                    "url": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_0_HS_3_0.png"
                   }
                  ]
                 },
                 "yaw": 108.25,
                 "hfov": 10.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.71
                }
               ]
              }
             ]
            }
           ],
           "id": "panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
           "pitch": 0,
           "hfovMax": 120,
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "class": "ImageResourceLevel",
                   "width": 4096,
                   "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88, this.camera_B6A9708D_B8D2_B47C_41E2_EFD904698F7D); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "id": "overlay_B91AFE4A_B798_8357_41E6_13E5CB190E2E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -4.25,
                    "pitch": -6.37
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_0_HS_0_0.png"
                      }
                     ]
                    },
                    "yaw": -4.25,
                    "hfov": 10.32,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -6.37
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE, this.camera_B6B1A084_B8D2_B46C_41B1_ED03350D1515); this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "id": "overlay_B91ACE4A_B798_8357_41D5_8F5EA4395148",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.07,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 98.4,
                    "pitch": 15.72
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 119,
                       "url": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_0_HS_1_0.png"
                      }
                     ]
                    },
                    "yaw": 98.4,
                    "hfov": 10.07,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 15.72
                   }
                  ]
                 }
                ]
               }
              ],
              "id": "panorama_B91A8E4A_B798_8357_41E0_078E3AE98913",
              "pitch": 0,
              "hfovMax": 120,
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "class": "ImageResourceLevel",
                      "width": 4096,
                      "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913, this.camera_B79C518A_B8D2_B464_41DB_7625A9360F58); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "id": "overlay_B7DBB5A2_AD42_7CE7_41DF_AB2243D16FCC",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 58,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -85.99,
                       "pitch": -13.71
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_0_HS_0_0.png"
                         }
                        ]
                       },
                       "yaw": -85.99,
                       "hfov": 10.09,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -13.71
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268, this.camera_B7897198_B8D2_B464_41D9_DFFDF3ADF7A0); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "id": "overlay_A27C942B_AF65_9E10_41A5_61E0B5DDAE2C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.44,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 58,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -58.54,
                       "pitch": 24.59
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_0_HS_1_0.png"
                         }
                        ]
                       },
                       "yaw": -58.54,
                       "hfov": 9.44,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 24.59
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "id": "panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE",
                 "pitch": 0,
                 "hfovMax": 120,
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913",
                   "yaw": -85.99,
                   "distance": 1,
                   "backwardYaw": 98.4
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2048,
                         "class": "ImageResourceLevel",
                         "width": 4096,
                         "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE, this.camera_B67EF0B9_B8D2_B5A4_41D3_AF20B13C0E1C); this.mainPlayList.set('selectedIndex', 11)"
                         }
                        ],
                        "id": "overlay_A7C7CCB3_B798_8736_41D6_B2E06790386C",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.39,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -85.99,
                          "pitch": -25.24
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 117,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_0_0.png"
                            }
                           ]
                          },
                          "yaw": -85.99,
                          "hfov": 9.39,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -25.24
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17, this.camera_B665A0CA_B8D2_B5E4_41D2_B5596A58B115); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "id": "overlay_A7C7ECB3_B798_8736_41D8_9892D9C6DB30",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 10.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -168.7,
                          "pitch": -12.54
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 117,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_1_0.png"
                            }
                           ]
                          },
                          "yaw": -168.7,
                          "hfov": 10.14,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -12.54
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625, this.camera_B66920C2_B8D2_B5E4_41B9_E1E1DAEFE706); this.mainPlayList.set('selectedIndex', 13)"
                         }
                        ],
                        "id": "overlay_A7C71CB3_B798_8736_418D_DA97614DF369",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 10.38,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 80.8,
                          "pitch": -1.84
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 117,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_0_HS_2_0.png"
                            }
                           ]
                          },
                          "yaw": 80.8,
                          "hfov": 10.38,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -1.84
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "id": "panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
                    "pitch": 0,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "hfov": 360,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE",
                      "yaw": -85.99,
                      "distance": 1,
                      "backwardYaw": -58.54
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2048,
                            "class": "ImageResourceLevel",
                            "width": 4096,
                            "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_hq.jpeg"
                           },
                           {
                            "height": 2001,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268, this.camera_B6E8C02E_B8D2_B4BC_41E1_DCDA25D1AAEE); this.mainPlayList.set('selectedIndex', 12)"
                            }
                           ],
                           "id": "overlay_B8613094_B799_FFF3_41C2_C6F724756AED",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.18,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -87.02,
                             "pitch": -11.51
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_0_HS_0_0.png"
                               }
                              ]
                             },
                             "yaw": -87.02,
                             "hfov": 10.18,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -11.51
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280, this.camera_B6F4C025_B8D2_B4AC_41B1_6CE788CE34F3); this.mainPlayList.set('selectedIndex', 14)"
                            }
                           ],
                           "id": "overlay_B861D094_B799_FFF3_41B7_827897EFDCC3",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.39,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 8.18,
                             "pitch": -0.12
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_0_HS_1_0.png"
                               }
                              ]
                             },
                             "yaw": 8.18,
                             "hfov": 10.39,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -0.12
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "id": "panorama_B8612093_B799_FFF5_41B3_F48845BB2625",
                       "pitch": 0,
                       "hfovMax": 120,
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2048,
                               "class": "ImageResourceLevel",
                               "width": 4096,
                               "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625, this.camera_B684E0B0_B8D2_B5A4_41D1_1045C229A0A9); this.mainPlayList.set('selectedIndex', 13)"
                               }
                              ],
                              "id": "overlay_B8B789CA_B7EF_8156_418D_89596819A9A1",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.37,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 171.74,
                                "pitch": -3.28
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "yaw": 171.74,
                                "hfov": 10.37,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -3.28
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E, this.camera_B68810A8_B8D2_B5A4_41E6_9E6AFC772177); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "id": "overlay_B8B7A9CA_B7EF_8156_41DD_AEA4ECBCFF54",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.37,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 90.13,
                                "pitch": -3.55
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "yaw": 90.13,
                                "hfov": 10.37,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -3.55
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280",
                          "pitch": 0,
                          "hfovMax": 120,
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2048,
                                  "class": "ImageResourceLevel",
                                  "width": 4096,
                                  "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280, this.camera_B6E2103F_B8D2_B49C_41E0_D5E808BDADB2); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "id": "overlay_B8505DE4_B7EF_8153_41DA_65067F3DF272",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -89.08,
                                   "pitch": -0.81
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 117,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": -89.08,
                                   "hfov": 10.38,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -0.81
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B, this.camera_B6EE9036_B8D2_B4AC_41E6_595857BA1429); this.mainPlayList.set('selectedIndex', 16)"
                                  }
                                 ],
                                 "id": "overlay_B8504DE4_B7EF_8153_41BB_4F12DA0462CF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.11,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 34,
                                      "class": "ImageResourceLevel",
                                      "width": 34,
                                      "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 176.95,
                                   "pitch": -0.33
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 68,
                                      "class": "ImageResourceLevel",
                                      "width": 69,
                                      "url": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": 176.95,
                                   "hfov": 6.11,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -0.33
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "id": "panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E",
                             "pitch": 0,
                             "hfovMax": 120,
                             "class": "Panorama",
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "class": "ImageResourceLevel",
                                     "width": 4096,
                                     "url": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_hq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E, this.camera_B77861A6_B8D2_B7AC_41C1_EBFF6A57CB04); this.mainPlayList.set('selectedIndex', 15)"
                                     }
                                    ],
                                    "id": "overlay_B8AC2F86_B7EF_81DF_41C8_AA3D73EA840B",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.36,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 58,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -2.19,
                                      "pitch": 4
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 117,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": -2.19,
                                      "hfov": 10.36,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 4
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B",
                                "pitch": 0,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E",
                                  "yaw": -2.19,
                                  "distance": 1,
                                  "backwardYaw": 176.95
                                 }
                                ],
                                "vfov": 180,
                                "partial": false,
                                "label": "Female Changing Rooms",
                                "cardboardMenu": {
                                 "fontColor": "#FFFFFF",
                                 "rollOverOpacity": 0.8,
                                 "fontFamily": "Arial",
                                 "rollOverBackgroundColor": "#000000",
                                 "class": "Menu",
                                 "label": "Media",
                                 "backgroundColor": "#404040",
                                 "opacity": 0.4,
                                 "selectedBackgroundColor": "#202020",
                                 "selectedFontColor": "#FFFFFF",
                                 "rollOverFontColor": "#FFFFFF",
                                 "id": "Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                                 "children": [
                                  {
                                   "class": "MenuItem",
                                   "label": "Level 1",
                                   "click": "this.mainPlayList.set('selectedIndex', 0)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Entrance",
                                   "click": "this.mainPlayList.set('selectedIndex', 1)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Entrance",
                                   "click": "this.mainPlayList.set('selectedIndex', 2)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Lobby",
                                   "click": "this.mainPlayList.set('selectedIndex', 3)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Waiting Area",
                                   "click": "this.mainPlayList.set('selectedIndex', 4)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Gym",
                                   "click": "this.mainPlayList.set('selectedIndex', 5)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Gym",
                                   "click": "this.mainPlayList.set('selectedIndex', 6)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Lobby",
                                   "click": "this.mainPlayList.set('selectedIndex', 7)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Male Changing Rooms",
                                   "click": "this.mainPlayList.set('selectedIndex', 8)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Male Changing Rooms",
                                   "click": "this.mainPlayList.set('selectedIndex', 9)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Male Changing Rooms",
                                   "click": "this.mainPlayList.set('selectedIndex', 10)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Staircase to Level 2",
                                   "click": "this.mainPlayList.set('selectedIndex', 11)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Level 2",
                                   "click": "this.mainPlayList.set('selectedIndex', 12)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Watercooler",
                                   "click": "this.mainPlayList.set('selectedIndex', 13)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Entrance Bathroom",
                                   "click": "this.mainPlayList.set('selectedIndex', 14)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Female Changing Rooms",
                                   "click": "this.mainPlayList.set('selectedIndex', 15)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Female Changing Rooms",
                                   "click": "this.mainPlayList.set('selectedIndex', 16)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 17)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Watercooler",
                                   "click": "this.mainPlayList.set('selectedIndex', 18)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Cold Plunge & Sauna Room",
                                   "click": "this.mainPlayList.set('selectedIndex', 19)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Sauna",
                                   "click": "this.mainPlayList.set('selectedIndex', 20)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 21)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 22)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Sauna",
                                   "click": "this.mainPlayList.set('selectedIndex', 23)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 24)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 25)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 26)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Hallway",
                                   "click": "this.mainPlayList.set('selectedIndex', 27)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Float Room",
                                   "click": "this.mainPlayList.set('selectedIndex', 28)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Float Room",
                                   "click": "this.mainPlayList.set('selectedIndex', 29)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Sauna",
                                   "click": "this.mainPlayList.set('selectedIndex', 30)"
                                  },
                                  {
                                   "class": "MenuItem",
                                   "label": "Sauna",
                                   "click": "this.mainPlayList.set('selectedIndex', 31)"
                                  }
                                 ]
                                },
                                "thumbnailUrl": "media/panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_t.jpg"
                               },
                               "yaw": 176.95,
                               "distance": 1,
                               "backwardYaw": -2.19
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280",
                               "yaw": -89.08,
                               "distance": 1,
                               "backwardYaw": 90.13
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "Female Changing Rooms",
                             "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                             "thumbnailUrl": "media/panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_t.jpg"
                            },
                            "yaw": 90.13,
                            "distance": 1,
                            "backwardYaw": -89.08
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625",
                            "yaw": 171.74,
                            "distance": 1,
                            "backwardYaw": 8.18
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "Entrance Bathroom",
                          "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                          "thumbnailUrl": "media/panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_t.jpg"
                         },
                         "yaw": 8.18,
                         "distance": 1,
                         "backwardYaw": 171.74
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
                         "yaw": -87.02,
                         "distance": 1,
                         "backwardYaw": 80.8
                        }
                       ],
                       "vfov": 180,
                       "partial": false,
                       "label": "Watercooler",
                       "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                       "thumbnailUrl": "media/panorama_B8612093_B799_FFF5_41B3_F48845BB2625_t.jpg"
                      },
                      "yaw": 80.8,
                      "distance": 1,
                      "backwardYaw": -87.02
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2048,
                            "class": "ImageResourceLevel",
                            "width": 4096,
                            "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_hq.jpeg"
                           },
                           {
                            "height": 2001,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268, this.camera_B742D1D1_B8D2_B7E4_41DE_8C12258D5A2B); this.mainPlayList.set('selectedIndex', 12)"
                            }
                           ],
                           "id": "overlay_B5D2B2E7_B8CF_75AC_41D0_C3BF26B254EF",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.24,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -162.59,
                             "pitch": -9.45
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_0_0.png"
                               }
                              ]
                             },
                             "yaw": -162.59,
                             "hfov": 10.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -9.45
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693, this.camera_B765C1BF_B8D2_B79B_41E0_575B5BD0FFC5); this.mainPlayList.set('selectedIndex', 18)"
                            }
                           ],
                           "id": "overlay_B5D2D2E7_B8CF_75AC_41DD_DBCCA42BDB1B",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.37,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -89.42,
                             "pitch": -3.55
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_1_0.png"
                               }
                              ]
                             },
                             "yaw": -89.42,
                             "hfov": 10.37,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -3.55
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 19)"
                            }
                           ],
                           "id": "overlay_B5D2C2E7_B8CF_75AC_41C4_E59E6BCAB94B",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.35,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -69.25,
                             "pitch": -3.22
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_2_0.png"
                               }
                              ]
                             },
                             "yaw": -69.25,
                             "hfov": 10.35,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -3.22
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B, this.camera_B75421C8_B8D2_B7E4_41E0_F737EF3B9226); this.mainPlayList.set('selectedIndex', 19)"
                            }
                           ],
                           "id": "overlay_B5D2F2E7_B8CF_75AC_41DF_6A703B491960",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.36,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 66.38,
                             "pitch": -2.19
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_3_0.png"
                               }
                              ]
                             },
                             "yaw": 66.38,
                             "hfov": 10.36,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -2.19
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE, this.camera_B77741B7_B8D2_B7AC_41C2_B96D14BE68AF); this.mainPlayList.set('selectedIndex', 21)"
                            }
                           ],
                           "id": "overlay_B5D2E2E7_B8CF_75AC_41E3_F3C4F0412822",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.38,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_4_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 89.72,
                             "pitch": -2.11
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_0_HS_4_0.png"
                               }
                              ]
                             },
                             "yaw": 89.72,
                             "hfov": 10.38,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -2.11
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "id": "panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
                       "pitch": 0,
                       "hfovMax": 120,
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2048,
                               "class": "ImageResourceLevel",
                               "width": 4096,
                               "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17, this.camera_B6B9007C_B8D2_B49C_41E1_86173C547B09); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "id": "overlay_B31AC87D_B8F7_749D_41E6_4F63298EEA85",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.36,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -87.98,
                                "pitch": -4.17
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "yaw": -87.98,
                                "hfov": 10.36,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -4.17
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B, this.camera_B6C34073_B8D2_B4A4_41D3_BA647FA2C41D); this.mainPlayList.set('selectedIndex', 22)"
                               }
                              ],
                              "id": "overlay_B31A187D_B8F7_749D_41D1_51311292688B",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.38,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 93.56,
                                "pitch": 2.35
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "yaw": 93.56,
                                "hfov": 10.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 2.35
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.mainPlayList.set('selectedIndex', 23)"
                               }
                              ],
                              "id": "overlay_B31A387D_B8F7_749D_41DF_3948FA54CCDB",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.35,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 164.25,
                                "pitch": 3.92
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "yaw": 164.25,
                                "hfov": 10.35,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 3.92
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE",
                          "pitch": 0,
                          "hfovMax": 120,
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2048,
                                  "class": "ImageResourceLevel",
                                  "width": 4096,
                                  "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE, this.camera_B7351F92_B8D2_AC64_41BC_8362572229BF); this.mainPlayList.set('selectedIndex', 21)"
                                  }
                                 ],
                                 "id": "overlay_B538AA77_B8D1_54AC_41E5_5ABB185EE0CD",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -86.95,
                                   "pitch": -1.22
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 117,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": -86.95,
                                   "hfov": 10.38,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -1.22
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD, this.camera_B7251FA3_B8D2_ABA4_41DC_7CFEE1CFF661); this.mainPlayList.set('selectedIndex', 29)"
                                  }
                                 ],
                                 "id": "overlay_B538BA77_B8D1_54AC_41D3_85E0D9DF00EF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 2.54,
                                   "pitch": 1.17
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": 2.54,
                                   "hfov": 10.37,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 1.17
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9, this.camera_B71E6FAC_B8D2_ABBC_41E1_49E3A1C98BB0); this.mainPlayList.set('selectedIndex', 23)"
                                  }
                                 ],
                                 "id": "overlay_B538DA77_B8D1_54AC_41E4_3BDABFA0B5DC",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 150.18,
                                   "pitch": -0.55
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": 150.18,
                                   "hfov": 10.37,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -0.55
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5, this.camera_B72ECF9A_B8D2_AC64_41D5_FBBDB1A8458B); this.mainPlayList.set('selectedIndex', 24)"
                                  }
                                 ],
                                 "id": "overlay_B538EA77_B8D1_54AC_41E1_96A74FF6499E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_3_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 92.6,
                                   "pitch": 0.91
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 117,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": 92.6,
                                   "hfov": 10.38,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 0.91
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "id": "panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
                             "pitch": 0,
                             "hfovMax": 120,
                             "class": "Panorama",
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE",
                               "yaw": -86.95,
                               "distance": 1,
                               "backwardYaw": 93.56
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "class": "ImageResourceLevel",
                                     "width": 4096,
                                     "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_hq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 23)"
                                     }
                                    ],
                                    "id": "overlay_B67E2456_B8D1_7CEC_41E2_C0FCF08EF7AA",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.37,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -43.1,
                                      "pitch": -0.2
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": -43.1,
                                      "hfov": 10.37,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -0.2
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B, this.camera_B6D82047_B8D2_B4EC_41C6_1DEFBB06A84F); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "id": "overlay_B67E5456_B8D1_7CEC_4191_C4E78B6A7E4B",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 58,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -1.84,
                                      "pitch": -2.18
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 117,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": -1.84,
                                      "hfov": 10.38,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -2.18
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 25)"
                                     }
                                    ],
                                    "id": "overlay_B67E7456_B8D1_7CEC_41B7_FD6B60DFE5A7",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 58,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 90.13,
                                      "pitch": -0.81
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 117,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": 90.13,
                                      "hfov": 10.38,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -0.81
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5",
                                "pitch": 0,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
                                  "yaw": -1.84,
                                  "distance": 1,
                                  "backwardYaw": 92.6
                                 }
                                ],
                                "vfov": 180,
                                "partial": false,
                                "label": "Hallway",
                                "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                                "thumbnailUrl": "media/panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_t.jpg"
                               },
                               "yaw": 92.6,
                               "distance": 1,
                               "backwardYaw": -1.84
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "class": "ImageResourceLevel",
                                     "width": 4096,
                                     "url": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_hq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B, this.camera_B6FFC01D_B8D2_B49C_41E2_FA49C4AA59D9); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "id": "overlay_B5FD90A7_B8F1_55AC_41C8_451096F5B812",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.37,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -88.33,
                                      "pitch": 1.51
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": -88.33,
                                      "hfov": 10.37,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 1.51
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD",
                                "pitch": 0,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
                                  "yaw": -88.33,
                                  "distance": 1,
                                  "backwardYaw": 2.54
                                 }
                                ],
                                "vfov": 180,
                                "partial": false,
                                "label": "Float Room",
                                "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                                "thumbnailUrl": "media/panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_t.jpg"
                               },
                               "yaw": 2.54,
                               "distance": 1,
                               "backwardYaw": -88.33
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "class": "ImageResourceLevel",
                                     "width": 4096,
                                     "url": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_hq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B, this.camera_B70FCFBD_B8D2_AB9D_41DA_B2DF2C1558B7); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "id": "overlay_8A9E37F0_AF9C_99F0_41CB_995DF080C9D2",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.35,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 64.73,
                                      "pitch": -3.63
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "yaw": 64.73,
                                      "hfov": 10.35,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -3.63
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9",
                                "pitch": 0,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
                                  "yaw": 64.73,
                                  "distance": 1,
                                  "backwardYaw": 150.18
                                 }
                                ],
                                "vfov": 180,
                                "partial": false,
                                "label": "Sauna",
                                "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                                "thumbnailUrl": "media/panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_t.jpg"
                               },
                               "yaw": 150.18,
                               "distance": 1,
                               "backwardYaw": 64.73
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "Hallway",
                             "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                             "thumbnailUrl": "media/panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_t.jpg"
                            },
                            "yaw": 93.56,
                            "distance": 1,
                            "backwardYaw": -86.95
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
                            "yaw": -87.98,
                            "distance": 1,
                            "backwardYaw": 89.72
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "Hallway",
                          "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                          "thumbnailUrl": "media/panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_t.jpg"
                         },
                         "yaw": 89.72,
                         "distance": 1,
                         "backwardYaw": -87.98
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2048,
                               "class": "ImageResourceLevel",
                               "width": 4096,
                               "url": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17, this.camera_B64A00DC_B8D2_B59C_41E0_838427552240); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "id": "overlay_B82A06EA_B7B8_8357_41E3_69EBAE96CB77",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.38,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 93.15,
                                "pitch": -1.08
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "yaw": 93.15,
                                "hfov": 10.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -1.08
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693",
                          "pitch": 0,
                          "hfovMax": 120,
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
                            "yaw": 93.15,
                            "distance": 1,
                            "backwardYaw": -89.42
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "Watercooler",
                          "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                          "thumbnailUrl": "media/panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_t.jpg"
                         },
                         "yaw": -89.42,
                         "distance": 1,
                         "backwardYaw": 93.15
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2048,
                               "class": "ImageResourceLevel",
                               "width": 4096,
                               "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F, this.camera_A8F11FCE_B8D2_ABFF_41DA_BDB8CC1A45EF); this.mainPlayList.set('selectedIndex', 20)"
                               }
                              ],
                              "id": "overlay_B8E16C55_B799_877D_41E6_F20F32A4FA05",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.29,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 67,
                                "pitch": -7.94
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "yaw": 67,
                                "hfov": 10.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -7.94
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17, this.camera_A8F9AFC5_B8D2_ABED_41D5_EB5018FCA586); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "id": "overlay_B8E17C55_B799_877D_41DB_F581E7FFB9C3",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.38,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 58,
                                   "class": "ImageResourceLevel",
                                   "width": 59,
                                   "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -84.21,
                                "pitch": -0.74
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 117,
                                   "class": "ImageResourceLevel",
                                   "width": 118,
                                   "url": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "yaw": -84.21,
                                "hfov": 10.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -0.74
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B8E15C55_B799_877D_41D7_D7702BFB827B",
                          "pitch": 0,
                          "hfovMax": 120,
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
                            "yaw": -84.21,
                            "distance": 1,
                            "backwardYaw": 66.38
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2048,
                                  "class": "ImageResourceLevel",
                                  "width": 4096,
                                  "url": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B, this.camera_B7EF012A_B8D2_B4A4_41E6_B999EFF6B177); this.mainPlayList.set('selectedIndex', 19)"
                                  }
                                 ],
                                 "id": "overlay_B826AFC9_B799_8155_41CE_D0D618CE3285",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 87.66,
                                   "pitch": -6.98
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 117,
                                      "class": "ImageResourceLevel",
                                      "width": 118,
                                      "url": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "yaw": 87.66,
                                   "hfov": 10.31,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -6.98
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "id": "panorama_B8268FC9_B799_8155_41E6_6065FD275C1F",
                             "pitch": 0,
                             "hfovMax": 120,
                             "class": "Panorama",
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B",
                               "yaw": 87.66,
                               "distance": 1,
                               "backwardYaw": 67
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "Sauna",
                             "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                             "thumbnailUrl": "media/panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_t.jpg"
                            },
                            "yaw": 67,
                            "distance": 1,
                            "backwardYaw": 87.66
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "Cold Plunge & Sauna Room",
                          "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                          "thumbnailUrl": "media/panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_t.jpg"
                         },
                         "yaw": 66.38,
                         "distance": 1,
                         "backwardYaw": -84.21
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
                         "yaw": -162.59,
                         "distance": 1,
                         "backwardYaw": -168.7
                        }
                       ],
                       "vfov": 180,
                       "partial": false,
                       "label": "Hallway",
                       "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                       "thumbnailUrl": "media/panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_t.jpg"
                      },
                      "yaw": -168.7,
                      "distance": 1,
                      "backwardYaw": -162.59
                     }
                    ],
                    "vfov": 180,
                    "partial": false,
                    "label": "Level 2",
                    "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                    "thumbnailUrl": "media/panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_t.jpg"
                   },
                   "yaw": -58.54,
                   "distance": 1,
                   "backwardYaw": -85.99
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "label": "Staircase to Level 2",
                 "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                 "thumbnailUrl": "media/panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_t.jpg"
                },
                "yaw": 98.4,
                "distance": 1,
                "backwardYaw": -85.99
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
                "yaw": -4.25,
                "distance": 1,
                "backwardYaw": -175.15
               }
              ],
              "vfov": 180,
              "partial": false,
              "label": "Waiting Area",
              "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
              "thumbnailUrl": "media/panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_t.jpg"
             },
             "yaw": -175.15,
             "distance": 1,
             "backwardYaw": -4.25
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "class": "ImageResourceLevel",
                   "width": 4096,
                   "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88, this.camera_B63300ED_B8D2_B5BC_41E6_DA4937179E5B); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "id": "overlay_BBFC6976_B7B8_813E_41DA_242F7B105A92",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.38,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -90.04,
                    "pitch": 0.22
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_0_HS_0_0.png"
                      }
                     ]
                    },
                    "yaw": -90.04,
                    "hfov": 10.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 0.22
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171, this.camera_B64620E4_B8D2_B5AC_41E5_1295772DF862); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "id": "overlay_BBFDB976_B7B8_813E_41A2_650EFCF3B7E7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.38,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 89.72,
                    "pitch": -1.22
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_0_HS_1_0.png"
                      }
                     ]
                    },
                    "yaw": 89.72,
                    "hfov": 10.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.22
                   }
                  ]
                 }
                ]
               }
              ],
              "id": "panorama_BBFC7976_B7B8_813E_41E3_8F433C835445",
              "pitch": 0,
              "hfovMax": 120,
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "class": "ImageResourceLevel",
                      "width": 4096,
                      "url": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445, this.camera_B716DFB5_B8D2_ABAD_41DD_8AA2996F2F3A); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "id": "overlay_B8F975D7_B7BB_817D_41D4_0BC2C2C153E4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.36,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 58,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -90.45,
                       "pitch": -3.9
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_0_HS_0_0.png"
                         }
                        ]
                       },
                       "yaw": -90.45,
                       "hfov": 10.36,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -3.9
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "id": "panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171",
                 "pitch": 0,
                 "hfovMax": 120,
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445",
                   "yaw": -90.45,
                   "distance": 1,
                   "backwardYaw": 89.72
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "label": "Gym",
                 "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                 "thumbnailUrl": "media/panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_t.jpg"
                },
                "yaw": 89.72,
                "distance": 1,
                "backwardYaw": -90.45
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
                "yaw": -90.04,
                "distance": 1,
                "backwardYaw": -92.17
               }
              ],
              "vfov": 180,
              "partial": false,
              "label": "Gym",
              "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
              "thumbnailUrl": "media/panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_t.jpg"
             },
             "yaw": -92.17,
             "distance": 1,
             "backwardYaw": -90.04
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04",
             "yaw": -7.61,
             "distance": 1,
             "backwardYaw": -176.52
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "class": "ImageResourceLevel",
                   "width": 4096,
                   "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88, this.camera_B606910F_B8D2_B47C_41CB_5A504AD9655F); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "id": "overlay_B40C4FE8_AD42_4C64_41BD_C9D5154A322A",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.34,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -92.86,
                    "pitch": -5.47
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_0_0.png"
                      }
                     ]
                    },
                    "yaw": -92.86,
                    "hfov": 10.34,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -5.47
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF, this.camera_B60AE107_B8D2_B46C_4181_53C2AFCBAB41); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "id": "overlay_BAE04101_AD42_D5A5_41C8_3E1599CA0AC6",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.29,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -27.24,
                    "pitch": -7.6
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_1_0.png"
                      }
                     ]
                    },
                    "yaw": -27.24,
                    "hfov": 10.29,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.6
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "id": "overlay_B7E84718_AD42_FDA3_41E5_089C502515CD",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.38,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 58,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -164.51,
                    "pitch": 1.66
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_0_HS_2_0.png"
                      }
                     ]
                    },
                    "yaw": -164.51,
                    "hfov": 10.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 1.66
                   }
                  ]
                 }
                ]
               }
              ],
              "id": "panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C",
              "pitch": 0,
              "hfovMax": 120,
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "class": "ImageResourceLevel",
                      "width": 4096,
                      "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C, this.camera_B61D90FE_B8D2_B59C_41DA_3D7F29251406); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "id": "overlay_B88EAFF3_B7E7_8136_4198_8EEE30D54F9C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.31,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 58,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 155.34,
                       "pitch": -6.98
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_0_HS_0_0.png"
                         }
                        ]
                       },
                       "yaw": 155.34,
                       "hfov": 10.31,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.98
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74, this.camera_B62F30F6_B8D2_B5AC_41DB_6E819EA89F3C); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "id": "overlay_B88EBFF3_B7E7_8136_41C5_C4695F04A2B4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.32,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 58,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 91.09,
                       "pitch": -6.64
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_0_HS_1_0.png"
                         }
                        ]
                       },
                       "yaw": 91.09,
                       "hfov": 10.32,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.64
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "id": "panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF",
                 "pitch": 0,
                 "hfovMax": 120,
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2048,
                         "class": "ImageResourceLevel",
                         "width": 4096,
                         "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF, this.camera_B7B33168_B8D2_B4A3_41BB_5B696FAFF148); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "id": "overlay_B8862C7D_B7E7_872D_41D9_7A2B82C14503",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 10.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -89.77,
                          "pitch": -4.51
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 117,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_0_HS_0_0.png"
                            }
                           ]
                          },
                          "yaw": -89.77,
                          "hfov": 10.35,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -4.51
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA, this.camera_B7AF817C_B8D2_B4A3_41E3_0DA3A7935BDA); this.mainPlayList.set('selectedIndex', 10)"
                         }
                        ],
                        "id": "overlay_B8863C7D_B7E7_872D_41DC_9645547A0F50",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 10.38,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 90.41,
                          "pitch": 1.32
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 117,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_0_HS_1_0.png"
                            }
                           ]
                          },
                          "yaw": 90.41,
                          "hfov": 10.38,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 1.32
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "id": "panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74",
                    "pitch": 0,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "hfov": 360,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF",
                      "yaw": -89.77,
                      "distance": 1,
                      "backwardYaw": 91.09
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2048,
                            "class": "ImageResourceLevel",
                            "width": 4096,
                            "url": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_hq.jpeg"
                           },
                           {
                            "height": 2001,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74, this.camera_B7C6E159_B8D2_B4E5_41E5_A61946483B3E); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "id": "overlay_B88DFA4F_B7E8_836D_41E2_728CB4F61975",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 10.32,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 58,
                                "class": "ImageResourceLevel",
                                "width": 59,
                                "url": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -90.8,
                             "pitch": -6.57
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 117,
                                "class": "ImageResourceLevel",
                                "width": 118,
                                "url": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_0_HS_0_0.png"
                               }
                              ]
                             },
                             "yaw": -90.8,
                             "hfov": 10.32,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -6.57
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "id": "panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA",
                       "pitch": 0,
                       "hfovMax": 120,
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74",
                         "yaw": -90.8,
                         "distance": 1,
                         "backwardYaw": 90.41
                        }
                       ],
                       "vfov": 180,
                       "partial": false,
                       "label": "Male Changing Rooms",
                       "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                       "thumbnailUrl": "media/panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_t.jpg"
                      },
                      "yaw": 90.41,
                      "distance": 1,
                      "backwardYaw": -90.8
                     }
                    ],
                    "vfov": 180,
                    "partial": false,
                    "label": "Male Changing Rooms",
                    "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                    "thumbnailUrl": "media/panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_t.jpg"
                   },
                   "yaw": 91.09,
                   "distance": 1,
                   "backwardYaw": -89.77
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C",
                   "yaw": 155.34,
                   "distance": 1,
                   "backwardYaw": -27.24
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "label": "Male Changing Rooms",
                 "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
                 "thumbnailUrl": "media/panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_t.jpg"
                },
                "yaw": -27.24,
                "distance": 1,
                "backwardYaw": 155.34
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
                "yaw": -92.86,
                "distance": 1,
                "backwardYaw": 108.25
               }
              ],
              "vfov": 180,
              "partial": false,
              "label": "Lobby",
              "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
              "thumbnailUrl": "media/panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_t.jpg"
             },
             "yaw": 108.25,
             "distance": 1,
             "backwardYaw": -92.86
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "Lobby",
           "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
           "thumbnailUrl": "media/panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_t.jpg"
          },
          "yaw": -176.52,
          "distance": 1,
          "backwardYaw": -7.61
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "Entrance",
        "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
        "thumbnailUrl": "media/panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_t.jpg"
       },
       "yaw": 89.01,
       "distance": 1,
       "backwardYaw": -90.45
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "Entrance",
     "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
     "thumbnailUrl": "media/panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_t.jpg"
    },
    "yaw": 88.41,
    "distance": 1,
    "backwardYaw": -86.95
   }
  ],
  "vfov": 180,
  "partial": false,
  "label": "Level 1",
  "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
  "thumbnailUrl": "media/panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_t.jpg"
 },
 {
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.09,
   "pitch": -0.96
  }
 },
 "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3",
 {
  "id": "panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.86,
   "pitch": 1.1
  }
 },
 "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04",
 {
  "id": "panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.68,
   "pitch": 0.1
  }
 },
 "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
 {
  "id": "panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.57,
   "pitch": -1.37
  }
 },
 "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913",
 {
  "id": "panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445",
 {
  "id": "panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.64,
   "pitch": -1.78
  }
 },
 "this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171",
 {
  "id": "panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.27,
   "pitch": -4.53
  }
 },
 "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C",
 {
  "id": "panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF",
 {
  "id": "panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.93,
   "pitch": 0.48
  }
 },
 "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74",
 {
  "id": "panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.1,
   "pitch": -2.4
  }
 },
 "this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA",
 {
  "id": "panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE",
 {
  "id": "panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -62.63,
   "pitch": 21.02
  }
 },
 "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
 {
  "id": "panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625",
 {
  "id": "panorama_B8612093_B799_FFF5_41B3_F48845BB2625_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280",
 {
  "id": "panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E",
 {
  "id": "panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B",
 {
  "id": "panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
 {
  "id": "panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693",
 {
  "id": "panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B",
 {
  "id": "panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F",
 {
  "id": "panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE",
 {
  "id": "panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
 {
  "id": "panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9",
 {
  "id": "panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5",
 {
  "id": "panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_889CA94F_AF9B_9610_41E0_8B626321EEF8",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -86.95,
        "pitch": -9.45
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 117,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_0_HS_0_0.png"
          }
         ]
        },
        "yaw": -86.95,
        "hfov": 10.24,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.45
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 27)"
       }
      ],
      "id": "overlay_88BFD13D_AF9B_9671_41E4_F1F21BA2F0C6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 90.82,
        "pitch": -0.12
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 117,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_0_HS_1_0.png"
          }
         ]
        },
        "yaw": 90.82,
        "hfov": 10.39,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.12
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "label": "Hallway",
  "vfov": 180,
  "partial": false,
  "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
  "thumbnailUrl": "media/panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_t.jpg"
 },
 {
  "id": "panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)"
       }
      ],
      "id": "overlay_8783DA80_AFE5_AA0F_41E4_6A4758DDFDA8",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 0.49,
        "pitch": -2.52
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 117,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_0_0.png"
          }
         ]
        },
        "yaw": 0.49,
        "hfov": 10.37,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.52
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 30)"
       }
      ],
      "id": "overlay_85FDDE71_AFE7_AAF0_41E5_51A0E0071308",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 118.88,
        "pitch": -3.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_1_0.png"
          }
         ]
        },
        "yaw": 118.88,
        "hfov": 10.35,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.36
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 31)"
       }
      ],
      "id": "overlay_8769E5A3_AFE5_9E10_41DF_79C6A4FD647C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": 103.44,
        "pitch": 0.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_2_0.png"
          }
         ]
        },
        "yaw": 103.44,
        "hfov": 10.37,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.07
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 28)"
       }
      ],
      "id": "overlay_84A0098A_AFE4_B613_41CE_F9A51001B56E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "yaw": 77.08,
        "pitch": 2.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_0_HS_3_0.png"
          }
         ]
        },
        "yaw": 77.08,
        "hfov": 10.36,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.27
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "label": "Hallway",
  "vfov": 180,
  "partial": false,
  "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
  "thumbnailUrl": "media/panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_t.jpg"
 },
 {
  "id": "panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2, this.camera_B6D3B059_B8D2_B4E4_41E1_9EF92EDCC9B0); this.mainPlayList.set('selectedIndex', 30)"
       }
      ],
      "id": "overlay_82306BB8_AFFF_AA7F_41C0_A61E1BE3FBEE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -144.2,
        "pitch": 1.79
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_0_0.png"
          }
         ]
        },
        "yaw": -144.2,
        "hfov": 10.37,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.79
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471, this.camera_B6CD006A_B8D2_B4A4_41D4_8B4750A5534D); this.mainPlayList.set('selectedIndex', 31)"
       }
      ],
      "id": "overlay_82EE5590_AFFF_FE0F_41D9_7320DDFA2914",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 140.91,
        "pitch": -3.02
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_1_0.png"
          }
         ]
        },
        "yaw": 140.91,
        "hfov": 10.36,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.02
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B, this.camera_B6C99061_B8D2_B4A4_41BC_288F793A7007); this.mainPlayList.set('selectedIndex', 28)"
       }
      ],
      "id": "overlay_819061E5_AFFF_B611_41A8_E49670673548",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": 61.02,
        "pitch": 0.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_2_0.png"
          }
         ]
        },
        "yaw": 61.02,
        "hfov": 10.37,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.07
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 26)"
       }
      ],
      "id": "overlay_82D5DA88_AFFC_AA10_41E5_D68060088942",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "yaw": -91.69,
        "pitch": 0.57
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 117,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_0_HS_3_0.png"
          }
         ]
        },
        "yaw": -91.69,
        "hfov": 10.38,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.57
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "class": "ImageResourceLevel",
          "width": 4096,
          "url": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653, this.camera_B6DE2050_B8D2_B4E4_41DA_6B242613968C); this.mainPlayList.set('selectedIndex', 27)"
          }
         ],
         "id": "overlay_849EFB73_AFEC_EAF1_4168_10319F6043D7",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -77.35,
           "pitch": 1.17
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118,
              "url": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_0_HS_0_0.png"
             }
            ]
           },
           "yaw": -77.35,
           "hfov": 10.37,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 1.17
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2",
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
       "yaw": -77.35,
       "distance": 1,
       "backwardYaw": -144.2
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "Sauna",
     "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
     "thumbnailUrl": "media/panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_t.jpg"
    },
    "yaw": -144.2,
    "distance": 1,
    "backwardYaw": -77.35
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "class": "ImageResourceLevel",
          "width": 4096,
          "url": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653, this.camera_B65FF0D3_B8D2_B5E4_41D3_F984DA934358); this.mainPlayList.set('selectedIndex', 27)"
          }
         ],
         "id": "overlay_B5084A04_B8F1_546C_41DA_B38D5410761B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -88.33,
           "pitch": 1.24
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118,
              "url": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_0_HS_0_0.png"
             }
            ]
           },
           "yaw": -88.33,
           "hfov": 10.37,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 1.24
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B",
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
       "yaw": -88.33,
       "distance": 1,
       "backwardYaw": 61.02
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "Float Room",
     "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
     "thumbnailUrl": "media/panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_t.jpg"
    },
    "yaw": 61.02,
    "distance": 1,
    "backwardYaw": -88.33
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "class": "ImageResourceLevel",
          "width": 4096,
          "url": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653, this.camera_B7F3C118_B8D2_B464_41C4_6F1A43B7CDD0); this.mainPlayList.set('selectedIndex', 27)"
          }
         ],
         "id": "overlay_8484A438_AFEC_7E70_41D2_58949DF37E3D",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -94.92,
           "pitch": -0.2
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118,
              "url": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_0_HS_0_0.png"
             }
            ]
           },
           "yaw": -94.92,
           "hfov": 10.37,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -0.2
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471",
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
       "yaw": -94.92,
       "distance": 1,
       "backwardYaw": 140.91
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "Sauna",
     "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
     "thumbnailUrl": "media/panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_t.jpg"
    },
    "yaw": 140.91,
    "distance": 1,
    "backwardYaw": -94.92
   }
  ],
  "vfov": 180,
  "partial": false,
  "label": "Hallway",
  "cardboardMenu": "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
  "thumbnailUrl": "media/panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_t.jpg"
 },
 {
  "id": "panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B",
 {
  "id": "panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD",
 {
  "id": "panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2",
 {
  "id": "panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471",
 {
  "id": "panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_camera",
    "media": "this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_camera",
    "media": "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_camera",
    "media": "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_camera",
    "media": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_camera",
    "media": "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_camera",
    "media": "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_camera",
    "media": "this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_camera",
    "media": "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_camera",
    "media": "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_camera",
    "media": "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_camera",
    "media": "this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_camera",
    "media": "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_camera",
    "media": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625_camera",
    "media": "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_camera",
    "media": "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_camera",
    "media": "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_camera",
    "media": "this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_camera",
    "media": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_camera",
    "media": "this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_camera",
    "media": "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_camera",
    "media": "this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_camera",
    "media": "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_camera",
    "media": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_camera",
    "media": "this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_camera",
    "media": "this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_camera",
    "media": "this.panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_camera",
    "media": "this.panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_camera",
    "media": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_camera",
    "media": "this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_camera",
    "media": "this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_camera",
    "media": "this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_camera",
    "media": "this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD_camera",
    "media": "this.panorama_A7F4823C_AD38_E08D_41DB_EA7A1AF438DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3_camera",
    "media": "this.panorama_BDC1971F_AD38_E091_41D3_7D61BB18B0D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04_camera",
    "media": "this.panorama_A2D32B19_AD38_E090_41E3_65D6470B6C04",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88_camera",
    "media": "this.panorama_B825884F_B79B_8F6D_41CC_CCDEBAE17B88",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913_camera",
    "media": "this.panorama_B91A8E4A_B798_8357_41E0_078E3AE98913",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445_camera",
    "media": "this.panorama_BBFC7976_B7B8_813E_41E3_8F433C835445",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171_camera",
    "media": "this.panorama_B8F8A5D7_B7BB_817D_41E2_AE9C86B0B171",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C_camera",
    "media": "this.panorama_A2D01EBC_AD38_E190_41C5_3F060C26E55C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF_camera",
    "media": "this.panorama_B88E9FF3_B7E7_8136_41C7_3A4F38457BBF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74_camera",
    "media": "this.panorama_B8867C7D_B7E7_872D_41E0_6A1541ED3C74",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA_camera",
    "media": "this.panorama_B88DEA4F_B7E8_836D_41D9_DA35F2FE48CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE_camera",
    "media": "this.panorama_A2D84DB5_AD38_A390_41E4_0C455448E8DE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268_camera",
    "media": "this.panorama_A7C7ACB3_B798_8736_41D9_E3C56EF73268",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625_camera",
    "media": "this.panorama_B8612093_B799_FFF5_41B3_F48845BB2625",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280_camera",
    "media": "this.panorama_B8B7F9C9_B7EF_8152_41E2_DFD4C6F4D280",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E_camera",
    "media": "this.panorama_B857BDE4_B7EF_8153_41D9_500CEE51639E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B_camera",
    "media": "this.panorama_B8AC4F86_B7EF_81DF_41C2_744511CC901B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17_camera",
    "media": "this.panorama_B5D282E7_B8CF_75AC_41B8_B64D413D9E17",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693_camera",
    "media": "this.panorama_B82AE6EA_B7B8_8357_41E0_168BBD96E693",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 18, 19)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B_camera",
    "media": "this.panorama_B8E15C55_B799_877D_41D7_D7702BFB827B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 19, 20)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F_camera",
    "media": "this.panorama_B8268FC9_B799_8155_41E6_6065FD275C1F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 20, 21)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE_camera",
    "media": "this.panorama_B31AA87D_B8F7_749D_41E0_EF80EB7EB4EE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 21, 22)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B_camera",
    "media": "this.panorama_B5389A77_B8D1_54AC_41CD_821D7E7A8A1B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 22, 23)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9_camera",
    "media": "this.panorama_8DA0B2B3_AFAC_FA71_41D1_22455E8799C9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 23, 24)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5_camera",
    "media": "this.panorama_B67E0456_B8D1_7CEC_41E5_D5A0E7830DB5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 24, 25)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B_camera",
    "media": "this.panorama_8E238C1C_AFAC_EE30_4194_094E9A8F364B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 25, 26)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5_camera",
    "media": "this.panorama_8E3B906C_AFAC_9617_41C7_866C1ABD8BA5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 26, 27)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653_camera",
    "media": "this.panorama_8E39F4C8_AFAC_9E10_41E5_C326FA644653",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 27, 28)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B_camera",
    "media": "this.panorama_B5083A04_B8F1_546C_41D9_25C58BDF642B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 28, 29)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD_camera",
    "media": "this.panorama_B5FD80A7_B8F1_55AC_41DD_393EEBC621CD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 29, 30)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2_camera",
    "media": "this.panorama_8DACC002_AFAC_9610_41D4_77B4A21DD0B2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 30, 31)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471_camera",
    "media": "this.panorama_8D59A422_AFAC_9E10_41E0_AECEA5BE7471",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C, 31, 0)"
   }
  ]
 },
 "this.Menu_B74E3F72_B8D2_ACA4_41D5_1859E2F0338F",
 {
  "id": "camera_B7351F92_B8D2_AC64_41BC_8362572229BF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.44,
   "pitch": 0
  }
 },
 {
  "id": "camera_B72ECF9A_B8D2_AC64_41D5_FBBDB1A8458B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.16,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7251FA3_B8D2_ABA4_41DC_7CFEE1CFF661",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.67,
   "pitch": 0
  }
 },
 {
  "id": "camera_B71E6FAC_B8D2_ABBC_41E1_49E3A1C98BB0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -115.27,
   "pitch": 0
  }
 },
 {
  "id": "camera_B716DFB5_B8D2_ABAD_41DD_8AA2996F2F3A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.28,
   "pitch": 0
  }
 },
 {
  "id": "camera_B70FCFBD_B8D2_AB9D_41DA_B2DF2C1558B7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.82,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8F9AFC5_B8D2_ABED_41D5_EB5018FCA586",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.62,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8F11FCE_B8D2_ABFF_41DA_BDB8CC1A45EF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.34,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8ECAFD7_B8D2_ABED_41D1_A664F50B294A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.75,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8E59FDF_B8D2_AB9D_41D0_D9876B824225",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.96,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8DF2FE8_B8D2_ABA3_41E4_81783FD7F0E6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.48,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8C86FF0_B8D2_ABA3_41AA_D377D0D08190",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.14,
   "pitch": 0
  }
 },
 {
  "id": "camera_A8C41FF8_B8D2_ABA4_41BF_E8D6DB624FA7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.05,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6FFC01D_B8D2_B49C_41E2_FA49C4AA59D9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.46,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6F4C025_B8D2_B4AC_41B1_6CE788CE34F3",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.26,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6E8C02E_B8D2_B4BC_41E1_DCDA25D1AAEE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.2,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6EE9036_B8D2_B4AC_41E6_595857BA1429",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.81,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6E2103F_B8D2_B49C_41E0_D5E808BDADB2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.87,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6D82047_B8D2_B4EC_41C6_1DEFBB06A84F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.4,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6DE2050_B8D2_B4E4_41DA_6B242613968C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6D3B059_B8D2_B4E4_41E1_9EF92EDCC9B0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6C99061_B8D2_B4A4_41BC_288F793A7007",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.67,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6CD006A_B8D2_B4A4_41D4_8B4750A5534D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6C34073_B8D2_B4A4_41D3_BA647FA2C41D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.05,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6B9007C_B8D2_B49C_41E1_86173C547B09",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.28,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6B1A084_B8D2_B46C_41B1_ED03350D1515",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.01,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6A9708D_B8D2_B47C_41E2_EFD904698F7D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.85,
   "pitch": 0
  }
 },
 {
  "id": "camera_B6A3D096_B8D2_B46C_41DA_51895871E72E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.99,
   "pitch": 0
  }
 },
 {
  "id": "camera_B69E609F_B8D2_B59C_41E3_CA82F6439F6A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.39,
   "pitch": 0
  }
 },
 {
  "id": "camera_B68810A8_B8D2_B5A4_41E6_9E6AFC772177",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.92,
   "pitch": 0
  }
 },
 {
  "id": "camera_B684E0B0_B8D2_B5A4_41D1_1045C229A0A9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.82,
   "pitch": 0
  }
 },
 {
  "id": "camera_B67EF0B9_B8D2_B5A4_41D3_AF20B13C0E1C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.46,
   "pitch": 0
  }
 },
 {
  "id": "camera_B66920C2_B8D2_B5E4_41B9_E1E1DAEFE706",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.98,
   "pitch": 0
  }
 },
 {
  "id": "camera_B665A0CA_B8D2_B5E4_41D2_B5596A58B115",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.41,
   "pitch": 0
  }
 },
 {
  "id": "camera_B65FF0D3_B8D2_B5E4_41D3_F984DA934358",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -118.98,
   "pitch": 0
  }
 },
 {
  "id": "camera_B64A00DC_B8D2_B59C_41E0_838427552240",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.58,
   "pitch": 0
  }
 },
 {
  "id": "camera_B64620E4_B8D2_B5AC_41E5_1295772DF862",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.55,
   "pitch": 0
  }
 },
 {
  "id": "camera_B63300ED_B8D2_B5BC_41E6_DA4937179E5B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.83,
   "pitch": 0
  }
 },
 {
  "id": "camera_B62F30F6_B8D2_B5AC_41DB_6E819EA89F3C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.23,
   "pitch": 0
  }
 },
 {
  "id": "camera_B61D90FE_B8D2_B59C_41DA_3D7F29251406",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.76,
   "pitch": 0
  }
 },
 {
  "id": "camera_B60AE107_B8D2_B46C_4181_53C2AFCBAB41",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.66,
   "pitch": 0
  }
 },
 {
  "id": "camera_B606910F_B8D2_B47C_41CB_5A504AD9655F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.75,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7F3C118_B8D2_B464_41C4_6F1A43B7CDD0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.09,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7EF012A_B8D2_B4A4_41E6_B999EFF6B177",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7DDB13D_B8D2_B49D_41DD_2303C15C11B9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.59,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7C9414B_B8D2_B4E5_41A1_FE6874A7029F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.55,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7C6E159_B8D2_B4E5_41E5_A61946483B3E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.59,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7B33168_B8D2_B4A3_41BB_5B696FAFF148",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.91,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7AF817C_B8D2_B4A3_41E3_0DA3A7935BDA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.2,
   "pitch": 0
  }
 },
 {
  "id": "camera_B79C518A_B8D2_B464_41DB_7625A9360F58",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.6,
   "pitch": 0
  }
 },
 {
  "id": "camera_B7897198_B8D2_B464_41D9_DFFDF3ADF7A0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.01,
   "pitch": 0
  }
 },
 {
  "id": "camera_B77861A6_B8D2_B7AC_41C1_EBFF6A57CB04",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.05,
   "pitch": 0
  }
 },
 {
  "id": "camera_B77741B7_B8D2_B7AC_41C2_B96D14BE68AF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.02,
   "pitch": 0
  }
 },
 {
  "id": "camera_B765C1BF_B8D2_B79B_41E0_575B5BD0FFC5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.85,
   "pitch": 0
  }
 },
 {
  "id": "camera_B75421C8_B8D2_B7E4_41E0_F737EF3B9226",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_B742D1D1_B8D2_B7E4_41DE_8C12258D5A2B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.3,
   "pitch": 0
  }
 }
], "children": [
 {
  "paddingLeft": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "shadow": false,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "progressLeft": 0,
  "playbackBarBottom": 5,
  "toolTipFontSize": 12,
  "toolTipFontColor": "#606060",
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 0,
  "transitionDuration": 500,
  "width": "100%",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderColor": "#000000",
  "height": "100%",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "toolTipPaddingLeft": 6,
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontStyle": "normal",
  "minWidth": 100,
  "minHeight": 50,
  "playbackBarBorderSize": 0,
  "id": "MainViewer",
  "progressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderSize": 0,
  "toolTipOpacity": 1,
  "toolTipBorderRadius": 3,
  "toolTipBorderSize": 1,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "progressHeight": 10
 },
 {
  "verticalAlign": "bottom",
  "layout": "horizontal",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": 200,
  "paddingTop": 0,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "gap": 10,
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "creationPolicy": "delayed",
  "backgroundOpacity": 0,
  "minWidth": 20,
  "minHeight": 20,
  "bottom": 0,
  "data": {
   "name": "Container450"
  },
  "paddingBottom": 0,
  "left": 0,
  "paddingLeft": 0,
  "right": 0,
  "children": [
   {
    "verticalAlign": "top",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowBlurRadius": 4,
    "layout": "horizontal",
    "paddingRight": 20,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 5,
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingTop": 3,
    "backgroundColorDirection": "vertical",
    "paddingTop": 10,
    "itemThumbnailShadowHorizontalLength": 3,
    "borderRadius": 5,
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowColor": "#000000",
    "gap": 10,
    "backgroundColorRatios": [
     0
    ],
    "selectedItemLabelFontWeight": "bold",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "horizontalAlign": "left",
    "itemThumbnailShadowOpacity": 0.8,
    "itemThumbnailBorderRadius": 5,
    "shadow": false,
    "class": "ThumbnailList",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0.2,
    "itemHorizontalAlign": "center",
    "itemOpacity": 1,
    "itemMode": "normal",
    "maxHeight": 600,
    "minWidth": 0,
    "minHeight": 0,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadow": true,
    "itemLabelTextDecoration": "none",
    "itemBorderRadius": 0,
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailOpacity": 1,
    "paddingBottom": 10,
    "data": {
     "name": "ThumbnailList451"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailScaleMode": "fit_outside",
    "paddingLeft": 20,
    "playList": "this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C",
    "maxWidth": 800,
    "itemPaddingBottom": 3,
    "itemBackgroundColorRatios": [],
    "itemThumbnailWidth": 100,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "itemPaddingLeft": 3
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "visible"
 }
], 
 "verticalAlign": "top",
 "overflow": "visible",
 "layout": "absolute",
 "paddingRight": 0,
 "desktopMipmappingEnabled": true,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "height": "100%",
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": true,
 "gap": 10,
 "shadow": false,
 "width": "100%",
 "class": "Player",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "minHeight": 20,
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "data": {
  "name": "Player448"
 },
 "paddingBottom": 0,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "start": "this.syncPlaylists([this.playList_A7A6B2D1_AD39_6191_41C9_BD2002564C4C,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "contentOpaque": false
})