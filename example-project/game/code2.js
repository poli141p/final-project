gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDRetryObjects1= [];
gdjs.game_32overCode.GDRetryObjects2= [];
gdjs.game_32overCode.GDMenuObjects1= [];
gdjs.game_32overCode.GDMenuObjects2= [];
gdjs.game_32overCode.GDgame_9595overObjects1= [];
gdjs.game_32overCode.GDgame_9595overObjects2= [];
gdjs.game_32overCode.GDForestBackgroundObjects1= [];
gdjs.game_32overCode.GDForestBackgroundObjects2= [];
gdjs.game_32overCode.GDscoreObjects1= [];
gdjs.game_32overCode.GDscoreObjects2= [];
gdjs.game_32overCode.GDDinoVitaObjects1= [];
gdjs.game_32overCode.GDDinoVitaObjects2= [];
gdjs.game_32overCode.GDFlatHeartBarObjects1= [];
gdjs.game_32overCode.GDFlatHeartBarObjects2= [];
gdjs.game_32overCode.GDTransparentDarkJoystickObjects1= [];
gdjs.game_32overCode.GDTransparentDarkJoystickObjects2= [];
gdjs.game_32overCode.GDGoldCoinObjects1= [];
gdjs.game_32overCode.GDGoldCoinObjects2= [];
gdjs.game_32overCode.GDUiHeartObjects1= [];
gdjs.game_32overCode.GDUiHeartObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.game_32overCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDscoreObjects1[i].getBehavior("Text").setText("Your Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDRetryObjects1.length = 0;
gdjs.game_32overCode.GDRetryObjects2.length = 0;
gdjs.game_32overCode.GDMenuObjects1.length = 0;
gdjs.game_32overCode.GDMenuObjects2.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDForestBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDForestBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDscoreObjects1.length = 0;
gdjs.game_32overCode.GDscoreObjects2.length = 0;
gdjs.game_32overCode.GDDinoVitaObjects1.length = 0;
gdjs.game_32overCode.GDDinoVitaObjects2.length = 0;
gdjs.game_32overCode.GDFlatHeartBarObjects1.length = 0;
gdjs.game_32overCode.GDFlatHeartBarObjects2.length = 0;
gdjs.game_32overCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDGoldCoinObjects1.length = 0;
gdjs.game_32overCode.GDGoldCoinObjects2.length = 0;
gdjs.game_32overCode.GDUiHeartObjects1.length = 0;
gdjs.game_32overCode.GDUiHeartObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDRetryObjects1.length = 0;
gdjs.game_32overCode.GDRetryObjects2.length = 0;
gdjs.game_32overCode.GDMenuObjects1.length = 0;
gdjs.game_32overCode.GDMenuObjects2.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDForestBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDForestBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDscoreObjects1.length = 0;
gdjs.game_32overCode.GDscoreObjects2.length = 0;
gdjs.game_32overCode.GDDinoVitaObjects1.length = 0;
gdjs.game_32overCode.GDDinoVitaObjects2.length = 0;
gdjs.game_32overCode.GDFlatHeartBarObjects1.length = 0;
gdjs.game_32overCode.GDFlatHeartBarObjects2.length = 0;
gdjs.game_32overCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDGoldCoinObjects1.length = 0;
gdjs.game_32overCode.GDGoldCoinObjects2.length = 0;
gdjs.game_32overCode.GDUiHeartObjects1.length = 0;
gdjs.game_32overCode.GDUiHeartObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
