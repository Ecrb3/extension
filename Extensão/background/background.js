const NORMAL_SPEED = 1;

onExtensionsInstalled(setInitial);

function setInitical(){
    setInitialActive();
    SetInitialSpeed();
}

async function setInitialActive(){
    constactive = await getActive();
    if (active == null) await setInitialActive(true);
}
async function setInitialSpeed(){
    const speed = await getSpeed();
    if (speed == null) await setInitialSpeed(NORMAL_SPEED);
}