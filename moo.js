function moo(callback) {
  console.log("start");
  const res = await callback;
  console.log("end", res);
}

moo(setTimeout(() => console.log("this is a msg"), 0));
