const MENU = [
  {
    title: "Arranjo do dia",
    data: [
      {
        id: "1",
        title: "Arranjo de Cravos e Eucalipto",
        price: 59.9,
        description:
          "Um arranjo exuberante onde cravos vermelhos se destacam entre ramos auxiliares de eucalipto e limonium, criando uma composição cheia de vida e elegância.",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Neste arranjo floral, os cravos vermelhos assumem o centro do palco, suas flores vibrantes e sedutoras capturam o olhar e aquecem o coração com sua paixão ardente. Em meio a eles, os ramos auxiliares de eucalipto emprestam sua frescura revigorante, enquanto o limonium adiciona uma leveza graciosa à composição. Juntos, esses elementos se entrelaçam em uma dança de cores e aromas, criando um cenário de beleza e encanto para deleitar os sentidos.",
          "Arranjo de cravos de variados tamanhos;",
          "Ramos auxiliares de eucalipto;",
          "Ramos auxiliares de limonium;",
          "Deixar o arranjo em vaso com água em temperatura ambiente, trocar toda semana.",
        ],
      },
    ],
  },
  {
    title: "Flores",
    data: [
      {
        id: "2",
        title: "Galho de Astromélia",
        price: 10.0,
        description:
          "Viva com intensidade! Astromélias vermelhas são a vibrante celebração da vida.",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "As astromélias vermelhas são frequentemente associadas ao entusiasmo, à energia e à paixão. Elas podem transmitir sentimentos de amor ardente e devoção, bem como expressar alegria e felicidade.",
          "01 galho de astromélias vermelhas.",
          "Quantidade de flores por galho pode variar.",
          "Cortar galho na diagonal para maior tempo de vida da flor.",
        ],
      },
      {
        id: "3",
        title: "Galho de Peônias",
        price: 15.9,
        description: "Elegância em cada pétala, a expressão da pureza em flor.",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "As peônias brancas são frequentemente associadas à pureza, à inocência e à beleza feminina. Elas também podem simbolizar sinceridade e uma vida feliz e próspera.",
          "01 galho de peônias brancas.",
          "Quantidade de flores por galho pode variar.",
          "Cortar galho na diagonal para maior tempo de vida da flor.",
        ],
      },
      {
        id: "4",
        title: "Galho de Cravos",
        price: 7.5,
        description:
          "Paixão desabrochada: cravos vermelhos, símbolos ardentes de amor e devoção.",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Os cravos vermelhos são frequentemente associados ao amor e à paixão. Eles podem representar amor romântico, admiração e respeito. Também são usados para expressar coragem e força de vontade.",
          "01 galho de cravos vermelhos.",
          "Quantidade de flores por galho pode variar.",
          "Cortar galho na diagonal para maior tempo de vida da flor.",
        ],
      },
    ],
  },
  {
    title: "Ramos",
    data: [
      {
        id: "5",
        title: "Ramo de mosquitinho",
        price: 4.5,
        description:
          "Pequenas flores em forma de estrela, agrupadas em inflorescências delicadas e arejadas que se assemelham a nuvens de pequenas flores.",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "01 ramo de mosquitinhos brancos",
          "Ramo de mosquitinhos ressecados, não é necessário colocá-los na água! ",
          "O mosquitinho é comumente usado em arranjos florais como flor de preenchimento devido à sua aparência delicada e elegante. Ele complementa outras flores, adicionando textura, volume e uma sensação de leveza.",
        ],
      },
      {
        id: "6",
        title: "Ramo de eucalipto",
        price: 6.0,
        description:
          "Refresque seus sentidos com o aroma revigorante do eucalipto, uma sinfonia verde que encanta e renova.",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: [
          "01 ramo de eucalipto;",
          "Ramo de eucalipto ressecado, não é necessário colocá-los na água!",
          "Quantidade de folhas por galho pode variar.",
        ],
      },
    ],
  },
  {
    title: "Adicionais",
    data: [
      {
        id: "7",
        title: "Papel pardo",
        price: 5.00,
        thumbnail: require("../../assets/products/thumbnail/8.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Papel pardo para embrulho de presentes e buquês! Utilize sua criatividade e dê um toque especial para seus ramos.",
        ingredients: ["ATENÇÃO: Foto meramente ilustrativa.", "Inclui: 01 folha de papel pardo 50x50cm"],
      },
      {
        id: "8",
        title: "Cartão para recado",
        price: 2.50,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/8.png"),
        description:
          "Cartão em papel de gramatura alta para recado! Para escrever seu coração ao presentear uma pessoa querida.",
        ingredients: ["Inclui: 01 cartão para recado 04x06cm"],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
