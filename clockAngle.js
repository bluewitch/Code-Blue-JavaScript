// clockAngle.js
// (for the last f*cking time already)
// h = 1..12, m = 0..59
function angle(h,m) {
hAngle = 0.5 * (h * 60 + m);
mAngle = 6 * m;
angle = Math.abs(hAngle - mAngle);
angle = Math.min(angle, 360 - angle);
return angle;
}
