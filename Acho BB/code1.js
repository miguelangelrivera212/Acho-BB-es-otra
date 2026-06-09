gdjs.Mapa_95PrincipalCode = {};
gdjs.Mapa_95PrincipalCode.localVariables = [];
gdjs.Mapa_95PrincipalCode.idToCallbackMap = new Map();
gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects1= [];
gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects2= [];
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects1= [];
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects2= [];
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects1= [];
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects2= [];
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects1= [];
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects2= [];
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1= [];
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects2= [];
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1= [];
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects2= [];
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1= [];
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects2= [];
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1= [];
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects2= [];
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects1= [];
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects2= [];


gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelVidaObjects1Objects = Hashtable.newFrom({"CartelVida": gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelVidaObjects1Objects = Hashtable.newFrom({"CartelVida": gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDPanel_95959595vidaObjects1Objects = Hashtable.newFrom({"Panel_vida": gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDBotonVolverObjects1Objects = Hashtable.newFrom({"BotonVolver": gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects1});
gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1});
gdjs.Mapa_95PrincipalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CartelVida"), gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelVidaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_vida"), gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1);
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelVida"), gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelVidaObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_vida"), gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1);
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_discografia"), gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1);
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_discografia"), gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1);
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1.length ;i < len;++i) {
    gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_vida"), gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDPanel_95959595vidaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Vida del artista", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver"), gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDBotonVolverObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa_95PrincipalCode.mapOfGDgdjs_9546Mapa_959595PrincipalCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Discografias", false);
}
}

}


};

gdjs.Mapa_95PrincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects2.length = 0;

gdjs.Mapa_95PrincipalCode.eventsList0(runtimeScene);
gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDFondo_9595MenuSeleccionObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDBenito_9595IdleObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDGlobo_9595preguntaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDTextoPreguntaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelVidaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDCartelDiscografiasObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595discografiaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDPanel_9595vidaObjects2.length = 0;
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects1.length = 0;
gdjs.Mapa_95PrincipalCode.GDBotonVolverObjects2.length = 0;


return;

}

gdjs['Mapa_95PrincipalCode'] = gdjs.Mapa_95PrincipalCode;
