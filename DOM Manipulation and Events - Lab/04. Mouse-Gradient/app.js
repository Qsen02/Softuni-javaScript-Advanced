function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", onMove);
    gradient.addEventListener("mouseout", outMove);

    function onMove(event) {
        let width = event.target.clientWidth;
        let mousePositionX = event.offsetX / (width - 1);
        let procentX = Math.trunc(mousePositionX * 100);
        document.getElementById("result").textContent = procentX + "%";
    }

    function outMove() {
        document.getElementById("result").textContent = " ";
    }
}