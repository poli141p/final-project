gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDRetryObjects1= [];
gdjs.winCode.GDRetryObjects2= [];
gdjs.winCode.GDMenuObjects1= [];
gdjs.winCode.GDMenuObjects2= [];
gdjs.winCode.GDgame_9595overObjects1= [];
gdjs.winCode.GDgame_9595overObjects2= [];
gdjs.winCode.GDsecretObjects1= [];
gdjs.winCode.GDsecretObjects2= [];
gdjs.winCode.GDForestBackgroundObjects1= [];
gdjs.winCode.GDForestBackgroundObjects2= [];
gdjs.winCode.GDscoreObjects1= [];
gdjs.winCode.GDscoreObjects2= [];
gdjs.winCode.GDDinoVitaObjects1= [];
gdjs.winCode.GDDinoVitaObjects2= [];
gdjs.winCode.GDFlatHeartBarObjects1= [];
gdjs.winCode.GDFlatHeartBarObjects2= [];
gdjs.winCode.GDTransparentDarkJoystickObjects1= [];
gdjs.winCode.GDTransparentDarkJoystickObjects2= [];
gdjs.winCode.GDGoldCoinObjects1= [];
gdjs.winCode.GDGoldCoinObjects2= [];
gdjs.winCode.GDUiHeartObjects1= [];
gdjs.winCode.GDUiHeartObjects2= [];


gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.winCode.GDRetryObjects1});
gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.winCode.GDMenuObjects1});
gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.winCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.winCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.winCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("secret"), gdjs.winCode.GDsecretObjects1);
{for(var i = 0, len = gdjs.winCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.winCode.GDscoreObjects1[i].getBehavior("Text").setText("Your Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.winCode.GDsecretObjects1.length ;i < len;++i) {
    gdjs.winCode.GDsecretObjects1[i].getBehavior("Text").setText("Secret ducks collected: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDRetryObjects1.length = 0;
gdjs.winCode.GDRetryObjects2.length = 0;
gdjs.winCode.GDMenuObjects1.length = 0;
gdjs.winCode.GDMenuObjects2.length = 0;
gdjs.winCode.GDgame_9595overObjects1.length = 0;
gdjs.winCode.GDgame_9595overObjects2.length = 0;
gdjs.winCode.GDsecretObjects1.length = 0;
gdjs.winCode.GDsecretObjects2.length = 0;
gdjs.winCode.GDForestBackgroundObjects1.length = 0;
gdjs.winCode.GDForestBackgroundObjects2.length = 0;
gdjs.winCode.GDscoreObjects1.length = 0;
gdjs.winCode.GDscoreObjects2.length = 0;
gdjs.winCode.GDDinoVitaObjects1.length = 0;
gdjs.winCode.GDDinoVitaObjects2.length = 0;
gdjs.winCode.GDFlatHeartBarObjects1.length = 0;
gdjs.winCode.GDFlatHeartBarObjects2.length = 0;
gdjs.winCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.winCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.winCode.GDGoldCoinObjects1.length = 0;
gdjs.winCode.GDGoldCoinObjects2.length = 0;
gdjs.winCode.GDUiHeartObjects1.length = 0;
gdjs.winCode.GDUiHeartObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDRetryObjects1.length = 0;
gdjs.winCode.GDRetryObjects2.length = 0;
gdjs.winCode.GDMenuObjects1.length = 0;
gdjs.winCode.GDMenuObjects2.length = 0;
gdjs.winCode.GDgame_9595overObjects1.length = 0;
gdjs.winCode.GDgame_9595overObjects2.length = 0;
gdjs.winCode.GDsecretObjects1.length = 0;
gdjs.winCode.GDsecretObjects2.length = 0;
gdjs.winCode.GDForestBackgroundObjects1.length = 0;
gdjs.winCode.GDForestBackgroundObjects2.length = 0;
gdjs.winCode.GDscoreObjects1.length = 0;
gdjs.winCode.GDscoreObjects2.length = 0;
gdjs.winCode.GDDinoVitaObjects1.length = 0;
gdjs.winCode.GDDinoVitaObjects2.length = 0;
gdjs.winCode.GDFlatHeartBarObjects1.length = 0;
gdjs.winCode.GDFlatHeartBarObjects2.length = 0;
gdjs.winCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.winCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.winCode.GDGoldCoinObjects1.length = 0;
gdjs.winCode.GDGoldCoinObjects2.length = 0;
gdjs.winCode.GDUiHeartObjects1.length = 0;
gdjs.winCode.GDUiHeartObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
