function preload() {
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(180, 300);
    video = createCapture(VIDEO);
    video.hide();
    Tint = "";
}
function draw() {
    image(video, 0, 0, 400, 400);
    tint(Tint);
}
function apply_filter() {
    Tint = document.getElementById("inputcolor").value;
}
function take_snapshot() {
    save("Snapshot.png");
}