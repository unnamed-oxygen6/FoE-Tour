var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.39359291262335994,
        "pitch": -0.2052430644620813,
        "fov": 1.1615884073811618
      },
      "linkHotspots": [
        {
          "yaw": 0.2911067901204323,
          "pitch": -0.08593137709109655,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6951682647615307,
          "pitch": 0.110483178105234,
          "title": "Welcome to NUS!",
          "text": "Let's start off with the Faculty of Engineering."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.0344615772665726,
        "pitch": -0.06113623196742424,
        "fov": 1.1615884073811618
      },
      "linkHotspots": [
        {
          "yaw": -3.121915133218806,
          "pitch": 0.06346291845282792,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.87947500616165,
          "pitch": 0.2837420131807278,
          "title": "Title",
          "text": "My my. These students are diligent and studious!"
        },
        {
          "yaw": -0.9798913910067917,
          "pitch": -0.054158818799294295,
          "title": "Yummmy..!",
          "text": "Don't ignore that growling sound from your tummy. Grab a bite or two here!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2523584828089902,
        "pitch": -0.28309923020782257,
        "fov": 1.1615884073811618
      },
      "linkHotspots": [
        {
          "yaw": 0.12479571648401588,
          "pitch": 0.05256801056158977,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.836805010753924,
          "pitch": -0.025145945906196232,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.40170205130500847,
          "pitch": -0.014815244221964008,
          "title": "Title",
          "text": "Shall we head inside?"
        }
      ]
    }
  ],
  "name": "FoE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
