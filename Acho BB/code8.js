gdjs.BOOMCode = {};
gdjs.BOOMCode.localVariables = [];
gdjs.BOOMCode.idToCallbackMap = new Map();
gdjs.BOOMCode.GDBoom_9595fondoObjects1= [];
gdjs.BOOMCode.GDBoom_9595fondoObjects2= [];
gdjs.BOOMCode.GDPeriodicoObjects1= [];
gdjs.BOOMCode.GDPeriodicoObjects2= [];
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects1= [];
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects2= [];


gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects = Hashtable.newFrom({"Periodico": gdjs.BOOMCode.GDPeriodicoObjects1});
gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects = Hashtable.newFrom({"Periodico": gdjs.BOOMCode.GDPeriodicoObjects1});
gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects = Hashtable.newFrom({"Periodico": gdjs.BOOMCode.GDPeriodicoObjects1});
gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDBotonVolver_95959595ELBOOMObjects1Objects = Hashtable.newFrom({"BotonVolver_ELBOOM": gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects1});
gdjs.BOOMCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Periodico"), gdjs.BOOMCode.GDPeriodicoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BOOMCode.GDPeriodicoObjects1 */
{for(var i = 0, len = gdjs.BOOMCode.GDPeriodicoObjects1.length ;i < len;++i) {
    gdjs.BOOMCode.GDPeriodicoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Periodico"), gdjs.BOOMCode.GDPeriodicoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "El Salto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Periodico"), gdjs.BOOMCode.GDPeriodicoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDPeriodicoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.BOOMCode.GDPeriodicoObjects1 */
{for(var i = 0, len = gdjs.BOOMCode.GDPeriodicoObjects1.length ;i < len;++i) {
    gdjs.BOOMCode.GDPeriodicoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_ELBOOM"), gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BOOMCode.mapOfGDgdjs_9546BOOMCode_9546GDBotonVolver_95959595ELBOOMObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Vida del artista", false);
}
}

}


};

gdjs.BOOMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BOOMCode.GDBoom_9595fondoObjects1.length = 0;
gdjs.BOOMCode.GDBoom_9595fondoObjects2.length = 0;
gdjs.BOOMCode.GDPeriodicoObjects1.length = 0;
gdjs.BOOMCode.GDPeriodicoObjects2.length = 0;
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects1.length = 0;
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects2.length = 0;

gdjs.BOOMCode.eventsList0(runtimeScene);
gdjs.BOOMCode.GDBoom_9595fondoObjects1.length = 0;
gdjs.BOOMCode.GDBoom_9595fondoObjects2.length = 0;
gdjs.BOOMCode.GDPeriodicoObjects1.length = 0;
gdjs.BOOMCode.GDPeriodicoObjects2.length = 0;
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects1.length = 0;
gdjs.BOOMCode.GDBotonVolver_9595ELBOOMObjects2.length = 0;


return;

}

gdjs['BOOMCode'] = gdjs.BOOMCode;
