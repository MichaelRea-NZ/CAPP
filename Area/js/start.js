/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals  document  console  */

function addSplashListeners() {
  // eslint-disable-line no-unused-vars
  // eslint-disable-line no-unused-vars
  document
    .getElementById("next_continue_button")
    .addEventListener("click", continueCampaignHandler, false)

  document
    .getElementById("next_new_button")
    .addEventListener("click", startCampaignHandler, false)
}

function removeSplashListerners() {
  document
    .getElementById("next_continue_button")
    .removeEventListener("click", continueCampaignHandler, false)

  document
    .getElementById("next_new_button")
    .removeEventListener("click", startCampaignHandler, false)
}

function continueCampaignHandler() {
  // eslint-disable-line no-unused-vars
  console.log("continue")
  startCampaign()
}

function startCampaignHandler() {
  // eslint-disable-line no-unused-vars
  console.log("start")
  startCampaign()
  displayUnits()
}

function startCampaign() {
  removeSplashListerners()
  document.body.style.overflow = "visible"
  var startTitle = document.getElementById("splash_title")
  document.body.removeChild(startTitle)
  var startBackground = document.getElementById("splash_background")
  document.body.removeChild(startBackground)
  var canvasBoard = document.getElementById("board") // eslint-disable-line no-unused-vars
  var arrowImage = document.getElementById("attack_arrow") // eslint-disable-line no-unused-vars
  var arrowCanvas = document.getElementById("arrow_canvas")
  var arrowsContext = arrowCanvas.getContext("2d") // eslint-disable-line no-unused-vars
  var germanImage = document.getElementById("german_image") // eslint-disable-line no-unused-vars
  var alliedImage = document.getElementById("allied_image") // eslint-disable-line no-unused-vars
  var unitsCanvas = document.getElementById("units_canvas")
  var unitsContext = unitsCanvas.getContext("2d") // eslint-disable-line no-unused-vars
  unitsCanvas.width = document.getElementById("map_image").width
  unitsCanvas.height = document.getElementById("map_image").height
  arrowCanvas.width = document.getElementById("map_image").width
  arrowCanvas.height = document.getElementById("map_image").height
}
