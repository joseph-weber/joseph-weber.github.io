$(()=> {

  //modal 2 - Phil
  const $openModal_1 = $('#project1');
  const $modal_1 = $('#modal_1');
  const $closeModal_1 = $('#close_1');
  //modal 2 - Quitter
  const $openModal_2 = $('#project2');
  const $modal_2 = $('#modal_2');
  const $closeModal_2 = $('#close_2');
  //modal 3 - Guy Fighter
  const $openModal_3 = $('#project3');
  const $modal_3 = $('#modal_3');
  const $closeModal_3 = $('#close_3');
  //modal 4 - Pawsibilities
  const $openModal_4 = $('#project4');
  const $modal_4 = $('#modal_4');
  const $closeModal_4 = $('#close_4');
  //modal 5 - Rentr
  const $openModal_5 = $('#project5');
  const $modal_5 = $('#modal_5');
  const $closeModal_5 = $('#close_5');
  //main content - Main
  const $main = $('#main-content');
  //about me - about me
  const $about = $('#aboutMe');
  //projects - projects
  const $projects = $('#myProjects');
  // about button
  const $aboutButton = $('#aboutButton');
  // all modals
  const $allModals = $('.modal');


  //Event Handlers
 //modal 1 Philanthropedia
 const $openModal_1Fnc = () => {
   $modal_1.css("display", "block");
   $main.css("display", "none");
   $about.css("display", "none");
 }
 const $closeModal_1Fnc = () => {
   $main.css("display", "block");
   $modal_1.css("display", "none");
   $about.css("display", "block");
 }
 //modal 2 Quitter
 const $openModal_2Fnc = () => {
   $modal_2.css("display", "block");
   $main.css("display", "none");
   $about.css("display", "none");
 }
 const $closeModal_2Fnc = () => {
   $main.css("display", "block");
   $modal_2.css("display", "none");
   $about.css("display", "block");
 }
 //modal 3 Guy-Fighter
 const $openModal_3Fnc = () => {
   $modal_3.css("display", "block");
   $main.css("display", "none");
   $about.css("display", "none");
 }
 const $closeModal_3Fnc = () => {
   $main.css("display", "block");
   $modal_3.css("display", "none");
   $about.css("display", "block");
 }
 //modal 4 Pawsibilities
 const $openModal_4Fnc = () => {
   $modal_4.css("display", "block");
   $main.css("display", "none");
   $about.css("display", "none");
 }
 const $closeModal_4Fnc = () => {
   $main.css("display", "block");
   $modal_4.css("display", "none");
   $about.css("display", "block");
 }

 //modal 5 Rentr
 const $openModal_5Fnc = () => {
   $modal_5.css("display", "block");
   $main.css("display", "none");
   $about.css("display", "none");
 }
 const $closeModal_5Fnc = () => {
   $main.css("display", "block");
   $modal_5.css("display", "none");
   $about.css("display", "block");
 }

 const $project_Fnc = () => {
   $main.css("display", "block");
   $about.css("display", "none");
 }

 const $about_Fnc = () => {
   $main.css("display", "none");
   $about.css("display", "block");
   $modal_1.css("display", "none");
   $modal_2.css("display", "none");
   $modal_3.css("display", "none");
   $modal_4.css("display", "none");
   $modal_5.css("display", "none");
 }



  $openModal_1.on("click", $openModal_1Fnc);
  $closeModal_1.on("click", $closeModal_1Fnc);
  $openModal_2.on("click", $openModal_2Fnc);
  $closeModal_2.on("click", $closeModal_2Fnc);
  $openModal_3.on("click", $openModal_3Fnc);
  $closeModal_3.on("click", $closeModal_3Fnc);
  $openModal_4.on("click", $openModal_4Fnc);
  $closeModal_4.on("click", $closeModal_4Fnc);
  $openModal_5.on("click", $openModal_5Fnc);
  $closeModal_5.on("click", $closeModal_5Fnc);
  $projects.on("click", $project_Fnc);
  $aboutButton.on("click", $about_Fnc);




});
