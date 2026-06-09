gdjs.DiscografiasCode = {};
gdjs.DiscografiasCode.localVariables = [];
gdjs.DiscografiasCode.idToCallbackMap = new Map();
gdjs.DiscografiasCode.GDFondo_9595discografiasObjects1= [];
gdjs.DiscografiasCode.GDFondo_9595discografiasObjects2= [];
gdjs.DiscografiasCode.GDdtmfObjects1= [];
gdjs.DiscografiasCode.GDdtmfObjects2= [];
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects1= [];
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects2= [];
gdjs.DiscografiasCode.GDx100preObjects1= [];
gdjs.DiscografiasCode.GDx100preObjects2= [];
gdjs.DiscografiasCode.GDNadie_9595SabeObjects1= [];
gdjs.DiscografiasCode.GDNadie_9595SabeObjects2= [];
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects1= [];
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects2= [];
gdjs.DiscografiasCode.GDBotonVolverObjects1= [];
gdjs.DiscografiasCode.GDBotonVolverObjects2= [];
gdjs.DiscografiasCode.GDentrevistasObjects1= [];
gdjs.DiscografiasCode.GDentrevistasObjects2= [];


gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDBotonVolverObjects1Objects = Hashtable.newFrom({"BotonVolver": gdjs.DiscografiasCode.GDBotonVolverObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDUn_95959595verano_95959595sin_95959595tiObjects1Objects = Hashtable.newFrom({"Un_verano_sin_ti": gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDdtmfObjects1Objects = Hashtable.newFrom({"dtmf": gdjs.DiscografiasCode.GDdtmfObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDx100preObjects1Objects = Hashtable.newFrom({"x100pre": gdjs.DiscografiasCode.GDx100preObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDentrevistasObjects1Objects = Hashtable.newFrom({"entrevistas": gdjs.DiscografiasCode.GDentrevistasObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDEl_95959595ultimo_95959595tourObjects1Objects = Hashtable.newFrom({"El_ultimo_tour": gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects1});
gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDNadie_95959595SabeObjects1Objects = Hashtable.newFrom({"Nadie_Sabe": gdjs.DiscografiasCode.GDNadie_9595SabeObjects1});
gdjs.DiscografiasCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver"), gdjs.DiscografiasCode.GDBotonVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDBotonVolverObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa_Principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Un_verano_sin_ti"), gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDUn_95959595verano_95959595sin_95959595tiObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Album_un verano sin ti", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dtmf"), gdjs.DiscografiasCode.GDdtmfObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDdtmfObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://open.spotify.com/playlist/5GqOMj0gq9V7Ft4WYjCxRi?si=1mUWmeD4QKGNCVaLIeIA3Q&pt=98470159e82b6631c25fb190928da6ac", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("x100pre"), gdjs.DiscografiasCode.GDx100preObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDx100preObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "X100pre", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("entrevistas"), gdjs.DiscografiasCode.GDentrevistasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDentrevistasObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "entrevistas", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("El_ultimo_tour"), gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDEl_95959595ultimo_95959595tourObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "El ultimo tour", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nadie_Sabe"), gdjs.DiscografiasCode.GDNadie_9595SabeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DiscografiasCode.mapOfGDgdjs_9546DiscografiasCode_9546GDNadie_95959595SabeObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nadie sabe", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.DiscografiasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DiscografiasCode.GDFondo_9595discografiasObjects1.length = 0;
gdjs.DiscografiasCode.GDFondo_9595discografiasObjects2.length = 0;
gdjs.DiscografiasCode.GDdtmfObjects1.length = 0;
gdjs.DiscografiasCode.GDdtmfObjects2.length = 0;
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects1.length = 0;
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects2.length = 0;
gdjs.DiscografiasCode.GDx100preObjects1.length = 0;
gdjs.DiscografiasCode.GDx100preObjects2.length = 0;
gdjs.DiscografiasCode.GDNadie_9595SabeObjects1.length = 0;
gdjs.DiscografiasCode.GDNadie_9595SabeObjects2.length = 0;
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects1.length = 0;
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects2.length = 0;
gdjs.DiscografiasCode.GDBotonVolverObjects1.length = 0;
gdjs.DiscografiasCode.GDBotonVolverObjects2.length = 0;
gdjs.DiscografiasCode.GDentrevistasObjects1.length = 0;
gdjs.DiscografiasCode.GDentrevistasObjects2.length = 0;

gdjs.DiscografiasCode.eventsList0(runtimeScene);
gdjs.DiscografiasCode.GDFondo_9595discografiasObjects1.length = 0;
gdjs.DiscografiasCode.GDFondo_9595discografiasObjects2.length = 0;
gdjs.DiscografiasCode.GDdtmfObjects1.length = 0;
gdjs.DiscografiasCode.GDdtmfObjects2.length = 0;
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects1.length = 0;
gdjs.DiscografiasCode.GDEl_9595ultimo_9595tourObjects2.length = 0;
gdjs.DiscografiasCode.GDx100preObjects1.length = 0;
gdjs.DiscografiasCode.GDx100preObjects2.length = 0;
gdjs.DiscografiasCode.GDNadie_9595SabeObjects1.length = 0;
gdjs.DiscografiasCode.GDNadie_9595SabeObjects2.length = 0;
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects1.length = 0;
gdjs.DiscografiasCode.GDUn_9595verano_9595sin_9595tiObjects2.length = 0;
gdjs.DiscografiasCode.GDBotonVolverObjects1.length = 0;
gdjs.DiscografiasCode.GDBotonVolverObjects2.length = 0;
gdjs.DiscografiasCode.GDentrevistasObjects1.length = 0;
gdjs.DiscografiasCode.GDentrevistasObjects2.length = 0;


return;

}

gdjs['DiscografiasCode'] = gdjs.DiscografiasCode;
