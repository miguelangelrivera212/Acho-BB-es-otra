gdjs._49994Code = {};
gdjs._49994Code.localVariables = [];
gdjs._49994Code.idToCallbackMap = new Map();
gdjs._49994Code.GD_95951994Objects1= [];
gdjs._49994Code.GD_95951994Objects2= [];
gdjs._49994Code.GDboton_9595regresar_95951994Objects1= [];
gdjs._49994Code.GDboton_9595regresar_95951994Objects2= [];


gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects = Hashtable.newFrom({"boton_regresar_1994": gdjs._49994Code.GDboton_9595regresar_95951994Objects1});
gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects = Hashtable.newFrom({"boton_regresar_1994": gdjs._49994Code.GDboton_9595regresar_95951994Objects1});
gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects = Hashtable.newFrom({"boton_regresar_1994": gdjs._49994Code.GDboton_9595regresar_95951994Objects1});
gdjs._49994Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_1994"), gdjs._49994Code.GDboton_9595regresar_95951994Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._49994Code.GDboton_9595regresar_95951994Objects1 */
{for(var i = 0, len = gdjs._49994Code.GDboton_9595regresar_95951994Objects1.length ;i < len;++i) {
    gdjs._49994Code.GDboton_9595regresar_95951994Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_1994"), gdjs._49994Code.GDboton_9595regresar_95951994Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._49994Code.GDboton_9595regresar_95951994Objects1 */
{for(var i = 0, len = gdjs._49994Code.GDboton_9595regresar_95951994Objects1.length ;i < len;++i) {
    gdjs._49994Code.GDboton_9595regresar_95951994Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_regresar_1994"), gdjs._49994Code.GDboton_9595regresar_95951994Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49994Code.mapOfGDgdjs_9546_959549994Code_9546GDboton_95959595regresar_959595951994Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antes de Benito", false);
}
}

}


};

gdjs._49994Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49994Code.GD_95951994Objects1.length = 0;
gdjs._49994Code.GD_95951994Objects2.length = 0;
gdjs._49994Code.GDboton_9595regresar_95951994Objects1.length = 0;
gdjs._49994Code.GDboton_9595regresar_95951994Objects2.length = 0;

gdjs._49994Code.eventsList0(runtimeScene);
gdjs._49994Code.GD_95951994Objects1.length = 0;
gdjs._49994Code.GD_95951994Objects2.length = 0;
gdjs._49994Code.GDboton_9595regresar_95951994Objects1.length = 0;
gdjs._49994Code.GDboton_9595regresar_95951994Objects2.length = 0;


return;

}

gdjs['_49994Code'] = gdjs._49994Code;
