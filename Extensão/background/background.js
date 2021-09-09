const NORMAL_SPEED = 2;

onExtensionInstalled(setInitial);

function setInitial(){
    setInitialActive();
    setInitialSpeed();
}

async function setInitialActive(){
    const active = await getActive();
    if (active == null) await setInitialActive(true);
}
async function setInitialSpeed(){
    const speed = await getSpeed();
    if (speed == null) await setInitialSpeed(NORMAL_SPEED);
}