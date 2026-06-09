gdjs.canchaCode = {};
gdjs.canchaCode.localVariables = [];
gdjs.canchaCode.idToCallbackMap = new Map();
gdjs.canchaCode.GD_95952024Objects1= [];
gdjs.canchaCode.GD_95952024Objects2= [];
gdjs.canchaCode.GDboton_9595regresar_95952024Objects1= [];
gdjs.canchaCode.GDboton_9595regresar_95952024Objects2= [];


gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects = Hashtable.newFrom({"boton_regresar_2024": gdjs.canchaCode.GDboton_9595regresar_95952024Objects1});
gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects = Hashtable.newFrom({"boton_regresar_2024": gdjs.canchaCode.GDboton_9595regresar_95952024Objects1});
gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects = Hashtable.newFrom({"boton_regresar_2024": gdjs.canchaCode.GDboton_9595regresar_95952024Objects1});
gdjs.canchaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2024"), gdjs.canchaCode.GDboton_9595regresar_95952024Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BOOM", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2024"), gdjs.canchaCode.GDboton_9595regresar_95952024Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.canchaCode.GDboton_9595regresar_95952024Objects1 */
{for(var i = 0, len = gdjs.canchaCode.GDboton_9595regresar_95952024Objects1.length ;i < len;++i) {
    gdjs.canchaCode.GDboton_9595regresar_95952024Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2024"), gdjs.canchaCode.GDboton_9595regresar_95952024Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.canchaCode.mapOfGDgdjs_9546canchaCode_9546GDboton_95959595regresar_959595952024Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.canchaCode.GDboton_9595regresar_95952024Objects1 */
{for(var i = 0, len = gdjs.canchaCode.GDboton_9595regresar_95952024Objects1.length ;i < len;++i) {
    gdjs.canchaCode.GDboton_9595regresar_95952024Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


};

gdjs.canchaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.canchaCode.GD_95952024Objects1.length = 0;
gdjs.canchaCode.GD_95952024Objects2.length = 0;
gdjs.canchaCode.GDboton_9595regresar_95952024Objects1.length = 0;
gdjs.canchaCode.GDboton_9595regresar_95952024Objects2.length = 0;

gdjs.canchaCode.eventsList0(runtimeScene);
gdjs.canchaCode.GD_95952024Objects1.length = 0;
gdjs.canchaCode.GD_95952024Objects2.length = 0;
gdjs.canchaCode.GDboton_9595regresar_95952024Objects1.length = 0;
gdjs.canchaCode.GDboton_9595regresar_95952024Objects2.length = 0;


return;

}

gdjs['canchaCode'] = gdjs.canchaCode;
