export default [
    {
        "id": "5e60ce15e0b7c15e994c942d",
        "name": "homepage",
        "title": "HomePage",
        "menuImage": "/images/Home@3x.png",
        "contents": [
            {
                "title": "image",
                "description": "background image file",
                "required": true,
                "multiLang": false
            }
        ],
        "order": 1,
        "active": true
    },
    {
        "id": "5e60ce15e0b7c15e994c942e",
        "name": "videos",
        "title": "Videos",
        "menuImage": "/images/video@3x.png",
        "titleImage": "/images/Header_Videos.png",
        "contents": [
            {
                "title": "main video",
                "description": "string",
                "required": true,
                "values": {
                    "en": "test"
                },
                "multiLang": false
            },
            {
                "title": "secondary video",
                "description": "string",
                "required": false,
                "values": {
                    "en": "test2"
                },
                "multiLang": false
            }
        ],
        "order": 2,
        "active": true
    },
    {
        "id": "5e60ce15e0b7c15e994c942f",
        "name": "gameplay",
        "title": "Gameplay Story",
        "menuImage": "/images/gamePlay@3x.png",
        "titleImage": "/images/Header_Gameplay.png",
        "contents": [
            {
                "title": "pic1",
                "description": "string",
                "required": true,
                "values": {
                    "en": "asd"
                },
                "multiLang": false
            },
            {
                "title": "pic2",
                "description": "string",
                "required": true,
                "multiLang": false
            },
            {
                "title": "pic3",
                "description": "string",
                "required": true,
                "values": {
                    "en": "ddd"
                },
                "multiLang": false
            }
        ],
        "order": 3,
        "active": true
    },
    {
        "id": "5e60ce15e0b7c15e994c9430",
        "name": "gallery",
        "title": "Gallery",
        "menuImage": "/images/gallery@3x.png",
        "titleImage": "/images/Header_Gallery.png",
        "contents": [
            {
                "title": "pic1",
                "description": "string",
                "unlimited": true,
                "values": {
                    "en": [
                        "as1",
                        "a1",
                        "asdaa3"
                    ]
                },
                "multiLang": false
            }
        ],
        "order": 4,
        "active": true
    },
    {
        "id": "5e60ce15e0b7c15e994c9431",
        "name": "news",
        "title": "News",
        "menuImage": "/images/news@3x.png",
        "titleImage": "/images/Header_News.png",
        "contents": [
            {
                "title": "news item",
                "description": "string",
                "unlimited": true,
                "values": {
                    "en": [
                        "a"
                    ]
                },
                "multiLang": true
            }
        ],
        "order": 5,
        "active": true
    },
    {
        "id": "5e60ce15e0b7c15e994c9432",
        "name": "joinus",
        "title": "Join US",
        "menuImage": "/images/join@3x.png",
        "contents": [
            {}
        ],
        "order": 6,
        "active": true
    }
];