gdjs._50010Code = {};
gdjs._50010Code.localVariables = [];
gdjs._50010Code.idToCallbackMap = new Map();
gdjs._50010Code.GDfomdo_95952010Objects1= [];
gdjs._50010Code.GDfomdo_95952010Objects2= [];
gdjs._50010Code.GDboton_9595regresar_95952010Objects1= [];
gdjs._50010Code.GDboton_9595regresar_95952010Objects2= [];


gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects = Hashtable.newFrom({"boton_regresar_2010": gdjs._50010Code.GDboton_9595regresar_95952010Objects1});
gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects = Hashtable.newFrom({"boton_regresar_2010": gdjs._50010Code.GDboton_9595regresar_95952010Objects1});
gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects = Hashtable.newFrom({"boton_regresar_2010": gdjs._50010Code.GDboton_9595regresar_95952010Objects1});
gdjs._50010Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2010"), gdjs._50010Code.GDboton_9595regresar_95952010Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._50010Code.GDboton_9595regresar_95952010Objects1 */
{for(var i = 0, len = gdjs._50010Code.GDboton_9595regresar_95952010Objects1.length ;i < len;++i) {
    gdjs._50010Code.GDboton_9595regresar_95952010Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2010"), gdjs._50010Code.GDboton_9595regresar_95952010Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50010Code.GDboton_9595regresar_95952010Objects1 */
{for(var i = 0, len = gdjs._50010Code.GDboton_9595regresar_95952010Objects1.length ;i < len;++i) {
    gdjs._50010Code.GDboton_9595regresar_95952010Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_2010"), gdjs._50010Code.GDboton_9595regresar_95952010Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50010Code.mapOfGDgdjs_9546_959550010Code_9546GDboton_95959595regresar_959595952010Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antes de Benito", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._50010Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50010Code.GDfomdo_95952010Objects1.length = 0;
gdjs._50010Code.GDfomdo_95952010Objects2.length = 0;
gdjs._50010Code.GDboton_9595regresar_95952010Objects1.length = 0;
gdjs._50010Code.GDboton_9595regresar_95952010Objects2.length = 0;

gdjs._50010Code.eventsList0(runtimeScene);
gdjs._50010Code.GDfomdo_95952010Objects1.length = 0;
gdjs._50010Code.GDfomdo_95952010Objects2.length = 0;
gdjs._50010Code.GDboton_9595regresar_95952010Objects1.length = 0;
gdjs._50010Code.GDboton_9595regresar_95952010Objects2.length = 0;


return;

}

gdjs['_50010Code'] = gdjs._50010Code;
