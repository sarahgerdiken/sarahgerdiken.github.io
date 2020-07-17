var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "EINGANG",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "yaw": 0.03238864634591465,
        "pitch": 0.011386224256426658,
        "fov": 1.4692970016584703
      },
      "linkHotspots": [
        {
          "yaw": 0.24624260650186258,
          "pitch": 0.15368238311305404,
          "rotation": 0,
          "target": "1-watering-hole"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.30613552707345093,
          "pitch": 0.4078075830578225,
          "title": "Willkommen!<br>",
          "text": "Die Schule der Zukunft beruft sich auf eine Neuinterpretation der Wunderkammer des 18. Jahrhunderts. Sie formuliert sich von einem Lernraum, in welchem Wissen gesammelt und geordnet wird, zu einer adaptiven Wissenlandschaft. <br>"
        },
        {
          "yaw": -0.9466086410166774,
          "pitch": -0.0585254949375269,
          "title": "Stundenplan",
          "text": "Die Schüler werden in drei Lernzüge, die sich nach Interessen richten, unterteilt: creators, changemakers und inventors. Der Fokus richtet sich in allen Fällen auf das Erlernen von kommunikativen Fähigkeiten, Kollaboration, Kreativität und kritischen Denken. Die Züge werden als Richtlinien verstanden, welche Überschneidungen in ihren Stundenplänen zulassen. <br>"
        }
      ]
    },
    {
      "id": "1-watering-hole",
      "name": "WATERING HOLE",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.18040550007155076,
        "pitch": 0.10616855753917065,
        "fov": 1.4692970016584703
      },
      "linkHotspots": [
        {
          "yaw": -0.6157653162141656,
          "pitch": 0.3006479606402621,
          "rotation": 0,
          "target": "2-cave"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9808788136977249,
          "pitch": 0.31858947199850185,
          "title": "watering hole<br>",
          "text": "Die Wissenlandschaft durchzieht das gesamte Schulgebäude und ist in ihrer physischen Ausprägung als Seilnetzstruktur zu verstehen. Die Wasserstelle ist ein Ort an dem sich in größeren Gruppen über das neu Erlernte ausgetauscht werdne kann. <br>"
        },
        {
          "yaw": -0.34707590589261983,
          "pitch": 0.3411204850738052,
          "title": "Raum<br>",
          "text": "Nach den Theorien Bernard Tschumis ist Raum als eine Interaktion zwischen Mensch, seinen Bewegungen und den vorhandenen Objekten zu verstehen. Die Wissenslandschaft versucht in unterschiedlicher räumlicher Interpretation auf diese Theorie einzugehen.<br>"
        },
        {
          "yaw": 0.5000863039131644,
          "pitch": 0.21681694842060928,
          "title": "Erklärungsdiagramm<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-cave",
      "name": "CAVE",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4692970016584703
      },
      "linkHotspots": [
        {
          "yaw": -0.579921860977155,
          "pitch": -0.1623604967911021,
          "rotation": 0,
          "target": "3-mountain-top"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3154637313040105,
          "pitch": 0.2578488132206278,
          "title": "cave<br>",
          "text": "Neben der watering hole bietet die cave als weitere Raumtypologie die Möglichkeit in einem abgesonderten Bereich für sich allein zu arbeiten.<br>"
        },
        {
          "yaw": -1.5412836064177888,
          "pitch": 0.24897813457925366,
          "title": "Raum<br>",
          "text": "Die Wissenslandschaft wird durch einen virtuellen Layer unterstützt, der Wissen speichert und sich an die individuelle Bedürfnisse des Nutzers anpassen kann<br>"
        },
        {
          "yaw": -2.3511565305118616,
          "pitch": -0.14188037791932828,
          "title": "Erklärungsdiagramm<br>",
          "text": "Text"
        },
        {
          "yaw": -0.7210693548429781,
          "pitch": 0.22468931169785655,
          "title": "Virtueller Layer<br>",
          "text": “<video controls><source src= video/video.mp4 type= video/mp4>Your browser does not support the video element.</video>”
        }
      ]
    },
    {
      "id": "3-mountain-top",
      "name": "MOUNTAIN TOP",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3091586660207142,
          "pitch": 0.11286759413570024,
          "rotation": 0,
          "target": "4-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0395642486534342,
          "pitch": 0.6864156533170629,
          "title": "mountain top<br>",
          "text": "Der mountain top ist als Ort der Reflektion zu verstehen an dem bereits Erlerntes, auch von anderen, überblickt werden kann. <br>"
        },
        {
          "yaw": -0.018843300158629006,
          "pitch": 0.31076790137947796,
          "title": "Virtueller Layer<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-auditorium",
      "name": "AUDITORIUM",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12335257451628756,
        "pitch": 0.11957445856799431,
        "fov": 1.4692970016584703
      },
      "linkHotspots": [
        {
          "yaw": -1.9270214995709782,
          "pitch": 0.02876583464634841,
          "rotation": 0,
          "target": "5-sitzplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9313371640959307,
          "pitch": 0.018419083485182952,
          "title": "auditorium<br>",
          "text": "Kann zur informellen und formellen Nutzung des Ideenaustauschs auch mithilfe des virtuellen Wissenslayers genutzt werden.<br>"
        },
        {
          "yaw": -0.44928926899259025,
          "pitch": -0.007818136285781208,
          "title": "Virtueller Layer<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-sitzplatz",
      "name": "SITZPLATZ",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.2586102465929763,
        "pitch": 0.037917341978284114,
        "fov": 1.4692970016584703
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.5068157188331863,
          "pitch": 0.409725940132585,
          "title": "Sitzplatzanlagen<br>",
          "text": "Neben der zentralen Funktion der Wissenslandschaft ist die Schule mit klassischen Sitzplatzanlagen, Ateliers und Werkstätten ausgestattet.<br>"
        }
      ]
    }
  ],
  "name": "Wunderkammer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
