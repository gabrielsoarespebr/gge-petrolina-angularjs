const app = angular.module("ggePetrolina", ["ngRoute"]);

app.controller("ggePetrolinaCtrl", ($scope) => {
  // HOME PAGE
  $scope.socialMediaList = [
    {
      name: "Instagram",
      imgSrc: "https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png",
      linkSrc: "https://www.instagram.com/colegiogge/",
    },
    {
      name: "Facebook",
      imgSrc: "https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook.png",
      linkSrc: "https://www.facebook.com/colegiogge/",
    },
    {
      name: "YouTube",
      imgSrc:
        "https://img.icons8.com/sf-regular-filled/30/FFFFFF/youtube-play.png",
      linkSrc: "https://www.youtube.com/ggetvoficial",
    },
  ];

  $scope.bannerSlideList = [
    { imgSrc: "./assets/bannerMatricula.png", alt: "Matrículas abertas" },
    { imgSrc: "./assets/bannerMedicina.png", alt: "Aprovações em Medicina" },
    { imgSrc: "./assets/bannerOmu.png", alt: "Olimpíada de Matemática - OMU" },
    { imgSrc: "./assets/bannerFPS.png", alt: "Aprovações na FPS" },
  ];

  $scope.educationLevelList = [
    {
      name: "Educação Infantil",
      imgSrc: "./assets/ensinoInfantil.png",
    },
    {
      name: "Ensino Fundamental 1",
      imgSrc: "./assets/ensinoFundamental1.png",
    },
    {
      name: "Ensino Fundamental 2",
      imgSrc: "./assets/ensinoFundamental2.png",
    },
    {
      name: "Ensino Médio",
      imgSrc: "./assets/ensinoMedio.png",
    },
    {
      name: "Preparatório para Vestibulares",
      imgSrc: "./assets/ensinoPreVestibular.png",
    },
  ];

  count = 0;
  $scope.bannerSlide = $scope.bannerSlideList[count];

  $scope.updateSlide = function () {
    count++;
    $scope.bannerSlide =
      $scope.bannerSlideList[count % $scope.bannerSlideList.length];

    $scope.$apply();
  };

  setInterval($scope.updateSlide, 3500);

  // ABOUT PAGE
  $scope.aboutOption = 0;

  $scope.chooseAboutOption = (option) => {
    $scope.aboutOption = option;
  };

  // CONTACT PAGE
  $scope.departmentList = [
    { name: "Portal Acadêmico", value: 0 },
    { name: "Tesouraria", value: 1 },
    { name: "Matrículas", value: 2 },
    { name: "Pedagógico", value: 3 },
    { name: "Ouvidoria", value: 4 },
    { name: "Outro", value: 5 },
  ];

  $scope.sendMessage = (message) => {
    console.log(angular.copy(message));
    delete message;
    alert("Mensagem enviada.");
  };
});

app.config(($routeProvider) => {
  $routeProvider
    .when("/", { templateUrl: "./pages/home/index.html" })
    .when("/about", { templateUrl: "./pages/about/index.html" })
    .when("/contact", { templateUrl: "./pages/contact/index.html" })
    .otherwise({ redirectTo: "/" });
});
