export default [
  {
    _id: {
      $oid: "65d1e7b80be4b17beadbf502",
    },
    name: "homepage",
    title: "Homepage",
    contents: [
      {
        title: "image",
        description: "background image file",
        required: true,
        multiLang: false,
      },
    ],
    order: 1,
    active: true,
    __v: 0,
    menuImage: "/images/Home@3x.png",
  },
  {
    _id: {
      $oid: "65d8c1d4a0e96692b1acb506",
    },
    name: "videos",
    title: "Videos",
    menuImage: "/images/video@3x.png",
    titleImage: "/images/Header_Videos.png",
    contents: [
      {
        title: "main video",
        description: "Youtube video",
        required: true,
        multiLang: false,
        values: {
          "en-US": {
            value: "o1cm6Syw_9c",
          },
          de: {
            value: "o1cm6Syw_9c",
          },
        },
      },
    ],
    order: 2,
    active: true,
  },
  {
    _id: {
      $oid: "65d8c20fa0e96692b1acb509",
    },
    name: "gameplay",
    title: "Gameplay Story",
    menuImage: "/images/gamePlay@3x.png",
    titleImage: "/images/Header_Gameplay.png",

    contents: [{}],
    active: true,
    order: 3,
  },
  {
    _id: {
      $oid: "65d8cae1a0e96692b1acb50b",
    },
    name: "gallery",
    title: "Gallery",
    menuImage: "/images/gallery@3x.png",
    titleImage: "/images/Header_Gallery.png",
    contents: [
      {
        multiLang: false,
        unlimited: true,
        values: {
          de: [
            {
              value: "/images/galleries/GamePlay1.jpeg",
            },
            {
              value: "/images/galleries/GamePlay2.jpeg",
            },
            {
              value: "/images/galleries/GamePlay3.jpeg",
            },
            {
              value: "/images/galleries/GamePlay4.jpeg",
            },
            {
              value: "/images/galleries/GamePlay5.jpeg",
            },
            {
              value: "/images/galleries/GamePlay6.jpeg",
            },
            {
              value: "/images/galleries/GamePlay7.jpeg",
            },
            {
              value: "/images/galleries/GamePlay8.jpeg",
            },
            {
              value: "/images/galleries/GamePlay9.jpeg",
            },
            {
              value: "/images/galleries/GamePlay10.jpeg",
            },
            {
              value: "/images/galleries/GamePlay11.jpeg",
            },
            {
              value: "/images/galleries/GamePlay12.jpeg",
            },
            {
              value: "/images/galleries/GamePlay13.jpeg",
            },
            {
              value: "/images/galleries/GamePlay14.jpeg",
            },
            {
              value: "/images/galleries/GamePlay15.jpeg",
            },
          ],
          "en-US": [
            {
              value: "/images/galleries/GamePlay1.jpeg",
            },
            {
              value: "/images/galleries/GamePlay2.jpeg",
            },
            {
              value: "/images/galleries/GamePlay3.jpeg",
            },
            {
              value: "/images/galleries/GamePlay4.jpeg",
            },
            {
              value: "/images/galleries/GamePlay5.jpeg",
            },
            {
              value: "/images/galleries/GamePlay6.jpeg",
            },
            {
              value: "/images/galleries/GamePlay7.jpeg",
            },
            {
              value: "/images/galleries/GamePlay8.jpeg",
            },
            {
              value: "/images/galleries/GamePlay9.jpeg",
            },
            {
              value: "/images/galleries/GamePlay10.jpeg",
            },
            {
              value: "/images/galleries/GamePlay11.jpeg",
            },
            {
              value: "/images/galleries/GamePlay12.jpeg",
            },
            {
              value: "/images/galleries/GamePlay13.jpeg",
            },
            {
              value: "/images/galleries/GamePlay14.jpeg",
            },
            {
              value: "/images/galleries/GamePlay15.jpeg",
            },
          ],
        },
      },
    ],

    order: 4,
    active: true,
  },
  {
    _id: {
      $oid: "65d8c200a0e96692b1acb508",
    },
    name: "news",
    title: "News",
    menuImage: "/images/news@3x.png",
    titleImage: "/images/Header_News.png",
    contents: [
      {
        hasLink: true,
        unlimited: true,
        multiLang: true,
        values: {
          de: [
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
              link: "",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
          ],
          "en-US": [
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
              link: "www.google.com",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
              link: "www.google.com",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
            {
              value:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
          ],
        },
      },
    ],

    order: 5,
    active: true,
  },

  {
    _id: {
      $oid: "65d8c21da0e96692b1acb50a",
    },
    name: "joinus",
    title: "Join US",
    menuImage: "/images/join@3x.png",
    contents: [{}],
    order: 6,
    active: true,
  },
];
