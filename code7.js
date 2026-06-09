gdjs._50013Code = {};
gdjs._50013Code.localVariables = [];
gdjs._50013Code.idToCallbackMap = new Map();
gdjs._50013Code.GD_95952013Objects1= [];
gdjs._50013Code.GD_95952013Objects2= [];
gdjs._50013Code.GDBoton_9595regresar2013Objects1= [];
gdjs._50013Code.GDBoton_9595regresar2013Objects2= [];


gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects = Hashtable.newFrom({"Boton_regresar2013": gdjs._50013Code.GDBoton_9595regresar2013Objects1});
gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects = Hashtable.newFrom({"Boton_regresar2013": gdjs._50013Code.GDBoton_9595regresar2013Objects1});
gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects = Hashtable.newFrom({"Boton_regresar2013": gdjs._50013Code.GDBoton_9595regresar2013Objects1});
gdjs._50013Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boton_regresar2013"), gdjs._50013Code.GDBoton_9595regresar2013Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._50013Code.GDBoton_9595regresar2013Objects1 */
{for(var i = 0, len = gdjs._50013Code.GDBoton_9595regresar2013Objects1.length ;i < len;++i) {
    gdjs._50013Code.GDBoton_9595regresar2013Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton_regresar2013"), gdjs._50013Code.GDBoton_9595regresar2013Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50013Code.GDBoton_9595regresar2013Objects1 */
{for(var i = 0, len = gdjs._50013Code.GDBoton_9595regresar2013Objects1.length ;i < len;++i) {
    gdjs._50013Code.GDBoton_9595regresar2013Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton_regresar2013"), gdjs._50013Code.GDBoton_9595regresar2013Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50013Code.mapOfGDgdjs_9546_959550013Code_9546GDBoton_95959595regresar2013Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antes de Benito", false);
}
}

}


};

gdjs._50013Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50013Code.GD_95952013Objects1.length = 0;
gdjs._50013Code.GD_95952013Objects2.length = 0;
gdjs._50013Code.GDBoton_9595regresar2013Objects1.length = 0;
gdjs._50013Code.GDBoton_9595regresar2013Objects2.length = 0;

gdjs._50013Code.eventsList0(runtimeScene);
gdjs._50013Code.GD_95952013Objects1.length = 0;
gdjs._50013Code.GD_95952013Objects2.length = 0;
gdjs._50013Code.GDBoton_9595regresar2013Objects1.length = 0;
gdjs._50013Code.GDBoton_9595regresar2013Objects2.length = 0;


return;

}

gdjs['_50013Code'] = gdjs._50013Code;
