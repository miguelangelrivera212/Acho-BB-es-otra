gdjs._50005Code = {};
gdjs._50005Code.localVariables = [];
gdjs._50005Code.idToCallbackMap = new Map();
gdjs._50005Code.GD_95952005Objects1= [];
gdjs._50005Code.GD_95952005Objects2= [];
gdjs._50005Code.GDregresar_95952005Objects1= [];
gdjs._50005Code.GDregresar_95952005Objects2= [];


gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects = Hashtable.newFrom({"regresar_2005": gdjs._50005Code.GDregresar_95952005Objects1});
gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects = Hashtable.newFrom({"regresar_2005": gdjs._50005Code.GDregresar_95952005Objects1});
gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects = Hashtable.newFrom({"regresar_2005": gdjs._50005Code.GDregresar_95952005Objects1});
gdjs._50005Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("regresar_2005"), gdjs._50005Code.GDregresar_95952005Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._50005Code.GDregresar_95952005Objects1 */
{for(var i = 0, len = gdjs._50005Code.GDregresar_95952005Objects1.length ;i < len;++i) {
    gdjs._50005Code.GDregresar_95952005Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("regresar_2005"), gdjs._50005Code.GDregresar_95952005Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50005Code.GDregresar_95952005Objects1 */
{for(var i = 0, len = gdjs._50005Code.GDregresar_95952005Objects1.length ;i < len;++i) {
    gdjs._50005Code.GDregresar_95952005Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("regresar_2005"), gdjs._50005Code.GDregresar_95952005Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50005Code.mapOfGDgdjs_9546_959550005Code_9546GDregresar_959595952005Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antes de Benito", false);
}
}

}


};

gdjs._50005Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50005Code.GD_95952005Objects1.length = 0;
gdjs._50005Code.GD_95952005Objects2.length = 0;
gdjs._50005Code.GDregresar_95952005Objects1.length = 0;
gdjs._50005Code.GDregresar_95952005Objects2.length = 0;

gdjs._50005Code.eventsList0(runtimeScene);
gdjs._50005Code.GD_95952005Objects1.length = 0;
gdjs._50005Code.GD_95952005Objects2.length = 0;
gdjs._50005Code.GDregresar_95952005Objects1.length = 0;
gdjs._50005Code.GDregresar_95952005Objects2.length = 0;


return;

}

gdjs['_50005Code'] = gdjs._50005Code;
