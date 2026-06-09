gdjs.casa_32RCode = {};
gdjs.casa_32RCode.localVariables = [];
gdjs.casa_32RCode.idToCallbackMap = new Map();
gdjs.casa_32RCode.GDfechas_9595variasObjects1= [];
gdjs.casa_32RCode.GDfechas_9595variasObjects2= [];
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1= [];
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects2= [];


gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects = Hashtable.newFrom({"boton_volver_varias_fechas": gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1});
gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects = Hashtable.newFrom({"boton_volver_varias_fechas": gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1});
gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects = Hashtable.newFrom({"boton_volver_varias_fechas": gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1});
gdjs.casa_32RCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_volver_varias_fechas"), gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BOOM", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_volver_varias_fechas"), gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1 */
{for(var i = 0, len = gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1.length ;i < len;++i) {
    gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_volver_varias_fechas"), gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.casa_32RCode.mapOfGDgdjs_9546casa_959532RCode_9546GDboton_95959595volver_95959595varias_95959595fechasObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1 */
{for(var i = 0, len = gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1.length ;i < len;++i) {
    gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.casa_32RCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.casa_32RCode.GDfechas_9595variasObjects1.length = 0;
gdjs.casa_32RCode.GDfechas_9595variasObjects2.length = 0;
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1.length = 0;
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects2.length = 0;

gdjs.casa_32RCode.eventsList0(runtimeScene);
gdjs.casa_32RCode.GDfechas_9595variasObjects1.length = 0;
gdjs.casa_32RCode.GDfechas_9595variasObjects2.length = 0;
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects1.length = 0;
gdjs.casa_32RCode.GDboton_9595volver_9595varias_9595fechasObjects2.length = 0;


return;

}

gdjs['casa_32RCode'] = gdjs.casa_32RCode;
