function isDotInTriangle(
  x0: number,
  y0: number,
  xa: number,
  ya: number,
  xb: number,
  yb: number,
  xc: number,
  yc: number
): void {
  let check1: number = (xa - x0) * (yb - ya) - (xb - xa) * (ya - y0);
  let check2: number = (xb - x0) * (yc - yb) - (xc - xb) * (yb - y0);
  let check3: number = (xc - x0) * (ya - yc) - (xa - xc) * (yc - y0);
  if (
    (check1 <= 0 && check2 <= 0 && check3 <= 0) ||
    (check1 >= 0 && check2 >= 0 && check3 >= 0)
  ) {
    console.log(`Dot (${x0}:${y0}) is in the triangle`);
  } else {
    console.log(`Dot (${x0}:${y0}) is NOT in the triangle`);
  }
}
isDotInTriangle(1, 1, -1, 0, 2, 4, 4, 1);
isDotInTriangle(4, 4, -1, 0, 2, 4, 4, 1);
